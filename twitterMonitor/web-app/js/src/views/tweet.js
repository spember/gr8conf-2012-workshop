TM.Views.Tweet = Backbone.View.extend({

    initialize: function (options) {

    },

    render: function () {
        var self = this;

        return TM.Templates.tweet({
            class: self.model.id % 2 === 0 ? "even" : "odd",
            imageUrl: self.model.get("profileImageUrl"),
            text: self.model.get("text"),
            userName: self.model.get("userName")
        });

    }

});