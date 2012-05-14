
$(function () {
    TM.Core.Utils.compileTemplates();
    TM.instance.viewManager = new TM.Core.ViewManager();
    //initialize the base views
    TM.instance.viewManager.register("addContainer", "AddKeywordContainer", $("#addContainer"));
    TM.instance.viewManager.register("tweetContainer", "TweetContainer", $("#tweetContainer"));
    TM.instance.viewManager.register("keywordContainer", "KeywordContainer", $("#keywordContainer"));
    TM.instance.viewManager.start();

    TM.instance.intervalDriver = new TM.Core.IntervalDriver();

})


