TM.Views.KeywordContainer = Backbone.View.extend({

    initialize: function () {
        this.keywords = new TM.Collections.Keywords();
    },

    render: function () {

        $(this.el).html(TM.Templates.keywordContainer({}));

        return this;
    },

    bindEvents: function () {
        var self = this;
        // start of page functionality
        // first, lets see if any keywords actual exist
        this.reloadKeywords();

        TM.instance.viewManager.views.addContainer.on("saved", function () {
            self.reloadKeywords.call(self);
        });

    },

    reloadKeywords: function () {
        var self = this;
        console.log("**reloading keywords");
        this.keywords.fetch({
            success: function (c, m) {
                self.populateKeywords.call(self, c, m);
            }
        });
    },



    populateKeywords: function (collection, data) {
        var self = this;
        //if (data.length > 0) {
            this.$el.html("");
            _.each(data, function (datum) {
                self.addNewKeywordFromData.call(self,datum);

            });
        //} else {
            //display empty message
        if (TM.instance.keywords.length === 0){
            this.showEmptyMessage()
        }

        //}
    },

    showEmptyMessage: function () {
        this.$el.html(TM.Templates.keywordContainerEmpty());
    },

    addNewKeywordFromData: function (data) {
        //create
        if(data.text !== "") {
            var model = new TM.Models.Keyword(data),
                view;
            //save onto our instance stack
            TM.instance.keywords.push(model);
            // create a new view for the keyword
            view = new TM.Views.Keyword({model:model});
            //render it initially
            this.$el.append($(view.render().el).html());
            //set the element on the new keyword
            view.setElement(this.$el.children().last());
            //and bind!
            view.bindEvents();
        }
    }





});