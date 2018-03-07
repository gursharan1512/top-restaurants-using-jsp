<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
    
    <title>Restaurants Finder</title>
  </head>
  <body>
  
	<div class="jumbotron jumbotron-fluid sharan">
	  <div class="container sharan1">
	  	<div class="row d-flex justify-content-center">
	    	<h1 class="display-2">Restaurants Finder</h1>
	    </div>
	    <div class="row d-flex justify-content-center">
	    	<p class="lead">Find the best restaurants, cafés, and bars</p>
	    </div>
	  </div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-10">
				<form>
					Search for restaurant:<input type="text" id="city"/>
					<button type="button" class="btn btn-primary" onClick="getCity()">SEARCH</button>
				</form>
			</div>
			<div class="col-2">
				<button type="button" class="btn btn-primary" onClick="getFav()">Get Favourite List</button>
			</div>
		</div>
	</div>
	<div class="container">
		<div id="addInfo" class="row">
		</div>
	</div>
	
	
	<script src="mainScript.js"></script>
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>