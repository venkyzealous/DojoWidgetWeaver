
var templates17 = {
'event':'require(["dojo/on"], function(on){\n\ton(%2, "%1", function(%3){\n\t\t%4\n\n\t});\n});',
'publish':'require(["dojo/_base/connect"], function(connect){\n\tconnect.publish("%1", [\n\t\t%2\n\t]);',
'subscribe':'require(["dojo/_base/connect"], function(connect){\n\tconnect.subscribe("%1", function(%2){\n\t\t%3\n\t});\n});',
'xhrCall':'require(["dojo/request/xhr"], function(xhr){\n\txhr("%1", {\n\t\tdata:"%2",\n\t\tquery:"%3",\n\t\tmethod:"%4",\n\t\ttimeout:%5,\n\t\thandleAs: "%6",\n\t\t}).then(function(data){\n\t\t\t%7\n\t\t}, function(err){\n\t\t\t%8\n\t\t});\n\t});'
};


