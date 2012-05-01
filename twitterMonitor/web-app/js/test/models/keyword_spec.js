describe('TM.Models.Keyword', function () {
    describe("A Keyword", function () {
        var keyword = new TM.Models.Keyword();
        keyword.set({
            id: 1,
            text: "gr8conf",
            numSeen: 60
        });
        keyword.collection = {
            defaultMax: 100
        }

        it('should have the correct text', function () {
            expect(keyword.get("text")).toEqual("gr8conf");
        });

        it('should have the correct urlRoot and deleteUrl', function () {
            expect(keyword.urlRoot).toEqual("/twitterMonitor/keyword");
            expect(keyword.deleteURL()).toEqual("/twitterMonitor/keyword/delete/1");
        });

        it('calculates the bar width correctly', function () {
            expect(keyword.getBarPercentage()).toEqual(60);
            keyword.collection.maxNumSeen = 200;
            expect(keyword.getBarPercentage()).toEqual(30);

        });
    });

});