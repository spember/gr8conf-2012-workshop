package co.cantina.twitterMonitor.services

import grails.converters.JSON
import org.codehaus.groovy.grails.commons.GrailsApplication
import co.cantina.twitterMonitor.Keyword

class TwitterSearchService {
    //temporary
    GrailsApplication grailsApplication
    MessageService messageService
    KeywordService keywordService

    boolean locked = false

    // main entry point
    def monitor() {
        if(locked) {
            log.info "Job is still executing, waiting for next execution cycle"

        } else {
            //List keywords = Keyword.list()
            List newWords = Keyword.findAllByNumSeen 0
            List oldWords = Keyword.findAllByNumSeenGreaterThan 0
            if (oldWords || newWords) {
                locked = true
                // lock the job while twitter is queried
                //break keywords into two groups, ones with no lastSeen and those with
                //def data = executeQuery(keywords.join(" OR ").encodeAsURL())
                //processMessages(data.results, keywords)
                queryOldWords(oldWords)
                queryNewWords(newWords)

                locked = false
            } else {
                log.info "No keywords present, skipping query"
            }

        }
    }


    def executeQuery(query, sinceId) {
        String queryUrl = "http://search.twitter.com/search.json?rpp=${grailsApplication.config.grails.twitter.rpp}&include_entities=false&q=${query}".toString()
        if (sinceId) {
           queryUrl += "&since_id=" + sinceId
        }
        JSON.parse(new URL(queryUrl).text)
    }

    // old words are those that have been seen before. By using the 'since' twitter operator and due to the fact that we ignore
    // duplicate tweets, we can safely combine these into one query (or potentially multiple, if we hit a limit on the number of
    // allowed concurrent query parameters)
    def queryOldWords(words) {
        if (words) {
            Long minId = messageService.getOldestId()
            log.debug ("Querying old words: " +words +" with id = " +minId)
            try {
                processMessages(executeQuery(words.join(" OR ").encodeAsURL(), minId).results, words)
            }
            catch(IOException ioe) {
                log.warn "Error querying the old words: ${words}"
                //release lock on error
                locked = false
            }
        }
    }

    def queryNewWords(words) {
        if (words) {
            try {
                words.each {word->
                    log.debug ("Querying new word: " +word)
                    processMessages(executeQuery(word.text.encodeAsURL(), null).results, [word])
                }
            }
            catch (IOException ioe) {

            }
        }
    }


    def processMessages(messages, keywords) {
        int max = messages.length()

        //iterate over the messages, attempting to save them.
        messages.each {
            // messages with non-unique twitter ids will not be saved, and
            def message = messageService.saveFromJSON(it)
            keywordService.updateCounts(message, keywords)
        }

        // successfully saved messages are then scanned for keywords, with the appropriate keyword incremented
    }



}
