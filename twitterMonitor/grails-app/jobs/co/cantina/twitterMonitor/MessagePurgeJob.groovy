package co.cantina.twitterMonitor

import co.cantina.twitterMonitor.services.MessageService


class MessagePurgeJob {

    MessageService messageService

    static triggers = {
        simple repeatInterval: 60000l // execute job once every 60 seconds
    }

    def execute() {
        messageService.removeOldMessages()

    }

}
