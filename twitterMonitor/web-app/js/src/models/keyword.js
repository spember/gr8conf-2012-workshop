/*
    Client-side representation of the Keyword
 */
TM.Models.Keyword = Backbone.Model.extend({

    url: function () {
        return "/twitterMonitor/keyword/"+this.get("id");
    },

    // Returns the relative percentage of the bar graph's width compared with the other models in the collection
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