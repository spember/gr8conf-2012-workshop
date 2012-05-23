// Contains an error message display
TM.Views.ErrorDisplay = Backbone.View.extend({
    tagName: "div",
    id: "errorDisplay",
    className: "errors rounded",
    initialize: function (options) {
        this.text = options.text;

    },

    render: function () {

        this.el.innerHTML = this.text;
        return this;
    },

    bindEvents: function () {
        // set up self destruction;
        this.selfFade.call(this);
    },

    selfFade: function () {
        var self = this;
        setTimeout( function () {
            self.$el.fadeOut("slow", function () {
                self.unbind();
                self.remove();
            })
        }, 1800);
    }

})