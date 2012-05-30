package co.cantina.twitterMonitor

import org.springframework.dao.DataIntegrityViolationException
import grails.converters.JSON
import javax.servlet.http.HttpServletResponse

class KeywordController {

    static allowedMethods = [list:"GET", show: "GET", save: "POST", delete: "DELETE"]

    def messageSource

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        if (request.xhr) {

            List keywords = Keyword.list(params)
            render(contentType: "application/json") {
                array {
                    for (k in keywords) {
                        keyword(text: k.text, numSeen: k.numSeen, id: k.id)
                    }
                }
            }

        } else {
            response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED)
        }

    }


    def save() {
        def keywordInstance = new Keyword(params)
        //def saved = keywordInstance.save(flush: true)

        // differ the responses based on request type
        if (request.xhr) {
            Map result = [status: false]
            if (keywordInstance.save(flush: true)) {
                result.status = true
            } else {
                // gather errors
                result.errors = [] as List
                for (fieldErrors in keywordInstance.errors) {
                    for (error in fieldErrors.allErrors) {
                        result.errors.add messageSource.getMessage(error, Locale.getDefault())

                    }
                }
            }
            render result as JSON
        } else {
            response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED)
        }
    }

    def show() {
        def keywordInstance = Keyword.get(params.id)
        if (request.xhr) {
            Map result = [:]
            if (keywordInstance) {
                result = [text:keywordInstance.text, numSeen: keywordInstance.numSeen, id: keywordInstance.id]
            }
            render result as JSON
        } else {
           response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED)
        }
    }

    def delete() {
        def keywordInstance = Keyword.get(params.id)
        // if the request is made via ajax, we process the delete separately
        if (request.xhr) {
            try {
                keywordInstance.delete(flush: true)
                Map data = ["status":true]
                render data as JSON
            }
            catch (DataIntegrityViolationException e) {
                log.error "Could not delete Keyword ${params.id}: ${e.getMessage()}"
            }
        } else {
            response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED)
        }
    }
}
