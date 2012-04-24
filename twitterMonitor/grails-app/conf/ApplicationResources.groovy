modules = {
    core {
        //breaking resources loading into a combination of resource plugin and head.js to showcase both options
        for (name in ['jquery-1.7.2.min', 'underscore-min', 'backbone', 'handlebars']) {
            resource url: [dir: 'js', file: name + '.js']
        }

    }

    monitor {
        List files = [
                "monitor",
                "core/utils",
                "core/view_manager",
                "core/interval_driver",
                "models/keyword",
                "models/tweet",
                "collections/keywords",
                "views/add_keyword_container",
                "views/tweet_container",
                "views/keyword_container",
                "views/keyword",
                "views/tweet"

        ]

        for (name in files) {
            resource url: [dir:'js/src', file: name + ".js"]
        }

    }
}