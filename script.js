var chess = ["black"];
var i = 0;
while (i < 8) {
  if (chess[i] == "black") {
    chess.push("white");
    chess[i] = new Array("black");
  } else {
    chess.push("black");
    chess[i] = new Array("white");
  }

  for (let j = 0; j < 7; j++) {
    if (chess[i][j] == "black") {
      chess[i].push("white");
    } else {
      chess[i].push("black");
    }
  }
  i++;
}
chess.splice(8, 1);
console.log(chess);

//    using 3 while loops version:
// var chess = [];
// var i = 0;
// var x = 0;
// var j = 0;
// while (i < 4) {
//   var j = 0;
//   chess.push("black");
//   chess[x] = new Array(0);
//   while (j < 4) {
//     chess[x].push("white");
//     chess[x].push("black");
//     j++;
//   }
//   x++;
//   j = 0;
//   chess.push("white");
//   chess[x] = new Array(0);
//   while (j < 4) {
//     chess[x].push("black");
//     chess[x].push("white");
//     j++;
//   }

//   x++;
//   i++;
// }
// console.log(chess);
