describe('TM.Views.Tweet', function () {
    var tweet = new TM.Views.Tweet(),
    assignModel = function (id) {
        tweet.model = new TM.Models.Tweet({id:id});
        tweet.model.set({
            text: "This is a sample Tweet",
            profileImageUrl: "http://link.to/photo",
            userName: "tester"
        });
    }


    describe("A Tweet with an odd id", function () {
        assignModel(1001);
        var ctx = tweet.mapModelToContext();
        it("should have the 'odd' class in its context", function (){
            expect(ctx.class).toEqual("odd");
        });
    });

    describe("A Tweet with an even id", function () {
        assignModel(1000);
        var ctx = tweet.mapModelToContext();
        it("should have the 'even' class in its context", function () {
            expect(ctx.class).toEqual("even");
        })
    })
});