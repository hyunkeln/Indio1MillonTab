(function ($) {

	/*$('#etiquetasCover .calltoaction').bind('click', function() {
	  	$(this).slideUp('slow',function(){*/
			
	/*	});	
	});*/
 
 	
 	etiquetas ={
 		ytplayer: null,
 		vid : '_X8ghsDG_l8',
 		add_player : function()
 		{
 			 $('#video .calltoaction').unbind('click');
 			 $('#video .player').append('<div id="ytapiplayer">Necesitas Flash Player para ver este video</div>').show();
 			var params = { allowScriptAccess: "always" , wmode:"transparent",allowfullscreen:"true"};
	    	var atts = { id: "myytplayer" };
    		swfobject.embedSWF("http://www.youtube.com/v/"+etiquetas.vid+"?enablejsapi=1&playerapiid=ytplayer&version=3", "ytapiplayer", "566", "341", "8", null, null, params, atts);	 
 		},
 		 onytplayerStateChange :function (newState) 
 		 {
   				switch(newState)
				{
				case 1:

				  break;
				case 2:

				 break;
				 case 0:
				 	etiquetas.end_video();
				 break;
				
				}
		},
		end_video : function()
		{
			  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
				
		}
 	} 
 	etiquetas.add_player();		
 	
}(jQuery));


function onYouTubePlayerReady(playerId) {
      	etiquetas.ytplayer = document.getElementById("myytplayer");
      	etiquetas.ytplayer.addEventListener("onStateChange", "etiquetas.onytplayerStateChange");
       	etiquetas.ytplayer.playVideo();
    }