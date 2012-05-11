Gr8Conf 2012 Workshop Instructions
========

The purpose of this document is to provide a brief description of each Javascript library we will use and to guide the reader through the process of building or sample app, twitterMonitor.

Structure - [Backbone.js][backbone] (and [Underscore.js][underscore])
------------

Backbone.js provides exactly what it sounds like: a solid foundation from which to build a large Javascript based web app. It provides structure and functionality for Models and their corresponding Views, Collections, History, and a custom Event system. It allows a developer to quickly set up synchronization between a model and the server. It does not, however, provide much in the way of Controller structure, and is thus up to the developer to handle that portion of the application. Backbone has two requirements: [Underscore.js][underscore] ( a functional 'utility belt' which Backbone takes advantage of) and either [jQuery][jquery] or [Zepto][zepto].

I encourage you to read through the Backbone [documentation][backbone] (or at least have it open as a reference) during this project, but I highlight here a few important bits to keep in mind.

First off, when creating a new Backbone object, one 'extends' a from a base type, like so: 

	var keyword = new Backbone.Model.extend({options});


The extend method accepts an options parameter, which is a normal JS object that contains additional functionality. A base Backbone object inherits quite a bit of functionality, but the options parameter can override anything you wish.


Below are listed some important features and methods from each object type

### Models

Models typically act as a direct mapping from an object on your server to one in your UI. Each Backbone model knows how to access it's mapped Model (by default via a pure REST implementation) and allows a range of functionality, including performing client-side validation of objects.

#### fetch({options})
The fetch method pulls information from the server and updates the model with any new data. If data has been changed, a 'changed' event is fired from this object. The options parameter allows for 'success' and 'error' callback methods.


Templating - [Handlebars][handlebars]
--------------

Based on the Mustache template format, Handlebars is an excellent choice for building Javascript templates.


Testing - [Jasmine][jasmine]
----------

Jasmine is bdd.



[backbone]: http://backbonejs.org/  "Backbone.js"
[underscore]: http://documentcloud.github.com/underscore/  "Underscore.js"
[handlebars]: http://handlebarsjs.com/ "Handlebars Templating"
[jasmine]: http://pivotal.github.com/jasmine/ "Jasmine BDD Testing"
[jquery]: http://jquery.com/ "jQuery"
[zepto]: http://zeptojs.com/ "Zepto.js"