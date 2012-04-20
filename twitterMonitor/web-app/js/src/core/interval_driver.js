TM.Core.IntervalDriver = function () {
    _.extend(this, Backbone.Events);

    this.intervals = {};

    this.start = function () {
        this.intervals.keywordUpdate = setInterval(function () {
            var keywords = TM.instance.viewManager.views.keywordContainer.keywords,
                i = keywords.length;

            while (i--) {
                keywords.models[i].fetch();
            }
        }, 5000);

        console.log("intervals started");
    };

}