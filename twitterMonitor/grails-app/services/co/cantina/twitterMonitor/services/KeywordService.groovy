package co.cantina.twitterMonitor.services

import co.cantina.twitterMonitor.Tweet
import co.cantina.twitterMonitor.Keyword

class KeywordService {

    // Given a message, increments a keyword count
    def updateCounts(Tweet tweet, List<Keyword> keywords) {

        if (tweet.text && !tweet.processed && !tweet.hasErrors()) {
            if (!keywords) {
                //if no keywords provided, use the whole list
                log.trace "Generating list of keywords for updating!"
                keywords = Keyword.list()
            }
            keywords.each { keyword->

                matchKeywordToTweet(keyword, tweet)

            }
            // mark message as processed to avoid doing so again
            tweet.processed = true
            tweet.save()
        }
    }

    def matchKeywordToTweet(Keyword keyword, Tweet tweet) {
        boolean found = tweet.text.toLowerCase().find(keyword.text.toLowerCase())
        if (found) {
            log.trace "${tweet.twitterId} - Found ${keyword.text} in ${tweet.text}"
            keyword.numSeen++
            // also, update the last tweet seen for this tweet
            if(keyword.mostRecentTweet < tweet.twitterId) {
                log.info("Updating tweeet id to ${tweet.twitterId} from ${keyword.mostRecentTweet}")
                keyword.mostRecentTweet = tweet.twitterId
            }

            if ( !keyword.save() ) {
                log.warn("Error saving keyword ${keyword}")
            }
        }
        found
    }
}
