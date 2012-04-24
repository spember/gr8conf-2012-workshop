TM.Views.TweetContainer = Backbone.View.extend({

    initialize: function () {
        //max tweets to display in the container at a given time
        this.MAX = 5;
    },

    render: function () {

        $(this.el).html(TM.Templates.tweetContainer({}));

        return this;
    },

    bindEvents: function () {
        //change this to be on intevalDriver
        var self = this;
        self.fetchTweets();
        self.tweetFade = setInterval(function () {
            var tweets = self.$el.find(".tweet");
            if (tweets.length > 0) {
                tweets.first().fadeOut("slow", function () {
                    $(this).remove();
                })
            }
        }, 90000000);
        self.on("ready", function () {
            var i,
                max;

            // clear out empty message
            if (this.$el.find(".tweet").length === 0 && TM.instance.tweets.length > 0) {
                this.$el.html("");
            }

            if (self.MAX > TM.instance.tweets.length) {
                max = TM.instance.tweets.length;
            } else {
                max = self.MAX;
            }

            for (var i = 0; i < max; i++) {
                self.createTweetView.call(self);
            }
        });
    },

    createTweetView: function () {
        var model = TM.instance.tweets.shift(),
            view = new TM.Views.Tweet({model:model});
        this.$el.append(view.render());
        view.setElement(this.$el.find(".tweet").last());


    },

    fetchTweets: function () {
        var lastTweetId = -1,
            tweets = TM.instance.tweets,
            self = this;
        if(tweets.length > 0) {
            lastTweetId = tweets[tweets.length-1].get("id");
        }
        $.ajax({
            url:"/twitterMonitor/message/listBatch",
            data: {
                text: lastTweetId > 0 ? lastTweetId : null
            },
            type:"GET",
            success: function (data) {
                var max = data.length
                for(var i = 0; i < max; i ++) {
                    TM.instance.tweets.push(new TM.Models.Tweet(data[i]));
                }
                if (max > 0) {
                    self.trigger("ready");
                }
            }
        });
    }





});
