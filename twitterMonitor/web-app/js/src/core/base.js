// initializes the Twitter Monitor JavaScript Namespace structure. Should be loaded first


// instantiate the TwitterMonitor (TM) object, if it doesn't exist
if (typeof(TM) === "undefined") TM = {};

// set up a object to hold instance values
TM.instance = new function () {
    // extending our instance object with Backbone.Events gives us a convenient place to fire and listen for 'global'
    // events within our namespace
    _.extend(this, Backbone.Events);
    this.keywords = [],
    this.tweets = []
};

// and set up objects to hold all our various Backbone classes
TM.Models = {};
TM.Collections = {};
TM.Templates = {};
TM.Core = {}; //
TM.Views = {};
TM.Helpers = {};
TM.Helpers.Resources = {};
