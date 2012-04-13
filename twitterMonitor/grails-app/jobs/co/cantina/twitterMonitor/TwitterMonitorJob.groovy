package co.cantina.twitterMonitor

import co.cantina.twitterMonitor.services.TwitterSearchService



class TwitterMonitorJob {

    TwitterSearchService twitterSearchService

    static triggers = {
      simple repeatInterval: 10000l // execute job once every 10 seconds
    }

    def execute() {
        //twitterSearchService.monitor()
    }
}
