TM.Views.Keyword = Backbone.View.extend({

    initialize: function () {

    },

    render: function () {
        console.log("rendering " +this.model.get("text"));

        $(this.el).html(TM.Templates.keyword({
            text: this.model.get("text"),
            numSeen: this.model.get("numSeen")
        }));
        this.updateGraphWidth();
        return this;
    },

    //parse custom objects from a response string... but we should be sending only what we need, anyway
    /*
    parse: function (response) {

    },
    */

    updateGraphWidth: function () {

        var width = Math.round(this.model.get("numSeen"));
        $(this.el).find(".bar").width(width +"%");
    },

    bindEvents: function () {
        var self = this;

        //listen for a change; potentially move this into the collection to trigger redraw for all of them
        this.model.on("change:numSeen", function(){
            console.log("changed!");
            self.render();
        });

    }


});