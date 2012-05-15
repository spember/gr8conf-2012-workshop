/*
    Client-side representation of the Keyword
 */
TM.Models.Keyword = Backbone.Model.extend({
    defaults: {
        "numSeen": 0
    },

    url: function () {
        return "/twitterMonitor/keyword/" + this.get("id");
    },

    // Returns the relative percentage of the bar graph's width compared with the other models in the collection
    getBarPercentage: function () {
        // A model that becomes part of a collection gets assigned a reference
        var maxSeen = this.collection.getMaxNumSeen(),
            percentage = (this.get("numSeen") / maxSeen) * 100;
        // ensure a max percentage of 100
        if (percentage > 100) {
            percentage = 100;
        }
        return Math.round( percentage );
    }

});