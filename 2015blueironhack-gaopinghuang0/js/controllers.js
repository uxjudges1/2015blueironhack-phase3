(function() {

var Helper = window.Helper = window.Helper || {};

// var data = {
// 	"datasetid"  : "GHCNDMS",
// 	// datacategoryid= ANNTEMP
// 	// datatypeid = "MNTM"
// 	"locationid" : "CITY:US180006",
// 	"startdate"  : "2015-01-01",
// 	"enddate"	 : "2015-11-15"
// };

var settings = {
	"datasetid"  : "GHCNDMS",
	"locationid" : "CITY:US180006",
	"datacategoryid": "TEMP",
	"datatypeid": "MNTM",
	"startdate"  : "2015-09-01",
	"enddate"	 : "2015-10-01"
};

app.controller("tempCtrl", function($scope, $http) {
	$scope.fetch = function(typeid, data) {
		$http.get("http://www.ncdc.noaa.gov/cdo-web/api/v2/data", {
			params: settings,
			headers: {"Content-Type": "application/json",
			'token': 'lZKvwmkJKfYKGxEbtjcOKTUAzQsXQQdp'}
		}).then(on_success, on_error);
	};

	$scope.fetch();

	function on_success(response) {
		Helper.print(response.data);
		$scope.tempResults = response.data.results;
	}

	function on_error(response) {
		console.log(response);
	}
});





})();
