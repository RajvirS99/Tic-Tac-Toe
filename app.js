// Main script to run the game

let game = {
	clicked: false,
	circle: "O",
	cross: "X",
	circleArr: [],
	crossArr: [],
	winnerArr: [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
	]
}

function getdata(data, which_game, game_player){
	let box_data = data.getAttribute('data-box');
	if (!game.clicked) {
		data.innerHTML = `<p style='25px;'>${game.cross}</p>`;
		// console.log("Cross Turn");
		game.crossArr.push(box_data);
		// console.log(game.crossArr);
	}
	else if (game.clicked) {
		data.innerHTML = `<p style='25px;'>${game.circle}</p>`;
		// console.log("Cirlce Turn");
		game.circleArr.push(box_data);
		// console.log(game.circleArr);
	}

	data.removeAttribute("onclick");
	check_winner(which_game, game_player);
}

function next_move(data){

	// if clicked is false then player will be cross

	if (!game.clicked) {
		
		
		// console.log("Cross Turn");
		// console.log(game.clicked);
		getdata(data, game.crossArr, game.cross);
		game.clicked = !game.clicked;
		
	}

	// if clicked is true then player will be circle
	else if (game.clicked) {
		
		
				// console.log("Circle Turn");
		// console.log(game.clicked);
		getdata(data, game.circleArr, game.circle);
		game.clicked = !game.clicked;


	}
}

function check_winner(string_arr, player){
	// console.log("Winner function Running");
	let intArr = string_arr.map(val => parseInt(val, 10)).sort();
	console.log(intArr);
	for (var i = 0; i < game.winnerArr.length; i++) {
		if (
      	intArr.includes(game.winnerArr[i][0]) &&
      	intArr.includes(game.winnerArr[i][1]) &&
      	intArr.includes(game.winnerArr[i][2])
    	){
			document.getElementById('game_grid').classList.add("disable");
			alert(`${player} Wins`);
			location.reload();
    	}
	}
	if (game.crossArr.length + game.circleArr.length == 9) {
    alert(`Game Draw`);
    location.reload();
  }
}