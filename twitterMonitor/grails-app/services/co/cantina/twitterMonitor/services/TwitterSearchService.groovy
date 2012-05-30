package co.cantina.twitterMonitor.services

import grails.converters.JSON
import org.codehaus.groovy.grails.commons.GrailsApplication
import co.cantina.twitterMonitor.Keyword

class TwitterSearchService {
    //temporary
    GrailsApplication grailsApplication
    TweetService tweetService
    KeywordService keywordService

    boolean locked = false

    // main entry point
    def monitor() {
        if(locked) {
            log.info "Job is still executing, waiting for next execution cycle"

        } else {
            //Search for each keyword, with a sleep between each word
            List keywords = Keyword.list()
            keywords.each {keyword->
                try {
                    processTweets(executeQuery(keyword.text.encodeAsURL(), keyword.mostRecentTweet).results, keywords)
                }
                catch (IOException ioe) {
                    log.error("Error processing tweet: ${ioe.getMessage()}")

                }
                // Sleep for a bit to be polite
                Thread.currentThread().sleep(grailsApplication.config.grails.twitter.sleepTime)
            }

        }
    }


    def executeQuery(query, sinceId) {
        String queryUrl = "http://search.twitter.com/search.json?rpp=${grailsApplication.config.grails.twitter.rpp}&include_entities=false&q=${query}".toString()
        if (sinceId && sinceId > 0) {
            queryUrl += "&since_id=" + sinceId
        }
        log.debug(queryUrl)
        JSON.parse(new URL(queryUrl).text)
    }

    def processTweets(tweets, keywords) {
        //iterate over the tweets, attempting to save them.
        log.info("Found ${tweets.size()} new tweets")
        def tweet
        tweets.each {
            // tweets with non-unique twitter ids will not be saved, and
            tweet = tweetService.saveFromJSON(it)
            if (tweet) {
                keywordService.updateCounts(tweet, keywords)
            }

        }

        // successfully saved tweets are then scanned for keywords, with the appropriate keyword incremented
    }



}
