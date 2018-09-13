
		$(document).ready(function()
		{
			$(".slider").each(function ()
			{
				var img = $(this);
				$(img).append("<div class='nav'></div>");

				$(img).find("li").each(function (){
					$(img).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
					$(this).addClass("slider"+$(this).index());
				});

				$(img).find("span").first().addClass("on");
			});
	
		});

	function sliderJS (img, sl){
		var ul = $(sl).find("ul");
		var bl = $(sl).find("li.slider"+img);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-"+step*img}, 500);
		
	}

	$(document).on("click", ".slider .nav span", function() 
	{
		var sl = $(this).closest(".slider");
		$(sl).find("span").removeClass("on");
		$(this).addClass("on");
		var img = $(this).attr("rel");
		sliderJS(img, sl);
		return false;
	});

	 /*google map script */ 
	 
      var map;
      function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.980197, lng: 36.305481},
          zoom: 17,
	          styles:[
	    {
	        "featureType": "water",
	        "stylers": [
	            {
	                "saturation": 43
	            },
	            {
	                "lightness": -11
	            },
	            {
	                "hue": "#0088ff"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "hue": "#ff0000"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 99
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#808080"
	            },
	            {
	                "lightness": 54
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.man_made",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ece2d9"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ccdca1"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#767676"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#b8cb93"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.business",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    }
		]
	        });
	       
	          var image = "images/star_map.png";
	        var mozaikaMarker = new google.maps.Marker({
	          position: {lat: 49.979795, lng: 36.308814},
	          map: map,
	          icon: image
	        });
	      };
	   











