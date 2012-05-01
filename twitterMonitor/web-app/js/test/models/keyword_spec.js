describe('TM.Models.Keyword', function () {

    describe("A Keyword", function () {
        var keyword = new TM.Models.Keyword(),
            collectionSpy;

        keyword.set({
            id: 1,
            text: "#gr8conf",
            numSeen: 60
        });

        //fake impl for spying
        keyword.collection = {
            getMaxNumSeen: function () {
                return false;
            }
        }

        it('should have the correct text', function () {
            expect(keyword.get("text")).toEqual("#gr8conf");
        });

        it('should have the correct urlRoot and deleteUrl', function () {
            expect(keyword.urlRoot).toEqual("/twitterMonitor/keyword");
            expect(keyword.deleteURL()).toEqual("/twitterMonitor/keyword/delete/1");
        });

        it('calculates the bar width correctly', function () {
            var retVal = 100;
            // register the Spy (like a Mock), and mock the function call
            collectionSpy = jasmine.createSpy('collectionSpy');
            spyOn(keyword.collection, 'getMaxNumSeen').andCallFake(function() {return retVal;});
            // the following method should call our Spy
            expect(keyword.getBarPercentage()).toEqual(60);
            // verify that our mock has been called
            expect(keyword.collection.getMaxNumSeen).toHaveBeenCalled();
            retVal = 200;
            expect(keyword.getBarPercentage()).toEqual(30);

        });
    });

});