// Here, we use Intervals to control actions that are to repeat and that we wish to control with the 'on/off' toggle switch
//
// If this were a larger application, one should use timers that call themselves again when finished, or requestAnimationFrame
// instead, due to variations in how browsers can time these events. However, much of that concern is when dealing with animation, which
// we are not doing here.
TM.Core.IntervalDriver = function () {
    _.extend(this, Backbone.Events);

    this.intervals = {};

    this.start = function () {

        TM.instance.kickingIt = true;
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
        TM.instance.kickingIt = false;
        for ( name in this.intervals) {
            if (typeof this.intervals[name] === "number") {
                clearInterval(this.intervals[name]);
                delete this.intervals[name];
            }

        }
    }

}