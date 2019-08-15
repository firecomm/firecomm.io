(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4R/9":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/core/stub",function(){var e=t("ElIL");return{page:e.default||e}}])},ElIL:function(e,n,t){"use strict";t.r(n);var s=t("q1tI"),i=t.n(s),c=t("HVSj");n.default=function(e){return i.a.createElement(c.a,{subsection:"Stub",content:'# Stub\n\nHow to create a channel and invoke gRPC methods client side. \n\n```javascript\nconst { Stub } = require( "firecomm" );\nconst service = require("./service.js");\nconst sslCertificate = require("./sslCertificate.crt");\nconst stub = new Stub(\n  service, \n  "localhost:3000", \n  { certificate: sslCertificate }\n);\n\nstub.sayHello( { greeting:"Hello world." } )\n  .then( res => console.log( res ) );\n  .catch( err => console.log( err ) );\n```\n\nThe primary methods that are available on the stub.\n  1.  The constructor, which will allow you to instantiate a channel for that service.\n  2.  Your gRPC methods from the service you passed into that Stub, which have been extended by Firecomm with added functionality and simplified syntax;\n  3.  The methods that are available on an ordinary gRPC client/channel.\n\n# Constructor\n\nThe `Stub` constructor generates an instance of Firecomm\'s `Stub` class, which extends the native gRPC client-service instance.\n\n```javascript\nconst { Stub } = require( "firecomm" );\nconst service = require("./service.js");\nconst sslCertificate = require("./sslCertificate.crt");\nconst stub = new Stub(\n  service, \n  "localhost:3000", \n  { certificate: sslCertificate }\n);\n```'})}}},[["4R/9",1,0]]]);