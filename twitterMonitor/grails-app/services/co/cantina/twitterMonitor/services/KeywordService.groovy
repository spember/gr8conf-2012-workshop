package co.cantina.twitterMonitor.services

import co.cantina.twitterMonitor.Message
import co.cantina.twitterMonitor.Keyword
import org.springframework.beans.factory.annotation.Required

class KeywordService {

    // Given a message, increments a keyword count
    def updateCounts(Message message, List<Keyword> keywords) {
        if (message && !message.processed && !message.hasErrors()) {
            if (!keywords) {
                //if no keywords provided, use the whole list
                log.trace "Generating list of keywords for updating!"
                keywords = Keyword.list()
            }
            keywords.each { keyword->
                matchKeywordToMessage keyword, message
            }
            // mark message as processed to avoid doing so again
            message.processed = true
            message.save()
        }
    }

    def matchKeywordToMessage(Keyword keyword, Message message) {
        boolean found = message.text.find(keyword.text)
        if (found) {
            log.trace "Found ${keyword.text} in ${message.text}"
            keyword.numSeen++
            if ( !keyword.save() ) {
                log.warn("Error saving keyword ${keyword}")
            }
        }
        found
    }
}
