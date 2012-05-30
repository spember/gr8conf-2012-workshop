// Responsible for maintaining the keyword collection and their views
TM.Views.KeywordContainer = Backbone.View.extend({

    initialize: function () {
        this.keywords = new TM.Collections.Keywords();
        this.keywords.bindEvents();
    },

    render: function () {

        $(this.el).html(TM.Templates.keywordContainer({}));
        return this;
    },

    bindEvents: function () {
        var self = this;
        // start of page functionality
        // first, lets see if any keywords actual exist
        this.reloadKeywords(false);

        // keyload the keywords if we have saved a new one (look at add_keyword_container.js for the origin of the event)
        TM.instance.viewManager.views.addContainer.on("saved", function () {
            self.reloadKeywords.call(self, true);
        });
        // if we have no keyword models, show an empty message
        this.keywords.on("empty", function () {
            self.showEmptyMessage();
        });
        // listen for a change event from the collection; update each view... this way, the relative size of the bar graph
        // will update correctly... say, if one keyword is running away with all the hits, the others will adjust their
        // sizes to reflect
        this.keywords.on("change", function () {
            TM.instance.trigger("update:keywords");
        });

    },

    // triggers the collection's fetch call, then triggers the rendering of views to the screen
    // @param add Determine whether or not to 'add' new elements rather than reset the whole collection
    //
    reloadKeywords: function (add) {
        var self = this;
        console.log("reloading keywords with add = " +add)
        this.keywords.fetch({
            add: add,
            success: function (collection, data) {
                self.populateKeywords.call(self, collection, data);
            }
        });
    },

    populateKeywords: function (collection, data) {
        var self = this;

        if(self.$el.find(".keyword").length === 0) {
            this.$el.html("");
        }
        //underscore.js's 'each' iterator function
        _.each(collection.models, function (model) {
            self.createView.call(self, model);
        });

        //display empty message
        if (collection.models.length === 0){
            this.showEmptyMessage()
        }
    },

    showEmptyMessage: function () {
        this.$el.html(TM.Templates.keywordContainerEmpty());
    },

    createView: function(model) {
        //first, ensure the view hasn't already been created
        if (!model.hasView) {
            var view = new TM.Views.Keyword({model:model});
            //render it initially
            this.$el.append(view.render().$el);
            //set the element on the new keyword
            view.setElement(this.$el.children().last());
            //and bind!
            view.bindEvents();
        }
        // else, view already exists
    }
});