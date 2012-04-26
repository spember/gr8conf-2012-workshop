TM.Views.Keyword = Backbone.View.extend({

    initialize: function (options) {
        //attach a reference on the model
        this.model.attachedView = this;
    },

    render: function () {
        console.log("rendering " +this.model.get("text"));
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
        var width = this.model.getBarPercentage();
        $(this.el).find(".bar").width(width +"%");
    },

    updateDisplayCount: function () {
        var self = this;
        self.$el.find("div.count>span").text(self.model.get("numSeen"));
    },

    // responsible for deleting the keyword on the server and destroying this view
    destroy: function () {
        var self = this;
        //attempt to delete from the server, if successful we proceed with UI removal
        self.model.destroy({url:self.model.deleteURL(), success: function () {
            self.removeUI.call(self);
        }});


    },

    // fancy removal
    removeUI: function () {
        var self = this;
        self.$el.die(); //clear any bindings
        self.$el.fadeOut("slow", function () {
            //remove view from the dom
            self.$el.remove();
            TM.instance.viewManager.views.keywordContainer.removeKeyWordView(self);

        });

    },

    bindEvents: function () {
        var self = this;
        //listen for a change; potentially move this into the collection to trigger redraw for all of them
        this.model.on("change:numSeen", function(){
            console.log("model change on numSeen");
            self.updateGraphWidth.call(self);
            self.updateDisplayCount.call(self);
        });

        this.$el.find(".keyword-remove").on("click", function () {
            self.destroy.call(self);
        });

    }


});