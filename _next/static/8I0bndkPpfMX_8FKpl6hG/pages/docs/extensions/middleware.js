(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{QTJr:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/extensions/middleware",function(){var e=a("o8Hd");return{page:e.default||e}}])},o8Hd:function(e,n,a){"use strict";a.r(n);var i=a("q1tI"),d=a.n(i),r=a("HVSj");n.default=function(e){return d.a.createElement(r.a,{subsection:"Middleware",content:"# Middleware\n\nFirecomm allows the injection of middleware at the method-level and the service-level for layering functionality. \n\n```javascript\nconst { Server } = require('firecomm');\nconst server = new Server();\nconst package = require(\"./builtPackageDefinition\")\nserver.addService( \n  package.ExampleService, \n  {\n    exampleMethod: [methodMiddleware1, methodMiddleware2, methodHandler]\n  }, \n  [serviceMiddleware1, serviceMiddleware2],\n  (err, call) => {\n    call.throw(err)\n  }\n);\n```\n\nThe following diagram depicts the order that call objects are passed through each of the functions in the middleware stack.\n\n|         Call Object        |\n|:--------------------------:|\n|              I            |\n|              I            |\n|              V             |\n| Service Level Middleware 1 |\n| Service Level Middleware 2 |\n|  Method-Level Middleware 1 |\n|  Method-Level Middleware 2 |\n|       Method Handler       |\n\n- Middleware are blocking by-default using async/await. Thus, any asynchronous functionality inside of a method handler will stop the execution of the middleware stack.\n- Middleware functions side-effect the call object. Thus changes to the call-object inside of one middleware function will persist and be visible by all middleware handlers invoked later in the middleware stack."})}}},[["QTJr",1,0]]]);