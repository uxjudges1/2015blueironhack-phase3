var xmlhttp,
	url;
xmlhttp = new XMLHttpRequest();
url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fforecast.weather.gov%2FMapClick.php%3FCityName%3DLafayette%26state%3DIN%26site%3DIND%26lat%3D40.4109%26lon%3D-86.8707%23.Vkk2L2SrRhA'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	var myArr,
    	    json,
	    vartext = "";
        
        myArr = xmlhttp.responseText;
        text = myArr;
        json = JSON.parse(text); 
        document.getElementById("weather").innerHTML = "Weather: " + json.query.results.body.main.div.div[4].div[1].div[0].p[0].content + "," + " temperature: " + json.query.results.body.main.div.div[4].div[1].div[0].p[1].content + '.';
       
    }
};
