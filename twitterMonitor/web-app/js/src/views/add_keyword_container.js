/*
    Controls the view and actions surrounding the 'add keyword' functionality
 */
TM.Views.AddKeywordContainer = Backbone.View.extend({

    render: function () {
        var self = this;
        // render the template, and instantiate the iPhone style control to start and stop the interval driver
        $(this.el).html(TM.Templates.addContainer({})).find(":checkbox").iphoneStyle({
            checkedLabel: 'STOP',
            uncheckedLabel: 'KICK IT!',
            onChange: self.runToggle
        });

        $(this.el).find(".iPhoneCheckContainer").addClass("center-inner right");
        return this;
    },

    bindEvents: function () {

        var field = this.$el.find("input"),
            toggle = this.$el.find(":checkbox"),
            self = this;


        this.$el.find("a").on("click", function() {
            $.ajax({
                url:"/twitterMonitor/keyword",
                data: {
                  text: field.val()
                },
                type:"POST",
                success: function (data) {
                    if(data.status === false) {
                        console.log("No good!");
                        self.displayError(data);
                    } else {
                        self.trigger("saved");
                    }
                    field.val("");

                }
            });
        });
    },

    displayError: function(data) {
        console.log(data.errors);

        var error = new TM.Views.ErrorDisplay({text:data.errors});
        $("body").append(error.render().el);
        error.bindEvents();

    },

    // starts and stops the intervalDriver
    runToggle: function (el, value) {
        if (value) {
            TM.instance.intervalDriver.start();
        } else {
            TM.instance.intervalDriver.stop();
        }

    }


});