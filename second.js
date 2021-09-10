var arr = [0,1,2,3,4,5,6,7,8]
var player='X'
var storage_player = 0;
if (typeof(Storage) === "undefined") {
  if(alert("Please use another browser or upgrade it!!")){}
  	else{
  		window.location.href ="www.selectPlayer.html"
  	}

} else {
  storage_player = 1;
  if(localStorage.getItem("p")==="two"){
  	storage_player = 2
  }
}

if(storage_player === 2 ){
	$(document).ready(function(){
	$("span").text("Two Player");
	$("div[id]").on("click",function(){
		$(this).text(player)
		next_player();
		$("aside").text(player+" Turn")
		var check_if_gameover = require('./index.js')
		if(check_if_gameover() != ' ')
			if(alert(check_if_gameover())){}
				else{
					window.location.href = "index.html";
				}
		else{
			var check_winner = require("./winner.js")
			var a=(check_winner($(this)))
			if(isNaN(a)){
				if(alert(a)){}
				else{
					window.location.href = "index.html";
				}
				
			}
		}
})

});

}
if(storage_player === 1) {

	$(document).ready(function(){
		var level="Easy"
		$("span").text("One Player");
		$("span").append(`<br>Level:${level}<br>`);
		$("div[id]").on("click",function(){
		$(this).text(player)
		next_player();
		var winner_c = require("./winner.js")
		var ans = winner_c($(this))
		if(isNaN(ans)){
			if(alert(ans)){}
			else{
					window.location.href = "index.html";
			}
				
		}
		else{
			const index = arr.indexOf(ans);
			console.log(index)
	if (index > -1) {
  		arr.splice(index, 1);
  	}
		}
		var check_if_gameover = require('./index.js')
		if(check_if_gameover() != ' ')
			if(alert(check_if_gameover())) {}
				else{
					window.location.href = "index.html";
				}
		
		var com_turn = require("./com.js")
		com_turn(player,arr)
		next_player();
		
		});
	});
}

function next_player(){
	if (player=='X')
			player='O';
	else
		player="X";
}

