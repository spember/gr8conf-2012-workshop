TM.Views.AddKeywordContainer = Backbone.View.extend({

    initialize: function () {

    },

    render: function () {
        var self = this;
        $(this.el).html(TM.Templates.addContainer({})).find(":checkbox").iphoneStyle({
            checkedLabel: 'KICK IT',
            uncheckedLabel: 'STOP',
            onChange: self.runToggle
        });
        $(this.el).find(".iPhoneCheckContainer").addClass("center-inner right");

    },

    bindEvents: function () {

        var field = this.$el.find("input"),
            toggle = this.$el.find(":checkbox"),
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
    },


    runToggle: function (el, value) {
        if (value) {
            TM.instance.intervalDriver.start();
        } else {
            TM.instance.intervalDriver.stop();
        }

    }


});