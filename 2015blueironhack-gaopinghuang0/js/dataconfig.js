app.service('dataConfig', function($http, $q) {
	this.getClimateData = function(year) {
		var start = year + "-01-01",
			end = year + "-12-31",
			token = 'lZKvwmkJKfYKGxEbtjcOKTUAzQsXQQdp',
			config = {
				"datasetid"  : "GHCNDMS",
				"cityid" : "CITY:US180006",
				"limit"  	 : 100,
				// "datacategoryid": "TEMP",
				"datatypeid" : "MMNT",
				"startdate"  : start,
				"enddate"	 : end,
				"stationid"  : "GHCND:USW00014835"
			},
			defered = $q.defer();


		$http.get("http://www.ncdc.noaa.gov/cdo-web/api/v2/data", {
			params: config,
			headers: {'token': token}
		}).then(function(response) {
			Helper.print(response.data);
			defered.resolve(response.data);
		}, function(response) {
			defered.reject('error');
		});
		return defered.promise;
	};
});
