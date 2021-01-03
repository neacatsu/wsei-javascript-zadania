//1
let a = 1;
let b = 2;

if(a>b) {
  console.log('a jest większa');  
} else {
  console.log('b jest większa');  
}

//2
let q = 16;
let w = 8;
let e = 10;

if ((q > w) && (q > e)) {
    console.log("Liczba q jest największa");
    }
else if ((w > q) && (w > e)) {
    console.log("Liczba w jest największa");
} else {
    console.log("Liczba e jest największa");
}

//3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// 4
let number1= 0
for (let i = 0; i <= 10; i++) {
   number1 += i;
}
console.log(number1);

//5
var n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}

//6

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//7

console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}
//8
//a
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
//b
let star = ' *';

for(let x = 0; x < 5; x++) {
    var result = '';
    for(y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for(z = 0; z <  x + 1; z++) {
        result += star;
    }
    console.log(result);
}
//c
for(var j = 1; j <= 10; j+=2){
    var result = "";
    var wynik1 = (10 - 2*j) / 2;
    var wynik2 = 10 - j/ 2;
    for(var i = 1; i <= wynik2 - 5; i++){
       result+=" ";
    }
  
    for(var i = 1; i <= 10 / 2 - wynik1; i++){
       result+="*";
    }
    console.log(result);
  }

  //d
var x = 5;
var y = 4;

for(var j = 0; j < x*2+1; j++) {
  var result = "";
  if(y == -1) y = 4;
  
  if(j < x){
    for(var i = 0; i < x - y; i++) {
      result+="*";
    }
    for(var i = 0; i < x - (x - y); i++){
      result+=(x-y)+i;
    }
    y--;
  }
  
  else if(j == x){
    for(var i = 0; i < x; i++) result += "-";
  }
  
  if(j > x){
    for(var i = 0; i < x - (x - y) + 1; i++) {
      result += "*";
    }
    for(var i = 1; i <=  x - y - 1; i++){
      result += y + i;
    }
    y--;
  }
  console.log(result);
}

//e

let star = ' *';
for(let x = 0; x < 5; x++) {
    var result = '';
    for(y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for(z = 0; z <  x + 1; z++) {
        result += star;
    }
    console.log(result);
}

for(let x = 0; x < 3; x++){
  var result = "";
  for(let y = 0; y < 5; y++){
    result += " ";
  }
  result += star;
  console.log(result);
}

