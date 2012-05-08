<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>

		<link rel="stylesheet" href="${resource(dir: 'css', file: 'main.css')}" type="text/css">
        <link rel="stylesheet" href="${resource(dir: 'css', file: 'main-responsive.css')}" type="text/css">
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'mobile.css')}" type="text/css">

        <r:require modules="core, monitor, monitorSrc"/>
        <r:layoutResources />
        <g:layoutHead/>

	</head>
	<body>
		<div id="appLogo" role="banner" class="app-header">
            <div>
                <img class="left" src="${resource(dir: 'images', file: 'cantina-logo-white.png')}" alt="Cantina"/>
                <h2>Twitter Monitor</h2>
                <img id="grailsLogo" class="right" src="${resource(dir: 'images', file: 'gr8conf-logo.png')}" alt="Gr8Conf"/>

            </div>
		</div>
		<g:layoutBody/>
        <r:layoutResources />
	</body>
</html>