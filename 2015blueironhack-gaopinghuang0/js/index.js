var Helper = window.Helper = window.Helper || {};


app.controller("climateCtrl", function(dataConfig, $scope, $http) {
	$scope.climate = {
		month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		data: [],
	};
	$scope.yearSelected = 2014;

	$scope.drawClimateChart = function(year) {
		var d = dataConfig.getClimateData(year);
		d.then(function(data) {
			if (!!data.results) {
				$scope.climate.data = data.results.map(function(obj) {
					return obj.value/10.0 * 1.8 + 32;
				});
				drawD3LineChart($scope.climate);
			}
		});
	};

	$scope.drawClimateChart($scope.yearSelected);
});


function initMap() {

	var latlng,
		map, 
		marker,
		infowindow;

	latlng = new google.maps.LatLng(40.4258333, -86.9080556);

	map = new google.maps.Map(document.getElementById('mapWrapper'), {
		center: latlng,
		zoom: 14
	});

	marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "West Lafayette"
	});

	infowindow = new google.maps.InfoWindow({
		content: ""
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("West Lafayette");
		infowindow.open(map, marker);
	});
}

function drawD3LineChart(data) {
	var chart = c3.generate({
		bindto: ".climateWrapper",
		data: {
			columns: [
				data.data
			]
		},
		axis: {
			y: {
				label: {
					text: 'MaxTemp (F)',
					position: 'outer-middle'
				}
			}
		}
	});
}
