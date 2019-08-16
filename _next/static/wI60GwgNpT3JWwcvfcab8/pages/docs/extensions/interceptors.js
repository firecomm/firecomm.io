(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4XJW":function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),o=t.n(i),r=t("HVSj");n.default=function(e){return o.a.createElement(r.a,{subsection:"Interceptors",content:"Module: src/client_interceptors\n===============================\n\nClient Interceptors\n\nThis module describes the interceptor framework for clients. An interceptor is a function which takes an options object and a nextCall function and returns an InterceptingCall:\n```\nvar\xa0interceptor\xa0=\xa0function(options,\xa0nextCall)\xa0{\n\xa0\xa0return\xa0new\xa0InterceptingCall(nextCall(options));\n}\n```\nThe interceptor function must return an InterceptingCall object. Returning\xa0`new InterceptingCall(nextCall(options))`will satisfy the contract (but provide no interceptor functionality).\xa0`nextCall`\xa0is a function which will generate the next interceptor in the chain.\n\nTo implement interceptor functionality, create a requester and pass it to the InterceptingCall constructor:\n\n`return new InterceptingCall(nextCall(options), requester);`\n\nA requester is a POJO with zero or more of the following methods:\n\n`start(metadata, listener, next)`\n\n-   To continue, call next(metadata, listener). Listeners are described\n-   below.\n\n`sendMessage(message, next)`\n\n-   To continue, call next(message).\n\n`halfClose(next)`\n\n-   To continue, call next().\n\n`cancel(message, next)`\n\n-   To continue, call next().\n\nA listener is a POJO with one or more of the following methods:\n\n`onReceiveMetadata(metadata, next)`\n\n-   To continue, call next(metadata)\n\n`onReceiveMessage(message, next)`\n\n-   To continue, call next(message)\n\n`onReceiveStatus(status, next)`\n\n-   To continue, call next(status)\n\nA listener is provided by the requester's\xa0`start`\xa0method. The provided listener implements all the inbound interceptor methods, which can be called to short-circuit the gRPC call.\n\nThree usage patterns are supported for listeners: 1) Pass the listener along without modification:\xa0`next(metadata, listener)`. In this case the interceptor declines to intercept any inbound operations. 2) Create a new listener with one or more inbound interceptor methods and pass it to\xa0`next`. In this case the interceptor will fire on the inbound operations implemented in the new listener. 3) Make direct inbound calls to the provided listener's methods. This short-circuits the interceptor stack.\n\nDo not modify the listener passed in. Either pass it along unmodified, ignore it, or call methods on it to short-circuit the call.\n\nTo intercept errors, implement the\xa0`onReceiveStatus`\xa0method and test for\xa0`status.code !== grpc.status.OK`.\n\nTo intercept trailers, examine\xa0`status.metadata`\xa0in the\xa0`onReceiveStatus`\xa0method.\n\nThis is a trivial implementation of all interceptor methods: var interceptor = function(options, nextCall) { return new InterceptingCall(nextCall(options), { start: function(metadata, listener, next) { next(metadata, { onReceiveMetadata: function (metadata, next) { next(metadata); }, onReceiveMessage: function (message, next) { next(message); }, onReceiveStatus: function (status, next) { next(status); }, }); }, sendMessage: function(message, next) { next(message); }, halfClose: function(next) { next(); }, cancel: function(message, next) { next(); } }); };\n\nThis is an interceptor with a single method: var interceptor = function(options, nextCall) { return new InterceptingCall(nextCall(options), { sendMessage: function(message, next) { next(message); } }); };\n\nBuilders are provided for convenience: StatusBuilder, ListenerBuilder, and RequesterBuilder\n\ngRPC client operations use this mapping to interceptor methods:\n\ngrpc.opType.SEND_INITIAL_METADATA -> start grpc.opType.SEND_MESSAGE -> sendMessage grpc.opType.SEND_CLOSE_FROM_CLIENT -> halfClose grpc.opType.RECV_INITIAL_METADATA -> onReceiveMetadata grpc.opType.RECV_MESSAGE -> onReceiveMessage grpc.opType.RECV_STATUS_ON_CLIENT -> onReceiveStatus\n\n### Methods\n\n* * * * *\n\n#### inner\xa0getCall(channel, path [, options])\n\nGet a call object built with the provided options.\n\n##### Parameters:\n\n| Name | Type | Argument | Description |\n| --- | --- | --- | --- |\n| `channel` | grpc.Channel|  |  |\n| `path` | string |  |  |\n| `options` | grpc.Client~CallOptions | optional | Options object.\n\n* * * * *\n\n#### inner\xa0getInterceptingCall(method_definition, options, interceptors, channel, responder)\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `method_definition` | grpc~MethodDefinition |  |\n| `options` | grpc.Client~CallOptions |  |\n| `interceptors` | Array.Interceptor |  |\n| `channel` | grpc.Channel |  |\n| `responder` | function\xa0|\xa0EventEmitter |  |\n* * * * *\n\n#### inner\xa0getLastListener(method_definition, emitter [, callback])\n\nCreates the last listener in an interceptor stack.\n\n##### Parameters:\n\n| Name | Type | Argument | Description |\n| --- | --- | --- | --- |\n| `method_definition` | grpc~MethodDefinition |  |  |\n| `emitter` | EventEmitter |  |  |\n| `callback` | function | optional |  |\n##### Returns:\n\nType\n\ngrpc~Listener\n\n* * * * *\n\n#### inner\xa0resolveInterceptorProviders(providers, method_definition)\n\nTransforms a list of interceptor providers into interceptors.\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `providers` | Array.InterceptorProvider |  |\n| `method_definition` | grpc~MethodDefinition |  |\n##### Returns:\n\nType\n\nnull\xa0|\xa0Array.Interceptor"})}},"sX/X":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/extensions/interceptors",function(){var e=t("4XJW");return{page:e.default||e}}])}},[["sX/X",1,0]]]);