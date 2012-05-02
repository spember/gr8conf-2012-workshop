package co.cantina.twitterMonitor

import org.springframework.dao.DataIntegrityViolationException
import grails.converters.JSON

class MessageController {

    static allowedMethods = [listBatch: "GET", list: "GET"]

    def index() {
        redirect(action: "list", params: params)
    }


    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        render Message.list(params) as JSON
    }

    def listBatch() {
        if (request.xhr) {
            List messages
            long id
            try {
                id = Long.parseLong(params.id)
            }
            catch (NumberFormatException nfe) {
                id = -1l
            }
            messages = Message.findAllByIdGreaterThan(id, [max: 25, sort:"id", order:"asc"])
            render messages as JSON
        }
    }
}
