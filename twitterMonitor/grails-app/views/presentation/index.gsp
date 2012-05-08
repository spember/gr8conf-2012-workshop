<!doctype html>
<html>
<head>
    <meta name="layout" content="scroll"/>
    <title>GR8Conf | Workshop: Building Responsive HTML 5 Apps with Grails</title>
</head>
<body>
    <div id="appHeader" class="app-header">
        <div class="nav">
            <a class="nav-button" href="#overview">Overview</a>
            <a class="nav-button" href="#html5">HTML 5</a>
            <a class="nav-button" href="#futureProof">Future Proof</a>
            <a class="nav-button" href="#mvcmv">Pros / Cons</a>
            <a class="nav-button" href="#apiDesign">API</a>
            <a class="nav-button" href="#jsHelp">Javascript</a>
            <a class="nav-button" href="#twitterMonitor">Sample App</a>
        </div>
        <img class="logo right" src="${resource(dir: 'images', file: 'cantina-logo-white.png')}" alt="Cantina"/>
    </div>

    <div id="overview" class="slide">
        <h1>Building Responsive HTML5 Applications with Grails</h1>
        <cite><a href="http://cantina.co/author/steve/" target="_blank">With Steve Pember</a></cite>
    </div>

    <div id="html5" class="slide">
        <p class="left cantina-orange animate-build" data-build="1">Does it work in IE?</p>
        <img class="logo push-left" src="${resource(dir: 'images/slides', file: 'HTML5-logo.png')}" alt="HTML 5"/>
        <p class="right cantina-orange animate-build" data-build="2">Then it's not HTML 5.</p>
    </div>

    <div id="html5_2" class="slide">
        <h2 class="title">Collection of New Markup & APIs</h2>
        <img  src="${resource(dir: 'images/slides', file: 'html5_chart.png')}" alt="HTML 5 Capabilities Chart"/>
        <h3 class="error content-right animate-in" data-animation="space-in">Not Final!</h3>
        <a class="animate-in" data-animation="fly-in-right" href="http://cantina.co/wp-content/uploads/2012/03/HTML5GuideFin312.pdf" target="_blank"><img class="guide" src="${resource(dir: 'images/slides', file: 'Cantina-html5-guide.png')}" alt="Cantina's HTML 5 Guide"/></a>
    </div>

    <div id="html5_3" class="slide">
        <h2 class="title">Ecosystem of Modern Techniques</h2>
        <p class="animate-build" data-build="1">Responsive Design / Progressive Enhancement</p>
        <p class="animate-build" data-build="2">Client-Side Markup Generation</p>
        <p class="animate-build" data-build="3">Presentation / Service Layer Separation</p>
        <h3 class="animate-in cantina-orange"  data-animation="fly-in-right">USABILITY!</h3>
    </div>



    <div id="futureProof" class="slide">
        <h1>Future Proof</h1>
        <h3 class="sub animate-in" data-animation="space-in">Building your site defensively</h3>
    </div>

    <div id="futureProof_2" class="slide">
        <h2 class="title">What's Old is New Again</h2>
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
        <h2>Today...</h2>
        <div class="row">
            <img class="rounded" src="${resource(dir: 'images/slides', file: 'multiple_devices.jpg')}" alt="Multiple Devices"/>
            <div class="right ">
                <ul>
                    <li>Multiple speeds</li>
                    <li>Multiple devices</li>
                    <li>Multiple headaches</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="futureProof_4" class="slide">
        <h2 class="center-text">Responsive Design</h2>
        <p class="center-outer">Adapt to <br/><strong class="animate-in cantina-orange" data-animation="space-in">Capabilities</strong><br/>Not Devices</p>
        <img class="rounded push-left" src="${resource(dir: 'images/slides', file: 'ResponsiveDesignGlobe.png')}" alt="Responsive Design"/>
        <p class="right animate-in" data-animation="fly-in-left">Provide a <br/><strong class="cantina-orange">Consistant</strong><br/>Experience</p>
    </div>


    <div id="futureProof_5" class="slide">
        <p class="animate-build center-outer" data-build="1">More than adjusting layout with @media</p>
        <p class="animate-build center-outer" data-build="2">Only send what is necessary to client</p>
        <p class="animate-build center-outer" data-build="3">Pro-Tip: Have <span class="cantina-orange">Client</span> ask for only what it needs</p>
        <div class="right center-inner animate-build" data-build="4">
            <a href="http://cantina.co/wp-content/uploads/2012/01/ResponsiveDesignGuideFnll0110121.pdf" target="_blank"><img class="guide" src="${resource(dir: 'images/slides', file: 'Cantina-html5-guide.png')}" alt="Cantina's Responsive Design Guide"/></a>
            <p class="sub">readme</p>
        </div>
    </div>

    <div id="futureProof_6" class="slide">
        <h2 class="center-text">Client-Side Templating</h2>
        <p class="animate-build" data-build="1"><span class="cantina-orange">Client</span> generates the Markup</p>
        <p class="animate-build right-text" data-build="2">Increases Perceived Performance</p>
        <p class="animate-build" data-build="3">Leads Naturally to...</p>
    </div>

    <div id="futureProof_7" class="slide">
        <h2 class="center-text">Presentation / Service Layer Separation</h2>
        <p class = "left">Regular</p>
        <p class="right">SOA</p>
    </div>


    <div id="mvcmv" class="slide">
        <h1>Advantages & Disadvantages</h1>
        <p class="sub">Of MvCMV</p>
    </div>

    <div id="mvcmv_2" class="slide">
        <h2 class="center-text positive">Pros</h2>
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
        <h2 class="center-text error">Cons</h2>
            <p class="animate-build right-text" data-build="1">2+ Codebases - </p>
            <p class="animate-build right-text" data-build="2">Increased Testing Requirements - </p>
            <p class="animate-build right-text" data-build="3">Vast Amounts of Javascript (if your team is not ready) - </p>
            <p class="animate-build right-text error" data-build="4">Security Model Change Required - </p>
    </div>

    <div id="apiDesign" class="slide">
        <h1>API Design</h1>
        <p class="sub">Or, Just Use REST and Skip this Section</p>
    </div>

    <div class="slide">
        <h2 class="center-text">A Good API Should Be:</h2>
        <ul>
            <li class="animate-build" data-build="1">Efficient</li>
            <li class="animate-build" data-build="2">Intuitive</li>
            <li class="animate-build" data-build="3">Backwards Compatible</li>
            <li class="animate-build" data-build="4">Able To Support Multiple Formats</li>
            <li class="animate-build" data-build="5">Aware of Intended Consumer</li>
        </ul>
    </div>

    <div id="apiDesign_3" class="slide">
        <h2 class="center-text animate-in" >So Why <span class="cantina-orange">Grails?</span></h2>
        <p class="center-text sub">A Few Examples:</p>
        <div class="top-row clearfix">
            <img class="rounded animate-build left" data-build="1" src="${resource(dir: 'images/slides', file: 'grails_withFormat.png')}" alt="Grails - With Format"/>
            <img class="rounded animate-build left" data-build="2" src="${resource(dir: 'images/slides', file: 'grails_json_builder.png')}" alt="Grails - JSON Builder"/>
        </div>
        <div class="bottom-row clearfix">
            <img class="rounded animate-build left" data-build="3" src="${resource(dir: 'images/slides', file: 'grails_allowed_methods.png')}" alt="Grails - Allowed Methods Constraint"/>
        </div>
    </div>

    <div id="jsHelp" class="slide">

    </div>
    <div id="twitterMonitor" class="slide">

    </div>

    <div id="credits" class="slide">

    </div>






</body>
</html>