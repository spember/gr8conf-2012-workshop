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
            try {
                id = Long.parseLong(params.id)
            }
            catch (NumberFormatException nfe) {
                id = -1l
            }
            tweets = Tweet.findAllByIdGreaterThan(id, [max: 25, sort:"id", order:"asc"])
            render tweets as JSON
        }
    }
}
