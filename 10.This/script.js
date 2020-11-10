//1
const person = {
    name:"Wiktoria",
    surname:"W",
    age:21,
    country:"Polska",
    city:"Krakow",
    showText() {
        return this.name+ " " +this.surname+" "+ this.age+" "+this.country+" "+this.city;
    },
  addAge(){
    this.age++;
  }
}
const person2 = {
    name:"Natlia",
    surname:"W",
    age:31,
    country:"Polska",
    city:"Wroclaw",
    showText() {
        return this.name+ " " +this.surname+" "+ this.age+" "+this.country+" "+this.city;
    },
  addAge(){
    this.age++;
  }
}
console.log(person.showText());
person.addAge();
person.addAge();
console.log(person.showText());

//2
person.food = new Array();
  person.showFood = function() {
    console.log(this.food);
  }
  person.addFood = function(foodName) {
    this.food.push(foodName);
  }
  
  person.addFood("Carbonara");
  person.addFood("Bolognese");

 person.showFood();

 //3
 function Calculator() {
  var number1=0;
  var number2=0;
    
  this.save = function(a,b) {
   number1 = parseInt(a);
    number2 = parseInt(b);
  }
  this.add = function() {
    var result = number1 + number2;
    return console.log(result);
  }
  this.subtraction = function() {
    var result = number1 - number2;
    return console.log(result);
  }
  this.multiplication = function() {
    var result = number1 * number2;
    return console.log(result);
  }
  this.divide = function() {
    if(number2 == 0) {
      return console.log('Nie dzieli sie przez 0');
    }
    var result = number1 / number2;
    return console.log(result);
  }
}

var result1= new Calculator;

result1.save(3,4);
result1.add();
result1.divide();

