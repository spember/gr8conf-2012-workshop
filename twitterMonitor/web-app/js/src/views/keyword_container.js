TM.Views.KeywordContainer = Backbone.View.extend({

    initialize: function () {
        this.keywords = new TM.Collections.Keywords();
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

    },

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
        if(!this.getViewByModel(model)){
            var view = new TM.Views.Keyword({model:model});
            //render it initially
            this.$el.append($(view.render().el).html());
            //set the element on the new keyword
            view.setElement(this.$el.children().last());
            //and bind!
            view.bindEvents();
            //and store;
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

    },

    getViewByModel: function (model) {
        var self = this,
            i = self.views.length;

        while (i--) {
            if (self.views[i].model.id === model.id) {
                return self.views[i];
            }
        }
    }

});