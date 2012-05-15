// Responsible for maintaining the keyword collection and their views
TM.Views.KeywordContainer = Backbone.View.extend({

    initialize: function () {
        this.keywords = new TM.Collections.Keywords();
        this.keywords.bindEvents();
        this.views = [];
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

        TM.instance.viewManager.views.addContainer.on("saved", function () {
            self.reloadKeywords.call(self, true);
        });

        this.keywords.on("empty", function () {
            self.showEmptyMessage();
        });
        // listen for a change event from the collection; update each view... this way, the relative size of the bar graph
        // will update correctly... say, if one keyword is running away with all the hits, the others will adjust their
        // sizes to reflect
        this.keywords.on("change", function () {
            self.updateViews.call(self);
        });

    },

    // update each view in the list with the new value and bar graph width
    updateViews: function () {
        var index = this.views.length,
            view;
        while (index--) {
            view = this.views[index];
            view.updateDisplayValues.call(view);
        }
    },

    // triggers the collection's fetch call, then triggers the rendering of views to the screen
    reloadKeywords: function (add) {
        var self = this;
        this.keywords.fetch({
            add: add,
            success: function (collection, data) {
                self.populateKeywords.call(self, collection, data);
            }
        });
    },

    populateKeywords: function (collection, data) {
        var self = this;

        if(self.views.length === 0) {
            this.$el.html("");
        }
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

        if (!model.attachedView) {
            var view = new TM.Views.Keyword({model:model});
            //render it initially
            this.$el.append($(view.render().el));
            //set the element on the new keyword
            view.setElement(this.$el.children().last());
            //and bind!
            view.bindEvents();
            //and store. We'll need to access the view object's reference later for destruction
            this.views.push(view);
        }
        // else, view already exists


    },

    removeKeyWordView: function (view) {
        var self = this,
            pos = -1,
            i = self.views.length;

        while (i--) {
            if (self.views[i].cid === view.cid) {
                pos = i;
                break;
            }
        }

        if (pos > -1) {
            // remove, if found
            self.views.splice(pos, 1);
        }

    }

});