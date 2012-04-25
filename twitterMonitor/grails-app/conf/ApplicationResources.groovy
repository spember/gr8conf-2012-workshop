modules = {
    core {
        //load lib js
        for (name in ['jquery-1.7.2.min', 'underscore-min', 'backbone', 'handlebars', 'iphone-style-checkboxes']) {
            resource url: [dir: 'js/libs', file: name + '.js']
        }

        //load lib css
        for (name in ['iphone_checkboxes/style']) {
            resource url: [dir: 'css', file: name + '.css']
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
                "helpers/tweet_text_decorator",
                "collections/keywords",
                "views/add_keyword_container",
                "views/tweet_container",
                "views/keyword_container",
                "views/keyword",
                "views/tweet",


        ]

        for (name in files) {
            resource url: [dir:'js/src', file: name + ".js"]
        }

    }
}