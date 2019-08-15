(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{AUzo:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/apireference/packageobject",function(){var e=a("Q4PY");return{page:e.default||e}}])},Q4PY:function(e,n,a){"use strict";a.r(n);var r=a("q1tI"),o=a.n(r),t=a("HVSj");n.default=function(e){return o.a.createElement(t.a,{subsection:"Package",content:"# Package\n\n```javascript\n// /some/package.js\nconst { build } = require( 'firecomm' );\nconst proto_path = require( '../some/proto/path' );\nconst package = build( proto_path, { bytes: String } );\nmodule.exports = package;\n```\n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../some/package.js' );\nconst someHandler } = require ( './someHandlers.js' );\n\nnew Server()\n  .addService( package.ServiceName,   {\n  RPCMethodName: someHandler,\n})\n```\n\n```javascript\n// /clients/someClient.js\nconst { Stub } = require( 'firecomm' );\nconst package = require( '../some/package.js' )\nconst stub = new Stub( \n  package.SomeService, \n  'localhost: 3000',\n);\n```\n\nCompiled `proto` package returned from `firecomm.build()`.\n\n| Returned from | Type   | Description                                                                     |\n| --------------- | -------- | --------------------------------------------------------------------------------- |\n| `firecomm.build()` | Object | Has each `service` as a property as it was named in the `proto`. |\n\n## Properties\n| Name | Type   | Description                                                                     |\n| --------------- |-------- | --------------------------------------------------------------------------------- |\n| `<.ServiceName>` | Object | Package has each `service` as a property as it was named in the `proto`. |"})}}},[["AUzo",1,0]]]);