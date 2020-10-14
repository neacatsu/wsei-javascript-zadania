//1
const car = {
    name  : "Toyota",
    speed : 100,
}
console.log(car.name);
console.log(car.speed);

//2
const car = {
    name  : "Toyota",
    speed : 100,
  changeName(newName){
    name=newName;
    return name;
  }
}
console.log(car.name);
console.log(car.speed);
console.log(car.changeName("Kia"));

//3

const array = [1, 2, 3,4,5,6];

const number = {
    array  : array,
    sum : 0,
    sumNumber(newArray){
      for(var i=0;i<newArray.length;i++){
        this.sum+=newArray[i];
      }
      return this.sum;
  }
}
console.log(number.sumNumber(array));

//4

const car = {
    name  : "BMW",
    age: 12,
    speed : 100,
  show(){
    return "Name: "+ this.name + " Age: " + this.age + " Speed: " + this.speed;
  }
}
console.log(car.show());

//5

const car = {
    name  : "BMW",
    age: 12,
    speed : 100,
  show(){
    return "Name: "+ this.name + ", Age: " + this.age + ", Speed: " + this.speed;
  },
  owner: {
    name:"Wiktoria",
    age:"21",
    showOwner(){
  return "Name owner "+this.name+", Age owner: "+this.age; 
}
  }
  
}
console.log(car.show());
console.log(car.owner.showOwner());

//6
const car = {
    name  : "BMW",
    age: 12,
    speed : 100,
  show(){
    return "Name: "+ this.name + ", Age: " + this.age + ", Speed: " + this.speed;
  },
  owner: {
    name:"Wiktoria",
    age:"21",
    showOwner(){
  return "Name owner "+this.name+", Age owner: "+this.age; 
}
  }
  
}
car.model="BMW 5";

car.text= function (){
  return "Hello";
}
console.log(car.show());
console.log(car.owner.showOwner());
console.log(car.model);
console.log(car.text());