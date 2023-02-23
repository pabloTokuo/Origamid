// ARRAY
var videoGames = ["Switch", "PS4", "XBOX"];

console.log(videoGames[0]);
console.log(videoGames[2]);

console.log(videoGames.pop()); // excluir
videoGames.push("3DS"); // adicionar

// FOR LOOP

for(var i=0; i<videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === "PS4") {
    break;
  }
}

// WHILE

var i=0;

while(i < 10) {
  console.log(i);
  i++;
}

// FOR EACH
var frutas = ["BANANA", "MACA", "PERA", "ABACAXI", "UVA"];
 
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array);
})
