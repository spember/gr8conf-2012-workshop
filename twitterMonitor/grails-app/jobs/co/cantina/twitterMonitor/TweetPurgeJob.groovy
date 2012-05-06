package co.cantina.twitterMonitor

import co.cantina.twitterMonitor.services.TweetService


class TweetPurgeJob {

    TweetService tweetService

    static triggers = {
        simple repeatInterval: 60000l // execute job once every 60 seconds
    }

    def execute() {
        tweetService.removeOldMessages()

    }

}
