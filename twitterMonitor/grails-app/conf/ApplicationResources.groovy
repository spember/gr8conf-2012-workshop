modules = {

    scrolldeck {

        dependsOn "core"

        for (name in ["jquery.easing.1.3", "jquery.scrolldeck", "jquery.scrollorama", "jquery.scrollTo-1.4.2-min"]) {
            resource url: [dir: 'js/libs', file: name + '.js']
        }
    }

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
        resource url: [dir: 'js/src', file: 'monitor.js']
    }

    monitorSrc {

        List files = [
                "core/base",
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

    jasmine {
        dependsOn "monitorSrc"
        resource url: [dir: 'js/libs', file: 'jquery-1.7.2.min.js'], disposition: "head"
        resource url: [dir: 'js/libs', file: 'jasmine.js']
        resource url: [dir: 'js/libs', file: 'jasmine-html.js']
        resource url: [dir: 'css', file: 'jasmine/jasmine.css']

        List specs = [
                "models/keyword",
                "helpers/tweet_text",
                "collections/keywords"

        ]
        for (name in specs) {
            resource url: [dir: 'js/test', file: name + '_spec.js']
        }
    }
}