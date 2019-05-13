import d3 from "d3";
window.d3 = d3;

const functionPlot = require("function-plot");

const root = document.querySelector("#root");

functionPlot({
  target: root,
  yAxis: { domain: [-1, 9] },
  tip: {
    renderer: function() {}
  },
  grid: true,
  data: [
    {
      fn: "x^2",
      derivative: {
        fn: "2 * x",
        updateOnMouseMove: true
      }
    }
  ]
});



var a = "a";
var b = "b";
var c = "c";
var zero = "zero";
var i = "";


//Main function
function QuadricalSolver(i, t, h, z) {
  var i = getValue(i);
  var t = getValue(t);
  if (isNaN(i) || isNaN(t)) {
    document.getElementById("instr").innerHTML = "At least you have to enter 'a' and 'b'";//запилить очистку!!!!
  } else {
    var h=getValue(h);
    var z=getValue(z);

    var C = getC(checkValue(h), checkValue(z));

    var D = getDiscriminant(i, t, C);

    //var x=getX(a,b,D); // this variable is Array!
    //x.forEach(arr);
    //document.getElementById("out").innerHTML = x + " ";

    var x1 = (-1 * t + Math.sqrt(D)) / (2 * i);// put this block in personal method
    var x2 = (-1 * t - Math.sqrt(D)) / (2 * i);
    if (x1 != x2) {
      x1.toString();
      x2.toString();
      document.getElementById("out").innerHTML = x1 + " " + x2;
    } else {
      x1.toString();
      document.getElementById("out").innerHTML = x1;
    }
  }
}


//function for getting value from any part of HTML
function getValue(o) {
  o = document.getElementById(o).value;
  let res = parseInt(o);
  return res;
}

function checkValue(i){ //checking the value for NaN
  if (isNaN(i)){
    i=0;
  }else{
    i;
  }
  return i;
}

///Doesnt work like I want. Cant stream 2 variable to 1.
function arr(value) {
  i.toString();
  i = i + value + " ";
  //for(let i=0;i<arr.length;i++){
  // document.getElementById("out").innerHTML = i+" ";
  //}
}


function getDiscriminant(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D >= 0) {
    return D;
  } else {
    document.getElementById("instr").innerHTML = "Discriminant less than zero. No physical roots.";
    //make a die
  }

}

//Doesn't work like I want. 'return' send 2 value just in array,after that i don't wont to figure out how to output values from array.
function getX(a, b, D) {
  var x1 = (-b + Math.sqrt(D)) / (2 * a);
  var x2 = (-b - Math.sqrt(D)) / (2 * a);
  if (x1 != x2) {
    return [x1, x2];
  } else {
    return [x1];
  }
}


// function which calculate 'c' if in raw equation after '=' now 0, or in case
function getC(o, p) {
  if (p != 0 && p != "zero") {// типы данных,не работает при не введенныъ данных
    if (o != "c") {// if 'c' didn't entered,make 'c' = p*(-1)
      p *= -1;
      var c = o + p;
    } else {
      var c = -1 * p;
    }
  } else {           // this case for situation when after '=' nothing or '0'
    if (o != "c") {
      var c = o;
    } else {
      var c = 0;
    }
  }
  return c;
}

// console.log(QuadricalSolver(a,b,c,zero))
// console.log(getC(c,zero));

function CalcFunc() {

  QuadricalSolver(a, b, c, zero);
}



