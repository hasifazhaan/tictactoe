
var box

module.exports = (player,arr)=>{

	var x = Math.floor(Math.random() * arr.length);
	var a = arr[x]
	const index = arr.indexOf(a);
	if (index > -1) {
  		arr.splice(index, 1);
  	}

if(a===0){
	$('div[id=one]').text(player)
	box=$('div[id=one]')

}
if(a===1){
	$('div[id=two]').text(player)
	box=$('div[id=two]')
}
if(a===2){
	$('div[id=three]').text(player)
	box=$('div[id=three]')
}
if(a===3){
	$('div[id=four]').text(player)
	box=$('div[id=four]')
}
if(a===4){
	$('div[id=five]').text(player)
	box=$('div[id=five]')
}
if(a===5){
	$('div[id=six]').text(player)
	box=$('div[id=six]')
}
if(a===6){
	$('div[id=seven]').text(player)
	box=$('div[id=seven]')
}
if(a===7){
	$('div[id=eight]').text(player)
	box=$('div[id=eight]')
}
if(a===8){
	$('div[id=nine]').text(player)
	box=$('div[id=nine]')
}

var check_if_gameover = require('./index.js')
		if(check_if_gameover() != ' ')
			if(alert(check_if_gameover())) {}
				else{
					window.location.href = "index.html";
				}

var check_winner = require("./winner.js")
		var ans = check_winner(box)
		if(isNaN(ans)){
			if(alert(ans)){}
			else{
					window.location.href = "index.html";
			}
				
		}
return ''

}