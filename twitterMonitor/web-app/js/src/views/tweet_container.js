TM.Views.TweetContainer = Backbone.View.extend({

    initialize: function () {
        //max tweets to display in the container at a given time
        this.MAX = 5;
        this.views = [];
        this.lastTweetId = -1;
    },

    render: function () {

        $(this.el).html(TM.Templates.tweetContainer({}));

        return this;
    },

    bindEvents: function () {
        //change this to be on intevalDriver
        var self = this;

        self.fetchTweets(true);
        self.tweetFade = setInterval(function () {
            var view;
            if (self.views.length > 0) {
                self.views[0].$el.fadeOut("slow", function () {
                    view = self.views.shift();
                    view.off();
                    view.unbind();
                    view.remove();

                    if (self.views.length < self.MAX) {
                        self.createTweetViews.call(self);
                    }
                });
            }
        }, 1000);

        self.on("ready", function () {
            self.createTweetViews.call(self);
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

        if (this.MAX > TM.instance.tweets.length) {
            max = TM.instance.tweets.length;
            //ahh!
            this.fetchTweets(false);
        } else {
            max = this.MAX;
        }

        for (var i = 0; i < max; i++) {
            this.createTweetView();
        }

    },

    createTweetView: function () {
        var model = TM.instance.tweets.shift(),
            view = new TM.Views.Tweet({model:model});
        this.lastTweetId = model.id;
        this.$el.append(view.render());
        view.setElement(this.$el.find(".tweet").last());
        this.views.push(view);


    },

    fetchTweets: function (sendTrigger) {
        var tweets = TM.instance.tweets,
            self = this;

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
                if (max > 0 && sendTrigger) {
                    self.trigger("ready");
                }
            }
        });
    }





});
