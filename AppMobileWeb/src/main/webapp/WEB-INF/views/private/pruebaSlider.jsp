<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Slider - Range with fixed maximum</title>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
 
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 25,
      value: 13,
      slide: function( event, ui ) {
        	
		if(ui.value>12){
			console.log("mayor>ui.value");
			console.log(ui.value);
			
			$( "#amount" ).val(ui.value / 2 );
			
		}else{
			console.log("menor>ui.value");
			console.log(ui.value);
			
			$( "#amount" ).val(ui.value / 2 );
			
		}
		
		
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );
  </script>
</head>
<body>
 
<p>
  <label for="amount">Minimum number of bedrooms:</label>
  <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="slider-range-max"></div>
 
 
</body>
</html>