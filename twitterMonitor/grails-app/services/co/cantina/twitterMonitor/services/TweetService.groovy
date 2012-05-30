package co.cantina.twitterMonitor.services

import groovy.time.TimeCategory
import co.cantina.twitterMonitor.Tweet

class TweetService {

    def saveFromJSON (params) {
        Tweet tweet = new Tweet()
        if (!Tweet.exists(params["id"])) {

            //avoid blindly binding data from the passed in params. Not entirely necessary here, but demonstrates a good practice
            tweet.properties["text"] = params
            //map our properties in from json
            tweet.profileImageUrl = params["profile_image_url"]
            // we track the twitterId separately, in order to obtain an easy list of the order we pulled the tweets in
            tweet.twitterId = params["id"]
            tweet.userName = params["from_user_name"]
            tweet.dateCreated = new Date()
            tweet.save()

        }
        tweet
    }

    // Periodically, purge old tweets
    // executed via quartz job
    def removeOldMessages () {
        Date fiveMinutesAgo
        use(TimeCategory) {
            fiveMinutesAgo = new Date() - 5.minutes
        }
        List potentialPurges = Tweet.findAllByDateCreatedLessThan(fiveMinutesAgo)
        log.info "Deleting ${potentialPurges.size()} tweets"
        potentialPurges.each {tweet->
            if (tweet.delete()) {
                log.info "Deleted tweet"
            }
        }
    }

}
