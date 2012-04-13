package co.cantina.twitterMonitor

class Message {
    //twitter parameters
    Long twitterId
    String text
    String userName
    String profileImageUrl
    boolean processed = false //mark true once the message has been examined

    Date dateCreated

    static constraints = {
        text maxSize: 165
        userName maxSize: 50
        profileImageUrl maxSize: 100
        twitterId maxSize: 18, unique: true

    }

    public String toString() {
        "(${userName}): ${text}"
    }
}
