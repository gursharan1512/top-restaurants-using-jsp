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
	    		resinfo += '<hr>'+resName+' <button type="button" class="btn btn-primary" onClick="createFav(\''+resID+'\',\''+resName+'\')">Add to Favourites</button></hr>';
	    	}
	        document.getElementById("addInfo").innerHTML = resinfo;
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function createFav(resId,resName){
	var ttp = new XMLHttpRequest();
	var url2="http://localhost:8090/top-restaurants-using-jsp/zomato?rid="+resId+"&rName="+resName;
	ttp.open("GET", url2, true);
	ttp.send();
}

function getFav(){
	var xhttp = new XMLHttpRequest();
	var url3="http://localhost:8090/top-restaurants-using-jsp/readJSON";
	
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var myArr=JSON.parse(this.responseText);
			var favRes = "";
			for(var x in myArr){
				favRes += myArr[x];
			}
			document.getElementById("addInfo").innerHTML = favRes;
		}
	};
	
	xhttp.open("GET", url3, true);
	xhttp.send();
}
