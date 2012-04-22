TM.Core.IntervalDriver = function () {
    _.extend(this, Backbone.Events);

    this.intervals = {};

    this.start = function () {
        this.intervals.keywordIndividualUpdate = setInterval(function () {
            var keywords = TM.instance.viewManager.views.keywordContainer.keywords,
                i = keywords.length;

            while (i--) {
                keywords.models[i].fetch({
                    success: function (model, data) {
                        if (!data.hasOwnProperty("id")) {
                            model.attachedView.removeUI.call(model.attachedView);
                            model.collection.remove(model, {silent:true});
                        } else {
                            console.log("id");
                        }
                    }
                });
            }
        }, 5000);

        this.intervals.keywordsUpdate = setInterval(function () {
            TM.instance.viewManager.views.keywordContainer.reloadKeywords();
        }, 10000);

    };

}