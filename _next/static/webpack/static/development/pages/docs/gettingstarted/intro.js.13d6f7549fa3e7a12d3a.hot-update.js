webpackHotUpdate("static/development/pages/docs/gettingstarted/intro.js",{

/***/ "./static/docs/GettingStarted/intro2.0.md":
/*!************************************************!*\
  !*** ./static/docs/GettingStarted/intro2.0.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n# Getting Started\n## Install\n``` \nnpm i --save firecomm\n```\n\n## 1. Define a .proto file\nThe .proto file is the schema for your Servers and client Stubs. It defines the package you will build which will give your Server and Client superpowers -- Remote Procedure Call (RPC) methods. RPC methods define what Message Object the client Stubs send and what the server Handlers respond with.\n```protobuf\n// proto/exampleAPI.proto\nsyntax = \"proto3\";\n\npackage exampleAPI;\n\nservice ChattyMath {\n  rpc BidiMath (stream Benchmark) returns (stream Benchmark) {};\n}\n\nmessage Benchmark {\n  double requests = 1;\n  double responses = 2;\n}\n```\n\n> In our example, the RPC method BidiMath will send a stream of Benchmark messages from the client Stub and will *return* a stream of Benchmark messages from the server Handler for BidiMath. The Benchmark message received on either side will be an Object with the properties `requests` and `responses`. The values of `requests` and `responses` will be doubles, or potentially very large numbers. This example will use \"proto3\" syntax -- you can read more about protobufs and all of the possible Message fields at Google's developer docs [here](https://developers.google.com/protocol-buffers/docs/proto3).\n\n## 2. Build a package\n\nIn order to pass superpowers to our Server and client Stubs, we first need to package our .proto file. We will use the core `build` function imported from the firecomm library to build our package.\n\n```javascript\n// package.js\nconst { build } = require( 'firecomm' );\nconst path = require( 'path' );\nconst PROTO_PATH = path.join( __dirname, './proto/exampleAPI.proto' );\n\nconst CONFIG_OBJECT = {\n  keepCase: true, // keeps our RPC methods camelCased\n  longs: Number, // compiles the potentially enormous `double`s for our Benchmark requests and responses into a Number rather than a String\n}\nconst package = build( PROTO_PATH, CONFIG_OBJECT );\nmodule.exports = package;\n```\n\n> Under the hood, the config object is passed all the way to the protobufjs loader. For a clearer low-level understanding of the possible configurations, see their npm package documentation [here](https://www.npmjs.com/package/protobufjs).\n\n## 3. Create a server\nNow that we have our package, we need a Server. Let's import the `Server` class from the Firecomm library.\n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst server = new Server();\n```\n\n> Under the hood, Firecomm extends Google's gRPC core channel configurations. You can pass an Object to the Server as the first argument to configure advanced options. You can see all of the Object properties and the values you can set them to in the gRPC core docs [here](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html).\n\n## 4. Define the server-side Handler\n\nBefore we can interact with a client, our Server needs Handlers. Handlers are usually unique to each RPC Method. In order to demonstrate the power of gRPCs, we will be listening for client requests and immediately sending back server responses in a ping-pong pattern. Metadata is sent only once at the start of the exchange, which will trigger Node's built in timers to start clocking the nanoseconds between responses and requests.\n\n```javascript\n// /server/chattyMathHandlers.js\nfunction BidiMathHandler(bidi) {\n  let start;\n  let end;\n  bidi\n    .on('metadata', (metadata) => {\n      start = Number(process.hrtime.bigint());\n      bidi.set({thisSetsMetadata: 'responses incoming'})\n      console.log(metadata.getMap());\n    })\n    .on('error', (err) => {\n      console.exception(err)\n    })\n    .on('data', (benchmark) => {\n      bidi.send(\n        {\n          requests: benchmark.requests, \n          responses: benchmark.responses + 1\n        }\n      );\n      if (benchmark.requests % 10000 === 0) {\n        end = Number(process.hrtime.bigint());\n      console.log(\n        'client address:', bidi.getPeer(),\n        '\\nnumber of requests:', benchmark.requests,\n        '\\navg millisecond speed per request:', ((end - start) /1000000) / benchmark.requests\n      );\n    }\n  })\n}\n\nmodule.exports = { \n\tBidiMathHandler,\n}\n```\n\n> As I'm sure you've noticed, the Objects we are receiving and sending have exactly the properties and value-types we defined in the Benchmark message in the .proto file. If you attempt to send an incorrectly formatted Object, the RPC Method will coerce the Object into a Message with the correct formatting. Values will be coerced to a default falsey value: `{ aString: '' }`, `{ someObject: {}, anArray: [] }`, or in our BidiMath example `{ requests: 0, responses: 0 }`.\n\n## 5. Add the Services\n\nLet's import the Handler and the package and add each Service to our Server alongside an Object mapping the name of the RPC Method with the Handler we created.\n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './chattyMathHandlers.js );\n\nnew Server()\n  .addService( package.ChattyMath,   {\n  BidiMath: BidiMathHandler,\n})\n```\n> Servers can chain the .addService method as many times as they wish for each Service that we defined in the .proto file. If you have multiple RPC methods in a Service, each should be mapped as a property on the Object with a Handler function as the value. Not mapping all of your RPC Methods will cause a Server error.\n\n## 6. Bind the server to addresses\n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './chattyMathHandlers.js' );\n\nnew Server()\n  .addService( package.ChattyMath,   {\n  BidiMath: BidiMathHandler,\n})\n  .bind('0.0.0.0: 3000')\n```\n> The .bind method can be passed an array of strings to accept requests at any number of addresses. For example:\n> ```javascript\n> server.bind( [ \n>   '0.0.0.0: 3000', \n>   '0.0.0.0: 8080', \n>   '0.0.0.0: 9900',\n> ] );\n> ```\n## 7. Start the server\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './heavyMathHandlers.js' );\n\nnew Server()\n  .addService( \n    package.ChattyMath,   \n    { BidiMath: BidiMathHandler }\n  )\n  .bind('0.0.0.0: 3000')\n  .start();\n```\n> Run your new firecomm/gRPC-Node server with: `node /server/server.js`. It may also be worthwhile to map this command to `npm start` in your `package.json`.\n\n## 8.  Create a client Stub for each Service:\nNow that the server is up and running, we have to pass superpowers to the client-side. We open channels by connecting each Stub to the same address as a Server is bound to. In order for the Stub to be able to make RPC Method requests we need to pass the package.Service into a newly constructed `Stub`.\n```javascript\n// /clients/chattyMath.js\nconst { Stub } = require( 'firecomm' );\nconst package = require( '../package.js' )\nconst stub = new Stub( \n\tpackage.ChattyMath, \n\t'localhost: 3000', // also can be '0.0.0.0: 3000'\n);\n```\n> Under the hood, Firecomm extends Google's gRPC core channel configurations. You can pass an Object to the Stub as the second argument to configure advanced options. **Note: Any channel configurations on the client Stub should match the configurations on the server it is requesting to.** You can see all of the Object properties and the values you can set them to in the gRPC core docs [here](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html).\n\n## 9. Make requests from the Stub and see how many requests and responses a duplex can make!\nBefore we can interact with a server, our client Stub needs to invoke the RPC Method. We can also pass any metadata we would like to send at this point as the first argument of the RPC Method. RPC Methods now exist on the Stub just like it was defined in the .proto file because we passed the package.Service into the Stub constructor. Because we defined the RPC Method to send a stream of messages and return a stream of messages, both the client Stub and the server can send and listen for any number of messages over a long-living TCP connection. \n\nOnce the RPC Method is invoked, the client Stub always sends the first request. As soon as the server Handler receives the request, the ping-pong will begin. Similarly to the server Handler, now on the client-side, we will begin listening for server requests and immediately sending back client responses. Again, metadata is received from the server only once at the start of the exchange, which will trigger Node's built in timers to start clocking the nanoseconds between requests and responses.\n```javascript\n// /clients/chattyMath.js\nconst { Stub } = require( 'firecomm' );\nconst package = require( '../package.js' )\nconst stub = new Stub( \n  package.ChattyMath, \n  'localhost: 3000',\n);\n\nlet start;\nlet end;\nconst bidi = stub.bidiMath({thisIsMetadata: 'let the races begin'})\n  .send({requests: 1, responses: 0})\n  .on( 'metadata', (metadata) => {\n    start = Number(process.hrtime.bigint());\n    console.log(metadata.getMap())\n  })\n  .on( 'error', (err) => console.error(err))\n  .on( 'data', (benchmark) => {\n    bidi.send(\n      {\n        requests: benchmark.requests + 1, \n        responses: benchmark.responses\n      }\n    )\n    if (benchmark.responses % 10000 === 0) {\n      end = Number(process.hrtime.bigint());\n    console.log(\n      'server address:', bidi.getPeer(),\n      '\\ntotal number of responses:', benchmark.responses,\n      '\\navg millisecond speed per response:', ((end - start) /1000000) / benchmark.responses\n    )\n  }\n});\n```\n> Run your new firecomm/gRPC-Node client with: `node /clients/chattyMath.js`. It may also be worthwhile to map this command to a script like `npm run client` in your `package.json`.\n\nNow enjoy the power of gRPCs! See how many requests and responses you can make per second with one duplex RPC method! \n\nExplore the flexible possibilities! Creatively modify the bidiMath to be full duplex instead of ping-ponging. Add more client Stubs to run services in parallel to one server address, bind multiple addresses to the Server, run multiple clients with their own Stubs requesting from separate addresses, etc. And once you feel comfortable with the clients and servers, dive into modifying the .proto file to change the message fields or add multiple messages with different fields to send and receive, add multiple RPC methods to one Service, or add multiple Services to the package. Then, build the new .proto, add each package.Service to a server, create a Stub with the each matching package.Service and a server address, and explore the endless potential of gRPCs!\n");

/***/ })

})
//# sourceMappingURL=intro.js.13d6f7549fa3e7a12d3a.hot-update.js.map