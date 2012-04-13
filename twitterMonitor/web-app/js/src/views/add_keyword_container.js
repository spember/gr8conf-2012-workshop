TM.Views.AddKeywordContainer = Backbone.View.extend({

    initialize: function () {

    },

    render: function () {
        $(this.el).html(TM.Templates.addContainer({}));
    },

    bindEvents: function () {

        var field = this.$el.find("input"),
            self = this;

        this.$el.find("a").on("click", function() {
            $.ajax({
                url:"/twitterMonitor/keyword/save",
                data: {
                  text: field.val()
                },
                type:"POST",
                success: function () {
                    self.trigger("saved");
                    field.val("");
                }
            });
        });
    }
});