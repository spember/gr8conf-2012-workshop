TM.Models.Keyword = Backbone.Model.extend({
    url: function () {
        return "/twitterMonitor/keyword/show/" + this.get("id");
    },


    initialize: function(options) {
        var self = this;
        setInterval(function () {
            self.fetch();
        }, 5000);
    }





})