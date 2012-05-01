describe('TM.Collections.Keyword', function () {
    var keywords = new TM.Collections.Keywords();

    it("should find the max seen correctly", function () {
        //initially, getMaxNumSeen shouldn't be null and should be equal to the default
        expect(keywords.getMaxNumSeen()).toBeDefined();
        expect(keywords.getMaxNumSeen()).toEqual(keywords.defaultMax);
        // now add some keywords, below the defaultMax
        keywords.add([
            {text:"#grails", numSeen: 90 },
            {text:"#blogging", numSeen: 50},
            {text:"#groovy", numSeen: 80}
        ]);
        // should still be 100;
        keywords.findMax();
        expect(keywords.getMaxNumSeen()).toEqual(100);
    });

    it("should find a new max seen correctly", function () {
        keywords.add([{text:"#gr8conf", numSeen:(keywords.defaultMax + 5)}]);
        keywords.findMax();
        expect(keywords.getMaxNumSeen()).toEqual(keywords.defaultMax + 5);
    })

});