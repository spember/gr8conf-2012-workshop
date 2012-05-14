/*
    Collections object holding Keyword Models
 */
TM.Collections.Keywords = Backbone.Collection.extend({
    url: "/twitterMonitor/keyword",

    model: TM.Models.Keyword,
    // in addition, this collection also keeps track of the current maximum 'numSeen' of the models in its care
    // this maximum is used to help set the width of the bar graphs on each keywords' view. The width of the bar graph
    // is relational to the keywords' current count versus the others (i.e. the bar graph will have a max width of 100%)
    //
    // Thus, we default to 100
    defaultMax: 100,
    maxNumSeen: 0 ,

    initialize: function () {
        this.maxNumSeen = this.defaultMax;
    },

    bindEvents: function (){
        var self = this;
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
        // the 'pluck' function extracts a value from each model in this collection, and places those values in an Array
        var counts = this.pluck("numSeen"),
            i = counts.length,
            max = 0;

        while (i--) {
            if (counts[i] > max) {
                max = counts[i];
            }
        }
        this.maxNumSeen = max > this.defaultMax ? max : this.defaultMax;
    },

    // returns maxNumSeen or defaultMax, of maxNumSeen has not been set yet
    getMaxNumSeen: function () {
        return this.maxNumSeen ? this.maxNumSeen : this.defaultMax;
    }



});