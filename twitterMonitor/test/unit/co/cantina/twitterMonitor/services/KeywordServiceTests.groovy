package co.cantina.twitterMonitor.services



import grails.test.mixin.*
import org.junit.*
import co.cantina.twitterMonitor.Keyword
import co.cantina.twitterMonitor.Tweet

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(KeywordService)
@Mock([Keyword, Tweet])
class KeywordServiceTests {
    List keywords = []
    Tweet tweet
    void setUp() {
        tweet = new Tweet(text: "I have one keyword: #gr8conf.",
                userName: "testUser",
                profileImageUrl: "http://test.com/profile.png",
                id: "1234567890")

        keywords.add(new Keyword(text: "#gr8conf"))
        keywords.add(new Keyword(text: "#blogging"))

    }

    void testKeywordInit() {
        // our keywords should initialize with 0 numSeen
        System.out.println("Numseen = " +keywords[0].numSeen)
        assertEquals 0, keywords[0].numSeen
        assertEquals 0, keywords[1].numSeen
    }

    void testMatchKeywordToTweet() {
        //this first should succeeed
        assertTrue service.matchKeywordToTweet(keywords[0], tweet)
        assertEquals 1, keywords[0].numSeen
        assertEquals tweet.twitterId, keywords[0].mostRecentTweet
        // this should fail
        assertFalse service.matchKeywordToTweet(keywords[1], tweet)
        assertEquals 0, keywords[1].numSeen
        assertEquals(-1, keywords[1].mostRecentTweet)
    }

    void testBadTweetInUpdateCounts() {
        Tweet badTweet = new Tweet(userName: "testUser",
                profileImageUrl: "http://test.com/profile.png",
                id: "1234567891")
        badTweet.save()
        assertTrue badTweet.hasErrors()
        service.updateCounts(badTweet, keywords)
        assertFalse badTweet.processed
        badTweet.text = "#blogging takes a lot of time"
        badTweet.save()

        service.updateCounts(badTweet, keywords)
        assertTrue(badTweet.processed)
        assertEquals(1, keywords[1].numSeen)
    }


}
