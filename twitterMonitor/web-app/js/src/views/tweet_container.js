TM.Views.TweetContainer = Backbone.View.extend({

    initialize: function () {
        //max tweets to render at a time, although several (the css overflow) will be hidden
        this.NUM_RENDER = 10;
        //number that once crossed triggers the service to look for more tweets
        this.LOW_THRESHOLD = 10;
        // array to track the views without having to re-query each time
        this.views = [];
        this.lastTweetId = -1;
        // lock to prevent fetching twice
        this.fetching = false;

        //Time for a tweet to display before fading
        this.tweetLiveTime = 1600;
        //Threshold, in px,  above which to display the tweets
        this.displayThreshold = 700;
        // class that the view will look for to stop searching; we could also set a flag internally,
        // but this does double duty by hiding the view as well
        this.hideTweetClass = "verboten";
    },

    render: function () {

        $(this.el).html(TM.Templates.tweetContainer({}));

        this.visibilityCheck();

        // Backbone convention is to return this from render()
        return this;
    },

    bindEvents: function () {

        var self = this;

        self.on("tweetsReceived", function () {
            self.createTweetViews.call(self);
        });

        self.on("start", function () {
            //only allow fetching if we're not already fetching, and the 'go' switch has been switched on
            if (!self.fetching && TM.instance.kickingIt) {
                self.fetchTweets.call(self);
            }

        });

        if (self.allowFetching()) {
            self.startTweetFade();
        }

        // we want to only show the tweets if the browser window is above a certain threshold
        window.addEventListener("resize", function () {
            self.visibilityCheck();
        });
    },

    // Checks the innerWidth of the window, and adds a class to this view if the width is under a certain threshold
    // will remove the class once the threshold is crossed again
    visibilityCheck: function () {
        var width = window.innerWidth,
            hasClass = this.$el.hasClass(this.hideTweetClass);

        if (width <= this.displayThreshold && !hasClass) {

            this.el.classList.add(this.hideTweetClass);
            this.stopTweetFade();

        } else if (width > this.displayThreshold && hasClass){

            this.el.classList.remove(this.hideTweetClass);
            this.startTweetFade();
            // also, alert the container that we can begin receiving tweets again
            if (TM.instance.tweets.length === 0) {
                this.trigger("start");
            }
        }
    },

    allowFetching: function () {
        var allow = true;
        if (this.$el.hasClass(this.hideTweetClass)) {
            allow = false;
        }
        return allow;
    },

    // sets up an interval which will fade and remove the topmost tweet
    startTweetFade: function () {
        var self = this;
        self.tweetFadeInterval = setInterval(function () {
            self.fadeOldestTweet.call(self);
        }, self.tweetLiveTime);

    },
    // clears the interval
    stopTweetFade: function () {
        clearInterval(this.tweetFadeInterval);
    },

    // fades and removes the 'oldest' tweet
    fadeOldestTweet: function () {
        var view,
            self = this;

        if (self.views.length > 0) {
            self.views[0].$el.fadeOut("slow", function () {
                view = self.views.shift();
                // the following 2 lines are a technique for deleting a backbone object
                view.unbind();
                view.remove();

                if (self.views.length < self.NUM_RENDER) {
                    self.createTweetViews.call(self);
                }
            });
        }
    },

    // will attempt to pull tweets from the instance queue and build views from them
    createTweetViews: function () {
        var i,
            max,
            tweets = TM.instance.tweets;

        // clear out empty message
        if (this.views.length === 0 && tweets.length > 0) {
            this.$el.html("");
        }
        //will usually be 1 if things are flowing as planned
        max = this.NUM_RENDER - this.views.length;
        if (max > tweets.length) {
            max = tweets.length;
        }

        for (var i = 0; i < max; i++) {
            this.createTweetView(tweets);
        }

    },

    // creates an individual view from the oldest tweet in the queue.
    createTweetView: function (tweets) {
        var model = tweets.shift(),
            view = new TM.Views.Tweet({model:model});
        //track the last seen id;
        this.lastTweetId = model.id;
        this.$el.append(view.render().el);
        view.setElement(this.$el.find(".tweet").last());
        this.views.push(view);
        // finally check how many tweets are in the queue. If at threshold, get more
        if (tweets.length === this.LOW_THRESHOLD) {
            this.trigger("start");
        }

    },

    fetchTweets: function () {
        // if the container has our hidden class, prevent tweets from fetching.
        if (this.allowFetching()) {
            var tweets = TM.instance.tweets,
                self = this;
            self.fetching = true;

            $.ajax({
                url:"/twitterMonitor/tweet/listBatch",
                data: {
                    id: self.lastTweetId > 0 ? self.lastTweetId : null
                },
                type:"GET",
                success: function (data) {
                    var max = data.length
                    for(var i = 0; i < max; i ++) {
                        TM.instance.tweets.push(new TM.Models.Tweet(data[i]));
                    }
                    // if no views are present, alert the container that it's time to start rendering
                    if (self.views.length === 0) {
                        self.trigger("tweetsReceived");
                    }
                    self.fetching = false;
                },
                failure: function (data) {
                    self.fetching = false;
                }
            });
        }
    }




});
