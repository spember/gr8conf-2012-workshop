TM.Views.Keyword = Backbone.View.extend({

    initialize: function (options) {
        // attach a flag on the model so that we do not recreate views
        this.model.hasView = true;
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

        this.model.on("destroy", function () {
            self.removeUI.call(self);
        });
        // note the use of 'self' as a third parameter. Because multiple listeners will be set up on TM.instance,
        // we need to specify this View's particular context so that we remove only this View's listener.
        TM.instance.on("update:keywords", function () {
            self.updateDisplayValues.call(self);
        }, self);

    },

    // convenience method to handle these two functions as a single callback
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
        self.model.destroy({silent: true, wait:true, success: function () {
            console.log("model destroyed, calling remove UI");
            self.removeUI.call(self);
        }});
    },

    // fancy removal
    removeUI: function () {
        var self = this;
        self.$el.unbind(); //clear any bindings
        self.model.off();
        //specify our context for the unbind
        TM.instance.off(null, null, this);
        self.$el.fadeOut("slow", function () {
            //remove view from the dom
            self.remove();
        });
    }
});