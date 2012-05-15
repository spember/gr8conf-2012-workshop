// initializes the Twitter Monitor Javascript Namespace structure. Should be loaded first


// instantiate the TwitterMonitor (TM) object, if it doesn't exist
if (typeof(TM) === "undefined") TM = {};

// set up a object to hold instance values
TM.instance = {
    keywords: [],
    tweets: []
};

// and set up objects to hold all our various Backbone classes
TM.Models = {};
TM.Collections = {};
TM.Templates = {};
TM.Core = {}; //
TM.Views = {};
TM.Helpers = {};
TM.Helpers.Resources = {};
