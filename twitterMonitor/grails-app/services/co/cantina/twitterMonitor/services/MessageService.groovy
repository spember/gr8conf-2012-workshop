package co.cantina.twitterMonitor.services

import co.cantina.twitterMonitor.Message
import groovy.time.TimeCategory

class MessageService {

    def saveFromJSON (params) {
        Message message = new Message()
        //avoid blindly binding data from the passed in params. Not entirely necessary here, but demonstrates a good practice
        message.properties["text"] = params
        //map our properties in from json
        message.profileImageUrl = params["profile_image_url"]
        message.twitterId = params["id"]
        message.userName = params["from_user_name"]
        message.save()

        message
    }

    // Periodically, purge old messages
    // executed via quartz job
    def removeOldMessages () {
        Date fiveMinutesAgo
        use(TimeCategory) {
            fiveMinutesAgo = new Date() - 5.minutes
        }
        List potentialPurges = Message.findAllByDateCreatedLessThan(fiveMinutesAgo)
        print "${fiveMinutesAgo} is 5 minutes before ${new Date()}"
        print "Deleting ${potentialPurges.size()} messages: ${potentialPurges}"
    }


    Long getOldestId () {
        Message message = Message.list([max: 1, sort:"twitterId", order: "asc"])[0]
        message?.twitterId ?: 0
    }

}
