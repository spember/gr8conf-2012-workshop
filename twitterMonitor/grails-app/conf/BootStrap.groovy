import co.cantina.twitterMonitor.Keyword

class BootStrap {

    def init = { servletContext ->

        //create some dummy keywords for testing
        new Keyword(text: "#gr8conf").save()
        //new Keyword(text: "#pax").save()
    }
    def destroy = {
    }
}
