package co.cantina.twitterMonitor

import org.springframework.dao.DataIntegrityViolationException
import grails.converters.JSON

class KeywordController {

    static allowedMethods = [save: "POST", update: "POST", delete: "DELETE"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        if (request.xhr) {

            def results = Keyword.list(params)
            render(contentType: "application/json") {
                array {
                    for (k in results) {
                        keyword text: k.text, numSeen: k.numSeen, id: k.id
                    }
                }
            }

            //render Keyword.list() as JSON

        } else {
            [keywordInstanceList: Keyword.list(params), keywordInstanceTotal: Keyword.count()]
        }

    }

    def create() {
        [keywordInstance: new Keyword(params)]
    }

    def save() {
        def keywordInstance = new Keyword(params)

        if (request.xhr) {
            Map result = [status: false]
            if (!keywordInstance.save(flush: true)) {
                render result as JSON
            } else {
                result.status = true
                render result as JSON
            }
        } else {
            if (!keywordInstance.save(flush: true)) {
                render(view: "create", model: [keywordInstance: keywordInstance])
                return
            }

            flash.message = message(code: 'default.created.message', args: [message(code: 'keyword.label', default: 'Keyword'), keywordInstance.id])
            redirect(action: "show", id: keywordInstance.id)
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
            if (!keywordInstance) {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
                redirect(action: "list")
                return
            }

            [keywordInstance: keywordInstance]
        }
    }

    def edit() {
        def keywordInstance = Keyword.get(params.id)
        if (!keywordInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
            redirect(action: "list")
            return
        }

        [keywordInstance: keywordInstance]
    }

    def update() {
        def keywordInstance = Keyword.get(params.id)
        if (!keywordInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (keywordInstance.version > version) {
                keywordInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'keyword.label', default: 'Keyword')] as Object[],
                          "Another user has updated this Keyword while you were editing")
                render(view: "edit", model: [keywordInstance: keywordInstance])
                return
            }
        }

        keywordInstance.properties = params

        if (!keywordInstance.save(flush: true)) {
            render(view: "edit", model: [keywordInstance: keywordInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'keyword.label', default: 'Keyword'), keywordInstance.id])
        redirect(action: "show", id: keywordInstance.id)
    }

    def delete() {
        def keywordInstance = Keyword.get(params.id)
        if (request.xhr) {
            try {
                keywordInstance.delete(flush: true)
                Map data = ["status":true]
                render data as JSON
            }
            catch (DataIntegrityViolationException e) {

            }
        } else {
            if (!keywordInstance) {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
                redirect(action: "list")
                return
            }

            try {
                keywordInstance.delete(flush: true)
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
                redirect(action: "list")
            }
            catch (DataIntegrityViolationException e) {
                flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'keyword.label', default: 'Keyword'), params.id])
                redirect(action: "show", id: params.id)
            }
        }
    }
}