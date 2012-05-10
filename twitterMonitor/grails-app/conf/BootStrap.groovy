import co.cantina.twitterMonitor.Keyword

class BootStrap {

    def init = { servletContext ->

        //create some dummy keywords for testing
        new Keyword(text: "#gr8conf", numSeen: 30).save()
        new Keyword(text: "#wwdc", numSeen: 100).save()
    }
    def destroy = {
    }
}
