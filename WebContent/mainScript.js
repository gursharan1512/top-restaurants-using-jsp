function getCity(){
	var city = document.getElementById("city").value;
	var xhttp = new XMLHttpRequest();
	var url="https://developers.zomato.com/api/v2.1/search?apikey=2581d257f26062e504e54832aec5e9f6&q="+city;
	
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var data = JSON.parse(xhttp.responseText);
	    	var nameRes = "";
	    	for(var i=0;i<10;i++){
	    		nameRes += "<hr>"+data.restaurants[i].restaurant.name+"</hr><br/>";
	    	}
	        document.getElementById("addInfo").innerHTML = nameRes;
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();	
}