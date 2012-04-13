TM.Views.MessageContainer = Backbone.View.extend({

    initialize: function () {
    },

    render: function () {

        $(this.el).html(TM.Templates.messageContainer({}));

        return this;
    },

    bindEvents: function () {
        console.log("soon");
    }



});
