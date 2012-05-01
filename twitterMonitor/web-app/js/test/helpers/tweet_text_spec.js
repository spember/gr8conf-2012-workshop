describe('TM.Models.Keyword', function () {
    var hashText = "Add a #hash to me",
        hashTextFinal = "Add a <span class='hashtag'>#hash</span> to me",
        atText = "Hello, @world!",
        atTextFinal = "Hello, <span class='mention'>@world</span>!",
        bothText = "This has both a #hash and a @mention",
        bothTextFinal = "This has both a <span class='hashtag'>#hash</span> and a <span class='mention'>@mention</span>";


    it("should wrap a #hash", function () {
        expect(TM.Helpers.tweetTextDecorator(hashText)).toEqual(hashTextFinal);
    });

    it("should wrap an '@at' message", function () {
        expect(TM.Helpers.tweetTextDecorator(atText)).toEqual(atTextFinal);
    });

    it("All together now...", function () {
       expect(TM.Helpers.tweetTextDecorator(bothText)).toEqual(bothTextFinal);
    });
});