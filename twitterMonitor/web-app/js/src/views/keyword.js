TM.Views.Keyword = Backbone.View.extend({

    initialize: function (options) {
        //attach a reference on the model so that interval driver knows to delete this view without having to search for it
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

    bindEvents: function () {
        var self = this;

        this.$el.find(".keyword-remove").on("click", function () {
            self.destroy.call(self);
        });

    },

    updateDisplayValues: function () {
        this.updateGraphWidth();
        this.updateDisplayCount();
    },

    // update the bar graph width based on the model's
    updateGraphWidth: function () {
        this.$el.find(".bar").width(this.model.getBarPercentage() +"%");
    },

    updateDisplayCount: function () {
        var self = this;
        self.$el.find("span.num-seen").text(self.model.get("numSeen"));
    },

    // responsible for deleting the keyword on the server and destroying this view
    destroy: function () {
        var self = this;
        //attempt to delete from the server, if successful we proceed with UI removal
        self.model.destroy({success: function () {
            self.removeUI.call(self);
        }});


    },

    // fancy removal
    removeUI: function () {
        var self = this;
        self.$el.unbind(); //clear any bindings
        self.$el.fadeOut("slow", function () {
            //remove view from the dom
            self.remove();
            TM.instance.viewManager.views.keywordContainer.removeKeyWordView(self);

        });

    }




});