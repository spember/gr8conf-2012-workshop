package co.cantina.twitterMonitor

import grails.converters.JSON

class TweetController {

    static allowedMethods = [listBatch: "GET", list: "GET"]

    def index() {
        redirect(action: "list", params: params)
    }


    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        render Tweet.list(params) as JSON
    }

    def listBatch() {
        if (request.xhr) {
            List tweets
            long id
            def queryParams = [max: 25, sort:"id", order:"asc"]

            try {
                id = Long.parseLong(params.id)
            }
            catch (NumberFormatException nfe) {
                id = -1l
            }

            Tweet tweetInstance = Tweet.findByTwitterId(id)

            if (!tweetInstance) {
                tweets = Tweet.list(queryParams)
            } else {
                tweets = Tweet.findAllByIdGreaterThan(tweetInstance.id, queryParams)
            }

            // The UI doesn't need all of the Tweet!
            render(contentType: "application/json") {
                array {
                    for (t in tweets) {
                        tweet(text: t.text,
                                userName: t.userName,
                                profileImageUrl: t.profileImageUrl,
                                id: "${t.twitterId}".toString())
                    }
                }
            }
        }
    }
}
