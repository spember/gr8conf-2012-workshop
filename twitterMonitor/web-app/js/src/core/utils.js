// Contains general utility functions

TM.Core.Utils = {

    // Used to compile the Handlebars templates present on the page
    // Looks for each template present and attaches the compiled version to the TM.Templates object
    compileTemplates: function () {
        var templates = $("script[type='text/x-handlebars-template']"),
            count = templates.length,
            $template;

        while (count--) {
            $template = $(templates[count]);
            TM.Templates[$template.attr("id")] = Handlebars.compile($template.html());
        }

    }
}