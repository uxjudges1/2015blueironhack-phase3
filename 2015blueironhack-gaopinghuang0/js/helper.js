(function() {
var Helper = window.Helper = window.Helper || {};
var isDebug = true;

// print debug info when isDebug=true, otherwise silent
Helper.print = function() {
	var debug;

	if (isDebug) {
		debug = function(msg) {
			var str = JSON.stringify(msg, null, 2);
			console.log(str);
			// get line number of caller function
			var caller_line = (new Error).stack.split("\n")[2];
			var clean = caller_line.split("/js/");
			clean = clean[clean.length-1];
			console.log("called", clean);
		};
	} else {
		debug = function() {};
	}
	return debug;
}();


})();