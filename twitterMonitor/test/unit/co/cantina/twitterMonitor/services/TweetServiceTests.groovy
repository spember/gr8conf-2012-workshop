package co.cantina.twitterMonitor.services



import grails.test.mixin.*
import co.cantina.twitterMonitor.Tweet

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(TweetService)
@Mock(Tweet)
class TweetServiceTests {

    void testSaveFromJSON() {
        def params = [
                text:"This is a sample tweet for #gr8conf",
                profile_image_url: "http://www.test.com/images/profile.png",
                from_user_name: "@gr8conf",
        ]

        // bad creation

        Tweet tweet = service.saveFromJSON(params)
        tweet.save()
        assertNull(tweet.id)

        params.id = 1234567890l

        tweet = service.saveFromJSON(params)
        tweet.save()
        assertFalse(tweet.hasErrors())

    }

    void testRemoveOldMessages() {
        assertEquals 0, Tweet.list().size()

        Tweet tweet = new Tweet(text: "I have one keyword: #gr8conf.",
                userName: "testUser",
                profileImageUrl: "http://test.com/profile.png",
                id: "1234567890")
        tweet.save()

        assertEquals 1, Tweet.list().size()

        tweet.dateCreated = new Date()-10
        tweet.save()


        service.removeOldMessages()
        assertEquals 0, Tweet.list().size()

    }
}
