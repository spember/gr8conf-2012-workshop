TM.Views.Keyword = Backbone.View.extend({

    initialize: function (options) {
        this.model = new TM.Models.Keyword(options)
    },

    render: function () {
        var self = this;
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

    // responsible for deleting the keyword on the server and destroying this view
    remove: function () {
        console.log("goodbye");
        //research backbone delete, but for now...

        $(this.el).die();
        $(this.el).fadeOut("slow", function () {
            $(this.el).remove();
        });

    },

    bindEvents: function () {
        var self = this;

        //listen for a change; potentially move this into the collection to trigger redraw for all of them
        this.model.on("change:numSeen", function(){
            console.log("changed!");
            self.render();
        });

        this.$el.find(".keyword-remove").on("click", function () {
           console.log("clicked!");
            self.remove.call(self);
        });

    }


});