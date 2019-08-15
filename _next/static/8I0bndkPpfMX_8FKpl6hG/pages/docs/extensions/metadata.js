(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Y9st:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),i=t("HVSj");n.default=function(e){return o.a.createElement(i.a,{subsection:"Metadata",content:"## Class: Metadata\n\n##### new Metadata( [options])\n\n## \n\nClass for storing metadata. Keys are normalized to lowercase ASCII.\n\n#### Parameters:\n| Name | Type | Argument | Description |\n| --- | --- | --- | --- |\n| `options` | Object | optional | Boolean options for the beginning of the call. These options only have any effect when passed at the beginning of a client request.|\n\n##### Properties\n\n| Name | Type | Argument | Default | Description |\n| --- | --- | --- | --- | --- |\n| `idempotentRequest` | boolean | optional | false | Signal that the request is idempotent\n| `waitForReady` | boolean | optional | true | Signal that the call should not return UNAVAILABLE before it has started.\n| `cacheableRequest` | boolean | optional | false | Signal that the call is cacheable. GRPC is free to use GET verb.\n| `corked` | boolean | optional | false | Signal that the initial metadata should be corked.\n\n##### Example\n```\nvar\xa0metadata\xa0=\xa0new\xa0metadata_module.Metadata();\nmetadata.set('key1',\xa0'value1');\nmetadata.add('key1',\xa0'value2');\nmetadata.get('key1')\xa0//\xa0returns\xa0['value1',\xa0'value2']\n```\n\n### Methods\n\n* * * * *\n\n#### add(key, value)\n\nAdds the given value for the given key. Normalizes the key.\n\n##### Parameters:\n| Name | Type | Description |\n| --- | --- | --- |\n| `key` | String | The key to add to.|\n| `value` | String/Buffer | The value to add. Must be a buffer if and only if the normalized key ends with '-bin'\n* * * * *\n\n#### clone()\n\nClone the metadata object.\n\n##### Returns:\n\nThe new cloned object\n***\n#### get(key)\n\nGets a list of all values associated with the key. Normalizes the key.\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `key` | String | The key to get\n\n##### Returns:\n\nThe values associated with that key\n\nType\n\nArray.<(String|Buffer)>\n\n* * * * *\n\n#### getMap()\n\nGet a map of each key to a single associated value. This reflects the most common way that people will want to see metadata.\n\n##### Returns:\n\nA key/value mapping of the metadata\n\nType\n\nObject.<String, (String|Buffer)>\n***\n#### remove(key)\n\nRemove the given key and any associated values. Normalizes the key.\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `key` | String | The key to remove |\n\n* * * * *\n\n#### set(key, value)\n\nSets the given value for the given key, replacing any other values associated with that key. Normalizes the key.\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `key` | String | The key to set |\n| `value` | String/Buffer | The value to set. Must be a buffer if and only if the normalized key ends with '-bin' |\n\n* * * * *\n\n#### setOptions(options)\n\nSet options on the metadata object\n\n##### Parameters:\n\n| Name | Type | Description |\n| --- | --- | --- |\n| `options` | Object | Boolean options for the beginning of the call. These options only have any effect when passed at the beginning of a client request.\n\n###### Properties\n\n| Name | Type | Argument | Default | Description |\n| --- | --- | --- | --- | --- |\n| `idempotentRequest` | boolean | optional |false | Signal that the request is idempotent\n| `waitForReady` | boolean | optional | true | Signal that the call should not return UNAVAILABLE before it has started.\n| `cacheableRequest` | boolean | optional |false |Signal that the call is cacheable. GRPC is free to use GET verb.\n| `corked` | boolean | optional | false | Signal that the initial metadata should be corked."})}},Z6Ko:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/extensions/metadata",function(){var e=t("Y9st");return{page:e.default||e}}])}},[["Z6Ko",1,0]]]);