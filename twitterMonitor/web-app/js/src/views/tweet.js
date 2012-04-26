TM.Views.Tweet = Backbone.View.extend({

    initialize: function (options) {

    },

    render: function () {
        var ctx = this.mapModelToContext();
        return TM.Templates.tweet(ctx);

    },

    // because generating the context for rendering has some small variability,
    // we pull out the generation to a separate function for easier testing
    mapModelToContext: function () {
        return {
            class: this.model.id % 2 === 0 ? "even" : "odd",
            imageUrl: this.model.get("profileImageUrl"),
            text: this.model.get("text"),
            userName: this.model.get("userName")
        };
    }

});