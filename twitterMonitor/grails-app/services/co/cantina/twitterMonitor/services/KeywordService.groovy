package co.cantina.twitterMonitor.services

import co.cantina.twitterMonitor.Tweet
import co.cantina.twitterMonitor.Keyword

class KeywordService {

    // Given a message, increments a keyword count
    def updateCounts(Tweet message, List<Keyword> keywords) {

        if (message.text && !message.processed && !message.hasErrors()) {
            if (!keywords) {
                //if no keywords provided, use the whole list
                log.trace "Generating list of keywords for updating!"
                keywords = Keyword.list()
            }
            keywords.each { keyword->

                matchKeywordToMessage(keyword, message)

            }
            // mark message as processed to avoid doing so again
            message.processed = true
            message.save()
        }
    }

    def matchKeywordToMessage(Keyword keyword, Tweet message) {
        boolean found = message.text.toLowerCase().find(keyword.text.toLowerCase())
        if (found) {
            log.trace "${message.id} - Found ${keyword.text} in ${message.text}"
            keyword.numSeen++
            // also, update the last tweet seen for this tweet
            if(keyword.mostRecentTweet < message.id) {
                log.info("Updating tweeet id to ${message.id} from ${keyword.mostRecentTweet}")
                keyword.mostRecentTweet = message.id
            }

            if ( !keyword.save() ) {
                log.warn("Error saving keyword ${keyword}")
            }
        }
        found
    }
}
