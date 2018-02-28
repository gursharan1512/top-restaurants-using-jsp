function getCity(){
	var city = document.getElementById("city").value;
	var xhttp = new XMLHttpRequest();
	var url="https://developers.zomato.com/api/v2.1/search?apikey=2581d257f26062e504e54832aec5e9f6&q="+city;
	
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var data = JSON.parse(xhttp.responseText);
	    	var resinfo = "";
	    	for(var i=0;i<10;i++){
	    		var resName=data.restaurants[i].restaurant.name;
	    		var resID=data.restaurants[i].restaurant.id;
	    		resinfo += '<hr>'+resName+' <button type="button" class="btn btn-primary" onClick="createFav(\''+resID+'\')">Add to Favourites</button></hr>';
	    	}
	        document.getElementById("addInfo").innerHTML = resinfo;
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function createFav(resId){
	var ttp = new XMLHttpRequest();
	var url2="http://localhost:8090/top-restaurants-using-jsp/zomato?rid="+resId;
	ttp.open("GET", url2, true);
	ttp.send();
}