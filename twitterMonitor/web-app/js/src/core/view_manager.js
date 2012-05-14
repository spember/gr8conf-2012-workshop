/*
    Responsible for driving the instantiation of the main View components

 */
TM.Core.ViewManager = function () {
    _.extend(this, Backbone.Events);

    this.views = {};
    // register a view for the manager
    // @param name The instantiated name of the view that will be created
    // @param view Reference to object name in TM.Views
    // @param $el a jQuery (or Zepto) queried element in the DOM to attach to
    this.register = function(name, view, $el) {
        this.views[name] = new TM.Views[view]();
        if ($el) {
            this.views[name].setElement($el);

        }
    };
    // renders and calls bindEvents on each View
    this.start = function (){
        for (var i in this.views) {
            this.views[i].render();
            this.views[i].bindEvents();
        }

    };
}