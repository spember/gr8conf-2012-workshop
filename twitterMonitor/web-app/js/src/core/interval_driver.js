TM.Core.IntervalDriver = function () {
    _.extend(this, Backbone.Events);

    this.intervals = {};

    this.start = function () {
        console.log("Kick it!");
        this.intervals.keywordIndividualUpdate = setInterval(function () {
            var keywords = TM.instance.viewManager.views.keywordContainer.keywords,
                i = keywords.length;

            while (i--) {
                keywords.models[i].fetch({
                    success: function (model, data) {
                        if (!data.hasOwnProperty("id")) {
                            model.attachedView.removeUI.call(model.attachedView);
                            model.collection.remove(model, {silent:true});
                        }
                    }
                });
            }
        }, 5000);

        this.intervals.keywordsUpdate = setInterval(function () {
            TM.instance.viewManager.views.keywordContainer.reloadKeywords(true);
        }, 10000);

        //periodically look for more tweets, but only if we're at zero
        this.intervals.lookForTweets = setInterval(function () {
            if (TM.instance.tweets.length === 0) {
                TM.instance.viewManager.views.tweetContainer.trigger("start");
            }
        }, 7000);

    };

    // stop the polling
    this.stop = function () {
        for ( name in this.intervals) {
            if (typeof this.intervals[name] === "number") {
                clearInterval(this.intervals[name]);
                delete this.intervals[name];
            }

        }
    }

}