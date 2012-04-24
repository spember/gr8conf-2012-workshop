TM.Helpers.Resources = {
    textItems: [
        [/@\w+/gi, "<span class='mention'>", "</span>"],
        [/#\w+/gi, "<span class='hashtag'>", "</span>"]
    ]
}

TM.Helpers.tweetTextDecorator = function (text) {
    var items = TM.Helpers.Resources.textItems,
        itemPos = items.length,
        pattern,
        i,
        max,
        results;

    while (itemPos--) {
        results = text.match(items[itemPos][0]);
        if (results) {
            max = results.length;
            for (i = 0; i < max; i++) {
                pattern = new RegExp(results[i], "gi");
                text = text.replace(pattern, items[itemPos][1] +results[i] +items[itemPos][2])
            }
        }
    }

    return text;
};

Handlebars.registerHelper('tweetTextDecorator', TM.Helpers.tweetTextDecorator);