package co.cantina.twitterMonitor

class Tweet {
    //twitter parameters
    Long id
    String text
    String userName
    String profileImageUrl
    boolean processed = false //mark true once the message has been examined

    Date dateCreated

    static constraints = {
        text maxSize: 165
        userName maxSize: 50
        profileImageUrl maxSize: 200
        //twitterId maxSize: 18, unique: true
    }

    static mapping = {
        id generator: "assigned"
    }

    public String toString() {
        "(${userName}): ${text}"
    }
}
