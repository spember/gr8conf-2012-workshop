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



$(function () {
    TM.Core.Utils.compileTemplates();
    TM.instance.viewManager = new TM.Core.ViewManager();
    //initialize the base views
    TM.instance.viewManager.register("addContainer", "AddKeywordContainer", $("#addContainer"));
    TM.instance.viewManager.register("tweetContainer", "TweetContainer", $("#tweetContainer"));
    TM.instance.viewManager.register("keywordContainer", "KeywordContainer", $("#keywordContainer"));
    TM.instance.viewManager.start();

    TM.instance.intervalDriver = new TM.Core.IntervalDriver();
    TM.instance.intervalDriver.start();

    console.log("Ready.");
})


