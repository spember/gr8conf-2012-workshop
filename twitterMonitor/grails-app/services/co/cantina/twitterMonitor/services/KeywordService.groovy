package co.cantina.twitterMonitor.services

import co.cantina.twitterMonitor.Message
import co.cantina.twitterMonitor.Keyword

class KeywordService {

    // Given a message, increments a keyword count
    def updateCounts(Message message, List<Keyword> keywords) {
        if (!message.processed && !message.hasErrors()) {
            if (!keywords) {
                //if no keywords provided, use the whole list
                log.trace "Generating list of keywords for updating!"
                keywords = Keyword.list()
            }
            keywords.each { keyword->
                if( message.text.find(keyword.text)) {
                    log.trace "Found ${keyword.text} in ${message.text}"
                    keyword.numSeen++
                    if ( !keyword.save() ) {
                        log.warn("Error saving keyword ${keyword}")
                    }
                }
            }
            // mark message as processed to avoid doing so again
            message.processed = true
            message.save()
        }
    }
}
