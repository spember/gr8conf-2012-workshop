TM.Collections.Keywords = Backbone.Collection.extend({
    url: "/twitterMonitor/keyword/list",

    model: TM.Models.Keyword,
    defaultMax: 100,
    maxNumSeen: 0 ,

    initialize: function () {
        var self = this;
        this.maxNumSeen = this.defaultMax;

        this.on("reset", function (){
            self.findMax()
        });

        this.on("change", function () {
            self.findMax();
        });

        this.on("destroy", function () {
            if (self.models.length === 0) {
                // alert the higher-ups that the collection is empty
                self.trigger("empty");
            }
        })
    },

    // looks through the collection for the maximum numSeen value
    findMax: function () {
        var counts = this.pluck("numSeen"),
            i = counts.length,
            max = 0;

        while (i--) {
            if (counts[i] > max) {
                max = counts[i];
            }
        }
        this.maxNumSeen = max > this.defaultMax ? max : this.defaultMax;
    }


});