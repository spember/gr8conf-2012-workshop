<!doctype html>
<html>
<head>
    <meta name="layout" content="scroll"/>
    <title>GR8Conf | Workshop: Building Responsive HTML 5 Apps with Grails</title>
</head>
<body>
    <div id="appHeader" class="app-header">
        <img class="logo left span-1" src="${resource(dir: 'images', file: 'gr8conf-logo.png')}" alt="Cantina"/>
        <div class="nav left span-7 center-text">
            <a class="nav-button" href="#overview">Overview</a>
            <a class="nav-button" href="#html5">HTML 5</a>
            <a class="nav-button" href="#futureProof">Future Proof</a>
            <a class="nav-button" href="#mvcmv">Pros / Cons</a>
            <a class="nav-button" href="#apiDesign">API</a>
            <a class="nav-button" href="#jsHelp">JavaScript</a>
            <a class="nav-button" href="#twitterMonitor">Sample App</a>
            <a class="nav-button" href="#contact">Contact</a>
        </div>
        <img class="logo right span-1" src="${resource(dir: 'images', file: 'cantina-logo-white.png')}" alt="Cantina"/>
    </div>

    <div id="overview" class="slide">
        <h1 class="title center-text">Building Responsive HTML5 Applications with Grails</h1>
        <h3 class="center-text"><a href="http://www.cantina.co/author/steve/" target="_blank">Steve Pember</a></h3>
        <p class="center-text"><a href="http://www.cantina.co" target="_blank">Cantina</a></p>

        <div class="row">
            <img class="left" src="${resource(dir:'images/slides', file:'gr8conf_eu_first_slide.png')}" alt="Gr8Conf EU Logo"/>
            <p class="sub right">Gr8Conf Europe 2012<br/>June 6th-8th<br/>Copenhagen, Denmark</p>
        </div>
    </div>

    <div id="aboutCantina" class="slide">
        <img class="push-left" src="${resource(dir: 'images/slides', file: 'about_cantina.png')}" alt="Cantina tech"/>
    </div>

    <div id="html5" class="slide">
        <p class="cantina-orange animate-build center-text" data-build="1">Does it work in IE?</p>
        <img class="center-block logo" src="${resource(dir: 'images/slides', file: 'HTML5-logo.png')}" alt="HTML 5"/>
        <p class="cantina-orange animate-build center-text" data-build="2">Then it's not HTML 5.</p>
    </div>

    <div id="html5_2" class="slide">
        <h2 class="title center-text">New Markup & APIs</h2>
        <img src="${resource(dir: 'images/slides', file: 'html5_chart.png')}" alt="HTML 5 Capabilities Chart"/>
        <h3 class="error content-right animate-build" data-build="1">Not Final!</h3>
        <a class="animate-build" data-build="2" href="http://cantina.co/wp-content/uploads/2012/03/HTML5GuideFin312.pdf" target="_blank"><img class="guide" src="${resource(dir: 'images/slides', file: 'Cantina-html5-guide.png')}" alt="Cantina's HTML 5 Guide"/></a>
    </div>

    <div id="html5_3" class="slide">
        <h2 class="title">Ecosystem of Modern Techniques</h2>
        <p class="animate-build" data-build="1">Responsive Design / Progressive Enhancement</p>
        <p class="animate-build" data-build="2">Client-Side Markup Generation</p>
        <p class="animate-build" data-build="3">Presentation / Service Layer Separation</p>
        <br/>
        <h3 class="animate-build cantina-orange"  data-build="4">USABILITY!</h3>
    </div>



    <div id="futureProof" class="slide">
        <h1>Future Proof</h1>
        <h3 class="sub animate-in" data-animation="space-in">Building your site defensively</h3>
    </div>

    <div id="futureProof_2" class="slide">
        <h2 class="title center-text">What's Old is New Again</h2>
        <div class="row center-outer animate-build" data-build="1">
            <img class="rounded" src="${resource(dir: 'images/slides', file: 'dialup.png')}" alt="Dialup, gross"/>
            <p class="right center-inner center-text">Low / Slow Bandwidth<br/>'Lo-fi' UX</p>
        </div>

        <div class="row center-outer animate-build" data-build="2">
            <img class="rounded" src="${resource(dir: 'images/slides', file: 'broadband.png')}" alt="Broadband"/>
            <p class="right center-inner center-text">High Bandwidth<br/>Rich UX!</p>
        </div>
    </div>

    <div id="futureProof_3" class="slide">
        <h2 class="title">Today...</h2>
        <div class="row">
            <img class="rounded" src="${resource(dir: 'images/slides', file: 'multiple_devices.jpg')}" alt="Multiple Devices"/>
            <div>
                <ul>
                    <li>Multiple speeds</li>
                    <li>Multiple devices</li>
                    <li>Multiple headaches</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="futureProof_4" class="slide">
        <h2 class="center-text title">Responsive Design</h2>
        <p class="center-outer">Adapt to <br/><strong class="animate-in cantina-orange" data-animation="space-in">Capabilities</strong><br/>Not Devices</p>
        <img class="rounded push-left" src="${resource(dir: 'images/slides', file: 'ResponsiveDesignGlobe.png')}" alt="Responsive Design"/>
        <p class="right animate-in" data-animation="fly-in-left">Provide a <br/><strong class="cantina-orange">Consistant</strong><br/>Experience</p>
    </div>


    <div class="slide">
        <p class="animate-in" data-animation="fly-in-right">According to <a href="http://www.abookapart.com/products/responsive-web-design" target="_blank">the book</a>, <span class="cantina-orange">RWD</span> requires three features:</p>
        <br/>
        <ul>
            <li class="animate-build" data-build="1">Flexible Grid</li>
            <li class="animate-build" data-build="2">Flexible Media</li>
            <li class="animate-build" data-build="3">@media Queries</li>
        </ul>

    </div>

    <div id="futureProof_5" class="slide">
        <p class="animate-build center-outer" data-build="1">However, <span class="cantina-orange">RWD</span> should involve more!</p>
        <p class="animate-build" data-build="2"><span class="cantina-orange">Responsive Architecture</span></p>
        <p class="animate-build center-outer" data-build="3">E.g. program the <span class="cantina-orange">Client</span> to ask for only what it needs</p>
        <div class="right center-inner animate-build" data-build="4">
            <a href="http://cantina.co/wp-content/uploads/2012/01/ResponsiveDesignGuideFnll0110121.pdf" target="_blank"><img class="guide" src="${resource(dir: 'images/slides', file: 'Cantina-html5-guide.png')}" alt="Cantina's Responsive Design Guide"/></a>
        </div>
    </div>

    <div id="futureProof_6" class="slide">
        <h2 class="center-text title">Client-Side Templating</h2>
        <p class="animate-build" data-build="1"><span class="cantina-orange">Client</span> generates the Markup</p>
        <p class="animate-build right-text" data-build="2">Increases Perceived Performance</p>
        <p class="animate-build" data-build="3">Goes hand-in-hand with...</p>
    </div>

    <div id="futureProof_7" class="slide">
        <div class="clearfix">
            <h2 class="center-text title">Presentation / Service Layer Separation</h2>
            <img class="rounded push-left" src="${resource(dir: 'images/slides', file: 'mvcmv_crude.png')}" alt="MvCMV - crude"/>
            <ul class="left">
                <li>Critical Business Logic</li>
                <li>MvC (not much View)</li>
                <li>Send Data Only</li>
            </ul>

            <ul class="right">
                <li>Generates Markup</li>
                <li>Minor Business Logic</li>
            </ul>
        </div>
        <h2 class="animate-build center-text cantina-orange" data-build="1">MvCMV</h2>

    </div>


    <div id="mvcmv" class="slide">
        <h1>Advantages & Disadvantages</h1>
        <p class="sub">Of MvCMV</p>
    </div>

    <div id="mvcmv_2" class="slide">
        <h2 class="center-text positive title">Pros</h2>
        <ul>
            <li class="animate-build" data-build="1">Offload CPU Cycles</li>
            <li class="animate-build" data-build="2">Save Bandwidth</li>
            <li class="animate-build" data-build="3">(May) Enhance Usability</li>
            <li class="animate-build" data-build="4">Interchangeable Interfaces</li>
            <li class="animate-build" data-build="5">2+ Codebases</li>
        </ul>
    </div>

    <div class="slide">
        <h2 class="cantina-orange">Service Oriented Architecture</h2>
        <p class="sub">(API-zation of the web)</p>
        <p class="center-text">Perhaps the biggest Advantage</p>
        <p class="center-text animate-build" data-build="1">One set of API calls for all Client Interfaces</p>
        <p class="center-text animate-build" data-build="2">Ability to scale back-end and front-end independently</p>
    </div>

    <div id="mvcmv_3" class="slide">
        <h2 class="center-text error title">Cons</h2>
            <p class="animate-build right-text" data-build="1">2+ Codebases - </p>
            <p class="animate-build right-text" data-build="2">Increased Testing Requirements - </p>
            <p class="animate-build right-text" data-build="3">Vast Amounts of JavaScript (if your team is not ready) - </p>
            <p class="animate-build right-text error" data-build="4">Security Model Change Required - </p>
    </div>

    <div id="apiDesign" class="slide">
        <h1>API Design</h1>
        <p class="sub">Or, Just Use REST and Skip this Section</p>
    </div>

    <div class="slide">
        <h2 class="center-text title">A Good API Should Be:</h2>
        <ul>
            <li class="animate-build" data-build="1">Efficient</li>
            <li class="animate-build" data-build="2">Swift</li>
            <li class="animate-build" data-build="3">Intuitive (But Still Have Excellent Documentation)</li>
            <li class="animate-build" data-build="4">Able To Support Multiple Formats</li>
            <li class="animate-build" data-build="5">Backwards Compatible</li>
            <li class="animate-build" data-build="6">Aware of Intended Consumer</li>
        </ul>
    </div>

    <div id="apiDesign_3" class="slide">
        <h2 class="center-text animate-in title" >So Why <span class="cantina-orange">Grails?</span></h2>
        <p class="center-text sub">A Few Examples:</p>
        <div class="top-row clearfix">
            <img class="rounded animate-build left" data-build="1" src="${resource(dir: 'images/slides', file: 'grails_withFormat.png')}" alt="Grails - With Format"/>
            <img class="rounded animate-build left" data-build="2" src="${resource(dir: 'images/slides', file: 'grails_json_builder.png')}" alt="Grails - JSON Builder"/>
        </div>
        <div class="bottom-row clearfix">
            <img class="rounded animate-build left" data-build="3" src="${resource(dir: 'images/slides', file: 'grails_allowed_methods.png')}" alt="Grails - Allowed Methods Constraint"/>

        </div>
    </div>

    <div id="apiDesign_4" class="slide">
        <img class="rounded animate-build left" data-build="1" src="${resource(dir: 'images/slides', file: 'grails_url_mappings_rest.png')}" alt="Grails - URL Mappings"/>
        <img class="rounded animate-build left" data-build="2" src="${resource(dir: 'images/slides', file: 'grails_request_xhr.png')}" alt="Grails - Request XHR"/>
    </div>

    <div class="slide">
        <h3 class="title">Don't Send Everything!</h3>
        <script src="https://gist.github.com/2476214.js?file=succinct.groovy"></script>
    </div>

    <div class="slide">
        <h3 class="title">Versioning With withFormat</h3>
        <script src="https://gist.github.com/2476214.js?file=versioning_with_format.groovy"></script>
    </div>

    <div class="slide">
        <h2>But all of your examples deal with writing the thing!</h2>
    </div>

    <div class="slide">
        <h3 class="animate-in center-text" data-animation="fly-in-left">True, but we'd be here all night</h3>
        <h3 class="animate-in center-text title" data-animation="fly-in-right">if we talked about things like:</h3>
        <ul>
            <li class="animate-build" data-build="1"><p>Plugins! (e.g. Spring Security; Cache)</p></li>
            <li class="animate-build" data-build="2"><p>Ability to write complicated bits in Java for speed</p></li>
            <li class="animate-build" data-build="3"><p>Power and convenience of the JVM</p></li>
            <li class="animate-build" data-build="4"><p>Uses of alternative data stores with Grails 2.0</p></li>
        </ul>
    </div>


    <div id="jsHelp" class="slide">
        <h1><span class="cantina-orange">JavaScript</span></h1>
        <p class="sub">It's Dangerous to go Alone. Take This!</p>
    </div>

    <div class="slide">
        <p class="center-text">Creating large-scale JavaScript apps can be <br/><span class="cantina-orange animate-in">difficult</span>,<br/>
        especially if your team is new to event-based programming.</p>
    </div>

    <div id="jsHelp_3" class="slide">
        <h3 class="center-text title">Luckily, There are Myriad <span class="cantina-orange">Frameworks</span> To Help</h3>
        <img class="push-left" src="${resource(dir: 'images/slides', file: 'javascript_frameworks.png')}" alt="Countless JavaScript Frameworks"/>
    </div>

    <div class="slide">
        <h3 class="center-text">Today we'll be using these:</h3>
        <div class="top-row img-row clearfix">
            <img class="rounded animate-build left" data-build="1" src="${resource(dir: 'images/slides', file: 'backbone_js_logo.png')}" alt="Backbone.js logo"/>
            <img class="rounded animate-build right" data-build="3" src="${resource(dir: 'images/slides', file: 'handlebars_logo.png')}" alt="Handlebars Logo"/>
        </div>
        <div class="bottom-row img-row clearfix">
            <img class="rounded animate-build left" data-build="2" src="${resource(dir: 'images/slides', file: 'underscore_js_logo.png')}" alt="Underscore.js logo"/>
            <img class="rounded animate-build right" data-build="4" src="${resource(dir: 'images/slides', file: 'jasmine_logo.png')}" alt="Jasmine logo"/>
        </div>
    </div>

    <div class="slide">
        <p class="animate-in center-text" data-animation="fly-in-left">Plus <span class="cantina-orange">jQuery</span></p>
        <br/><br/>
        <p class="animate-in center-text" data-animation="fly-in-right">To build this:</p>
    </div>

    <div id="twitterMonitor" class="slide">
        <div id="main">
            <g:render template="/standAlone/placeholders"/>
        </div>
    </div>

    <div class="slide">
        <h1 class="title">Questions?</h1>
        <p class="sub">Or, we could just get started</p>
    </div>

    <div id="contact" class="slide">
        <h3>Contact:</h3>
        <p class="sub">@svpember</p>
        <p class="sub">steve@cantina.co</p>
        <p class="sub"><a href="http://www.cantina.co" target="_blank">http://cantina.co</a></p>
        <br/><br/>
        <h3>Credits</h3>
        <ul class="sub">
            <li>Presentation created with <a href="http://johnpolacek.github.com/scrolldeck.js/" target="_blank">Scrolldeck</a></li>
            <li>Some images taken from a <a href="http://www.netmagazine.com/tutorials/build-responsive-site-week-going-further-part-5" target="_blank">Net Magazine</a> article</li>
        </ul>
        <p></p>
        <p></p>
    </div>



    <g:render template="/standAlone/handlebars"/>
</body>
</html>