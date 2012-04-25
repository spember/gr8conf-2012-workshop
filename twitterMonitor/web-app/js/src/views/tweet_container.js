TM.Views.TweetContainer = Backbone.View.extend({

    initialize: function () {
        //max tweets to display in the container at a given time
        this.NUM_SHOW = 6;
        //max tweets to render (and NUM_RENDER - NUM_SHOW be hidden) at a time
        this.NUM_RENDER = 10;
        //number that once crossed triggers the service to look for more tweets
        this.LOW_THRESHOLD = 10;
        // array to track the views without having to re-query each time
        this.views = [];
        this.lastTweetId = -1;
        // lock to prevent fetching twice
        this.fetching = false;
    },

    render: function () {

        $(this.el).html(TM.Templates.tweetContainer({}));

        return this;
    },

    bindEvents: function () {
        //change this to be on intevalDriver
        var self = this;

        //self.fetchTweets(true);

        self.tweetFade = setInterval(function () {
            var view;
            if (self.views.length > 0) {
                self.views[0].$el.fadeOut("slow", function () {
                    view = self.views.shift();
                    view.off();
                    view.unbind();
                    view.remove();

                    if (self.views.length < self.NUM_RENDER) {
                        self.createTweetViews.call(self);
                    }
                });
            }
        }, 1600);

        self.on("ready", function () {
            self.createTweetViews.call(self);
        });

        self.on("start", function () {
            if (!self.fetching) {
                self.fetchTweets.call(self);
            }

        });
    },

    // will attempt to pull tweets from the instance queue and build views from them
    createTweetViews: function () {
        var i,
            max;

        // clear out empty message
        if (this.views.length === 0 && TM.instance.tweets.length > 0) {
            this.$el.html("");
        }
        //will usually be 1 if things are flowing correctly
        max = this.NUM_RENDER - this.views.length;
        if (max > TM.instance.tweets.length) {
            max = TM.instance.tweets.length;
        }

        for (var i = 0; i < max; i++) {
            this.createTweetView();
        }

    },

    createTweetView: function () {
        var tweets = TM.instance.tweets,
            model = tweets.shift(),
            view = new TM.Views.Tweet({model:model});
        //track the last seen id;
        this.lastTweetId = model.id;
        this.$el.append(view.render());
        view.setElement(this.$el.find(".tweet").last());
        this.views.push(view);
        // finally check how many tweets are in the queue. If at threshold, get more
        if (tweets.length === this.LOW_THRESHOLD) {
            this.trigger("start");
        }

    },

    fetchTweets: function () {
        var tweets = TM.instance.tweets,
            self = this;
        self.fetching = true;
        console.log("fetching with last id = " +self.lastTweetId);
        $.ajax({
            url:"/twitterMonitor/message/listBatch",
            data: {
                id: self.lastTweetId > 0 ? self.lastTweetId : null
            },
            type:"GET",
            success: function (data) {
                var max = data.length
                for(var i = 0; i < max; i ++) {
                    TM.instance.tweets.push(new TM.Models.Tweet(data[i]));
                }
                if (self.views.length === 0) {
                    self.trigger("ready");
                }
                self.fetching = false;
            },
            failure: function (data) {
                self.fetching = false;
            }
        });
    },


    cycleTweets: function () {

    }

    /*
        Poll every few seconds, if no tweets in queue, ask server for some

        When fetching tweets,  store in queue. If no views are present, send a kickoff event

        Kick off event starts cycling.
        During cycling:
            -min(tweet_size, MAXNUM) tweets are shifted from the queue and stuffed into a view
            -view is attached to container, which displays max(0,MINNUM) tweets


        Tweet container routinely removes the top-most tweet, if any tweets exist

     */




});
