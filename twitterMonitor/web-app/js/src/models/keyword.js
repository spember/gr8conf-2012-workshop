TM.Models.Keyword = Backbone.Model.extend({

    urlRoot: "/twitterMonitor/keyword",

    url: function () {
        // default to the 'fetch' url
        return this.urlRoot + "/show/" + this.get("id");
    },

    // backbone.js and Grails' default REST schemes do not coincide. Rather than make Grails fit to Backbone, we make
    // Backbone fit to Grails. This method generates the url path to the Delete action on the KeywordController
    deleteURL: function () {
        return this.urlRoot +"/delete/" + this.get("id");
    },

    initialize: function(options) {
    },

    getBarPercentage: function () {
        var maxSeen = this.collection.getMaxNumSeen(),
            max = (this.get("numSeen") / maxSeen) * 100;
        console.log("Max seen of "+maxSeen);
        // ensure a max of 100
        if (max > 100) {
            max = 100;
        }
        return Math.round( max );
    }






})