$( document ).ready(function() {
			
		getPlayVeryBig();
		
		$("#playbig").click(function(){
			console.log("get綜藝玩很大");
			$("#programtitle").html("綜藝玩很大");
			getPlayVeryBig();
		});
		
		$("#geniusrush").click(function(){
			console.log("get天才衝衝衝");
			$("#programtitle").html("天才衝衝衝");
			getGeniusRushRushRush();
		});
	
		
	});
		