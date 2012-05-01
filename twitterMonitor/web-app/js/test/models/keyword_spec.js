describe('TM.Models.Keyword', function () {
    describe("A Keyword", function () {
        var keyword = new TM.Models.Keyword();
        keyword.set({
            id: 1,
            text: "gr8conf",
            numSeen: 60
        });

        it('should have the correct text', function () {
            expect(keyword.get("text")).toEqual("gr8conf");
        });
    });

});