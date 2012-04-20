TM.Models.Keyword = Backbone.Model.extend({

    urlRoot: "/twitterMonitor/keyword/",

    url: function () {
        // default to the 'fetch' url
        return "/twitterMonitor/keyword/show/" + this.get("id");
    },



    initialize: function(options) {


    }






})