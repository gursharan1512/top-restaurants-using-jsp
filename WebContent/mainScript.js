function getCity(){
	var city = document.getElementById("city").value;
	var xhttp = new XMLHttpRequest();
	var url="https://developers.zomato.com/api/v2.1/search?apikey=2581d257f26062e504e54832aec5e9f6&q="+city;
	
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var data = JSON.parse(xhttp.responseText);
	    	var resinfo = "";
	    	for(var j=0;j<3;j++){
		    	resinfo += '<div class="card-deck my-5">';
		    	for(var i=0;i<3;i++){
		    		var k=(j*3)+i;
		    		var resName=data.restaurants[k].restaurant.name;
		    		var resImg=data.restaurants[k].restaurant.featured_image;
		    		var resAdd=data.restaurants[k].restaurant.location.address;
		    		var resRating=data.restaurants[k].restaurant.user_rating.aggregate_rating;
		    		resinfo += '<div class="card"><img class="card-img-top" src="'+resImg+'"  alt="Thumbnail of'+resName+'"><div class="card-body"><h5 class="card-title">'+resName+'</h5><p class="card-text"><strong>Address :</strong>'+resAdd+'<br/><strong>Rating :</strong>'+resRating+'</p></div><div class="card-footer"> <button type="button" class="btn btn-primary" onClick="createFav(\''+resName+'\',\''+resImg+'\',\''+resAdd+'\',\''+resRating+'\')">Add to Favourites</button></div></div>';
		    	}
		    	resinfo += '</div>'
	    	}
	        document.getElementById("addInfo").innerHTML = resinfo;
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function createFav(resName,resImg,resAdd,resRating){
	var ttp = new XMLHttpRequest();
	var url2="http://localhost:8090/top-restaurants-using-jsp/zomato?rName="+resName+"&rImg="+resImg+"&rAdd="+resAdd+"&rRating="+resRating;
	ttp.open("GET", url2, true);
	ttp.send();
}

function getFav(){
	var xhttp = new XMLHttpRequest();
	var url3="http://localhost:8090/top-restaurants-using-jsp/readJSON";
	
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var data=JSON.parse(this.responseText);
			var favRes = "";
			for(var x in data.name){
				favRes += '<div class="card my-4"><h5 class="card-header">'+data.name[x]+'</h5><div class="card-body"><p><bold>Address :'+data.address[x]+'</bold><br/><bold>Rating :'+data.rating[x]+'</bold></p><a href="#" class="btn btn-primary">Delete</a></div></div>';
			}
			document.getElementById("addInfo").innerHTML = favRes;
		}
	};
	
	xhttp.open("GET", url3, true);
	xhttp.send();
}
