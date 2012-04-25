TM.Core.ViewManager = function () {
    _.extend(this, Backbone.Events);

    this.views = {};

    this.register = function(name, view, $el) {
        this.views[name] = new TM.Views[view]();
        if ($el) {
            this.views[name].setElement($el);

        }
    };

    this.start = function (){
        for (var i in this.views) {
            this.views[i].render();
            this.views[i].bindEvents();
        }

    };
}