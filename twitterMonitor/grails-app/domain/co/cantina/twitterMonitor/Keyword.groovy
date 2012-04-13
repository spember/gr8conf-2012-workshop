package co.cantina.twitterMonitor

class Keyword {
    //the text of the actual keyword, and what will be represented to the user
    String text

    //number of parsed messages containing this keyword
    int numSeen = 0

    Date dateCreated
    Date lastUpdated


    static constraints = {
        numSeen min: 0
        text maxSize: 20
    }

    public String toString() {
        text
    }
}
