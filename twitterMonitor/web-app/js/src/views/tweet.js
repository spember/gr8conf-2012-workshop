TM.Views.Tweet = Backbone.View.extend({

    initialize: function (options) {

    },

    render: function () {
        var self = this;
        console.log(self.model);
        return TM.Templates.tweet({
            imageUrl: self.model.get("profileImageUrl"),
            text: self.model.get("text"),
            userName: self.model.get("userName")
        });
    }

});