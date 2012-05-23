        class UrlMappings {

            static mappings = {
                "/$controller/$action?/$id?"{
                    constraints {
                        // apply constraints here
                    }
                }
                "/keyword/$id"(controller: "keyword") {
                    action = [
                            GET: "show",
                            DELETE: "delete"
                    ]
                }
                "/keyword"(controller: "keyword" ) {
                    action = [
                            GET: "list",
                            POST: "save"
                    ]
                }


                "/"(controller: "standAlone", action: "index")

                "500"(view:'/error')
                "405"(view:'/denied')
            }
        }




