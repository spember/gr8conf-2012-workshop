TM.Views.Keyword = Backbone.View.extend({

    initialize: function (options) {
        //attach a reference on the model
        this.model.attachedView = this;
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
        $(this.el).find(".bar").width(this.model.getBarPercentage() +"%");
    },

    updateDisplayCount: function () {
        var self = this;
        self.$el.find("div.count>span").text(self.model.get("numSeen"));
    },

    // responsible for deleting the keyword on the server and destroying this view
    destroy: function () {
        console.log("destroying ui");
        var self = this;
        //attempt to delete from the server, if successful we proceed with UI removal
        self.model.destroy({success: function () {
            self.removeUI.call(self);
        }});


    },

    // fancy removal
    removeUI: function () {
        var self = this;
        console.log("removing the ui!");
        self.$el.unbind(); //clear any bindings
        self.$el.fadeOut("slow", function () {
            //remove view from the dom
            self.remove();
            TM.instance.viewManager.views.keywordContainer.removeKeyWordView(self);

        });

    },

    bindEvents: function () {
        var self = this;
        //listen for a change; potentially move this into the collection to trigger redraw for all of them
        this.model.on("change:numSeen", function(){
            self.updateGraphWidth.call(self);
            self.updateDisplayCount.call(self);
        });

        this.$el.find(".keyword-remove").on("click", function () {
            self.destroy.call(self);
        });

    }


});