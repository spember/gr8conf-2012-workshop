// Contains general utility functions

TM.Core.Utils = {

    // Used to compile the Handlebars templates present on the page
    // Looks for each template present and attaches the compiled version to the TM.Templates object
    compileTemplates: function () {
        var templates = $("script[type='text/x-handlebars-template']"),
            count = templates.length,
            $template,
            templateId;

        while (count--) {
            $template = $(templates[count]);
            // We namespace our templates with the prefix 'HB' to avoid id conflicts , thus we need to strip it off
            // when actually using the templates for usability in the JS
            if ($template.attr("id").indexOf("HB") === 0) {
                templateId = $template.attr("id").substring(2);
            } else {
                templateId = $template.attr("id");
            }
            //remove HB from the front
            TM.Templates[templateId] = Handlebars.compile($template.html());
        }

    }
}