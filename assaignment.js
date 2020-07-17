// feetomile function wiill start from here

function feetToMile(lengthInfeet) {
  if (lengthInfeet < 0) {
    return "Please, Enter Positive Value!";
  } else {
    return lengthInfeet / 5280;
  }
}
console.log(feetToMile(5280000));
console.log(feetToMile(0));
console.log(feetToMile(-1));

// feeToMile function end from here

// WoodCalculator start here

function woodCalculator(Chair, Table, Bed) {
  var woodForChair = Chair * 1;
  var woodForTable = Table * 3;
  var woodForBed = Bed * 5;

  //If input is less than 0
  if (Chair < 0 || Table < 0 || Bed < 0) {
    return "Bhai! Negetive wood diye furniture Banayte Parum na. Map cay!!";
  } else {
    return woodForChair + woodForTable + woodForBed;
  }
}
console.log(
  "Number of wood needed for 1 set  of furniture packege: ",
  woodCalculator(1, 1, 1)
);
console.log(
  "Number of wood needed for 5 set  of furniture packege: ",
  woodCalculator(5, 5, 5)
);
console.log(
  "Number of wood needed for 10 set  of furniture packege: ",
  woodCalculator(10, 10, 10)
);
console.log(woodCalculator(10, -5, 10));

// WoodCalculator end here

// Brick calculator will start here

function brickCalculator(floorCount) {
  var brickPerFeet = 1000;
  var FloorUpto10 = brickPerFeet * 15;
  var FloorUpto20 = brickPerFeet * 12;
  let FloorAfter20 = brickPerFeet * 10;
  if (floorCount < 0) {
    return "Be Positive!! Please input Positive Value.";
  } else if (floorCount >= 0 && floorCount <= 10) {
    return FloorUpto10 * floorCount;
  } else if (floorCount >= 11 && floorCount <= 20) {
    return FloorUpto10 * 10 + FloorUpto20 * (floorCount - 10);
  } else if (floorCount > 20) {
    return (
      FloorUpto10 * 10 + FloorUpto20 * 10 + FloorAfter20 * (floorCount - 20)
    );
  }
}

console.log(brickCalculator(-1));
console.log("Number of bricks needed for 0 floor :", brickCalculator(0));
console.log("Number of bricks needed for 10 floor :", brickCalculator(10));
console.log("Number of bricks needed for 15 floor :", brickCalculator(15));
console.log("Number of bricks needed for 20 floor :", brickCalculator(20));
console.log("Number of bricks needed for 30 floor :", brickCalculator(30));

// BrickCalculator end here

// TinyFriend function will start here

function tinyFriend(name) {
  var minLength = Math.min.apply(
    Math,
    name.map(function (str) {
      return str.length;
    })
  );
  for (var i = 0; i < name.length; i++) {
    if (minLength == 0) {
      return "Please Enter Valid Name!!";
    } else {
      if (minLength == name[i].length) {
        return name[i];
      }
    }
  }
}
var nameList = ["Karim", "Lajim", "ami", "tumii"];
console.log("Most tiny Friend is : ", tinyFriend(nameList));

var emptylist = ["", "Rahim"];
console.log("invalid output =", tinyFriend(emptylist));

// TinyFriend end here
