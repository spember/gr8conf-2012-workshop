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
        console.log("Collection Find max is " +this.collection.maxNumSeen);
    },

    getBarPercentage: function () {
        console.log(this.collection);
        var maxSeen = this.collection.maxNumSeen ? this.collection.maxNumSeen : this.collection.defaultMax;
        console.log (this.maxSeen);
        return Math.round( (this.get("numSeen") / maxSeen) * 100 );
    }






})