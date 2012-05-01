describe('TM.Models.Keyword', function () {
    var keywords = new TM.Collections.Keywords();

    keywords.add([
        {text:"#gr8conf", numSeen: 90 },
        {text:"#blogging", numSeen: 50},
        {text:"#groovy", numSeen: 80}
    ]);


    it("should have 3", function () {
       expect(keywords.length).toEqual(3);
    });

});