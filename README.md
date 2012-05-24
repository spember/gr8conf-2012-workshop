# GR8Conf 2012 Workshop


This project contains materials related to a workshop I'm running / have run at Gr8conf 2012. The purpose of the workshop is to give the participants hands-on experience building a responsive application in which the presentation and services layers are separated (i.e. the server sends data only to the front end, which is capable of rendering itself via Javascript & templates). In addition, there is a short presentation on the merits of this approach and why Grails is an excellent choice for building such an app.

The contents of this mostly fall within the sample Grails app, called 'twitterMonitor', which has a handful of purposes:

1.	To serve up the sample application that participants will re-create, called 'twitterMonitor'
2.	To host the presentation, written in full html + javascript 

There are two main endpoints with which to access this application. Start up the grails app (version 2.0.4) and use: 

*	[http://localhost:8080/twitterMonitor](http://localhost:8080/twitterMonitor) or [http://localhost:8080/twitterMonitor/standAlone](http://localhost:8080/twitterMonitor/standAlone) to access the sample application.

*	[http://localhost:8080/twitterMonitor/presentation](http://localhost:8080/twitterMonitor/presentation) to view the presentation.

Note: because this is meant as a lesson, several of the Javascript files will be empty. Follow the guide to restore them! (Alternatively, can checkout the completed branch)

### Instructions

The other main file is an Instructions document detailing the steps the participants should follow to successfully build the application. It outlines the various technologies one will be working with and a step by step guide, with detail about each step along the way.

It is written in [Github's flavor of Markdown](http://github.github.com/github-flavored-markdown/) with html and pdf versions also provided. The html version was compiled using [pandoc](http://johnmacfarlane.net/pandoc/), and (if you're curious) the command to build the html version with pandoc via the following command is:

	pandoc -S Instructions.md -c Instructions.css -o Instructions.html


