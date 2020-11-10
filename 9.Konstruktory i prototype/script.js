function Person(name, surname,age, country, city){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.country=country;
    this.city=city;
    
    this.show= function(){
      console.log(name+" "+surname+" "+age+" "+country+" "+city);
      
    };
    this.changeAge=function(){
      age+=10;
    }
    this.changeCity=function(){
      city="Warszawa";
    }
    
    
  }
  const person1 = new Person("Wiktoria", "W", 21,"Polska","Kraków");
  const person2 = new Person("Mateusz", "W", 21,"Polska","Alwernia");
  const person3 = new Person("Adam", "K", 20,"Polska","Kraków");
  const person4 = new Person("Wiktoria", "B", 20,"Polska","Łódź");
  const person5 = new Person("Natalia", "M", 25,"Polska","Wrocław");
  const person6 = new Person("Dominik", "S", 19,"Polska","Poznań");
  
  person2.changeCity();
  person3.changeAge();
  
  person1.show();
  person2.show();
  person3.show();

  //2

  function Calculator(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    var result = 0;
    var memory=[];
    this.add = function () {
      result = number1 + number2;
      memory+=" dodawanie";
      console.log(result);
    };
    this.subtraction = function () {
      result = number1 - number2;
      memory+=" odejmowanie";
      console.log(result);
    };
    this.multiplication = function () {
      result = number1 * number2;
      memory+="mnozenie";
      console.log(result);
    };
    this.divide = function () {
      if (number2 == 0) {
        console.log("Nie dzieli sie przez 0");
      } else {
        result = number1 / number2;
        memory+=" dzielenie";
        console.log(result);
      }
    };
    
    this.show = function (){
      console.log(memory);
    }
    
  }
  const calc1 = new Calculator(4, 5);
  const calc2 = new Calculator(6, 8);
  
  calc2.add();
  calc1.multiplication();
  calc2.add();
  calc1.add();
  calc1.show();
  
  //3
  function Calculator(){
 
    var number=0;;
    
  
    this.show= function(){
     var randomNumber=Math.floor(Math.random()*10)+1;
      console.log(randomNumber);
      this.check(randomNumber);
    };
    this.check= function(number){
      if(number>5){
        clearInterval(time);
        console.log("sdfdsf");
      }
    }
    
  }
  const number1=new Calculator();
  var time= setInterval(()=>number1.show(),1000);
 number1.show();
  