TM.Models.Keyword = Backbone.Model.extend({

    url: function () {
        return "/twitterMonitor/keyword/"+this.get("id");
    },

    initialize: function(options) {
    },

    getBarPercentage: function () {
        var maxSeen = this.collection.getMaxNumSeen(),
            max = (this.get("numSeen") / maxSeen) * 100;
        // ensure a max of 100
        if (max > 100) {
            max = 100;
        }
        return Math.round( max );
    }






})