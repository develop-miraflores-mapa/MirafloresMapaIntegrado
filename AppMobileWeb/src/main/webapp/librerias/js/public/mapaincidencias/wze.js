//$(document).ready(function(){
//	
//	$.ajax({
//	    url: "http://localhost:8080/mobileApps/cierre-calles/waze-service",
//	    dataType: "json",
//	    success: function( response ) {
//	        console.log( response ); 
//	        
//	        var contador = 0;
//			for (var i = 0; i < response.alerts.length; i++) {
//				setTimeout(function () {
//					addMarker(null,contador);
//					contador++;
//				}, i * 200);
//			}
//	        
//	    }
//	});
//
//});
//
//
//function addMarker(options,ite) {
//	iterator=ite;
//	var image = puntos_sedes[iterator].icon;
//	if (options) {
//		iterator = options.position;
//	}
//	
//	var infowindow = new google.maps.InfoWindow({
//		index: iterator,
//		content: puntos_sedes[iterator].html + '<img id="close-info-window-x-' + iterator + '" src="/mobileApps/images/ico-salir.png" style="position:absolute;top:0px;right:0px;margin:0px 0px 0px 0px ;z-index:999999;" />'
//	});
//
//	//close-info-window-x
//
//	var marker = new google.maps.Marker({
//		position: puntos_sedes[iterator].punto,
//		map: map,
//		draggable: false,
//		animation: google.maps.Animation.DROP,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//		icon: image
//	});
//	markers.push(marker);
//
//	google.maps.event.addListener(marker, 'click', function () {
//
//		google.maps.event.addListener(infowindow, 'domready', function () {
//			$('#close-info-window-x-' + this.index).click(function () {
//				infowindow.close();
//			});
//		});
//
//		infowindow.open(map, marker);
//	});
//
//	iterator++;
//
//}