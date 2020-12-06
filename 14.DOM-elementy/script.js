//1
var x=document.getElementsByClassName("more-divs");
function y(x){
  var array=[];
  for(var i=0; i<x.length; i++){
    array.push(x[i].tagName);
  }
  return array;
}
console.log(y(x));

//2
var x=document.querySelector('.short-list');
function example2(x) {
//2.1
    console.log(x.innerHTML);
//2.2
    console.log(x.outerHTML);
//2.3
 
}
example2(x);

//3
var x=document.querySelector('#datasetCheck');
var add=0;
var sub=0;
function example3(x){
  var first=parseInt(x.dataset.numberone);
  var second=parseInt(x.dataset.numbertwo);
  var third=parseInt(x.dataset.numberthree);
  add=first+second+third;
  sub=first-second-third;
 console.log(add); 
console.log(sub); 
}
example3(x);
//zmieniłam w html data-number-three na data-numberThree nie wiem czy to był błąd czy było to specjalnie. Jeśli tak to zmienie zadanie
//4
document.querySelector('#spanText').textContent="Jakiś tam dowolny tekst";
//5
document.querySelector('#spanText').classList.add('dowolna');
//6
var text=document.querySelector("#classes");
function x(textClass){
  var stringT="";
  textClass.forEach(i=>{
    console.log(i);
    stringT+=i+" + ";
    
  })
  console.log(stringT);
  text.classList = '';
  console.log( "Usunięto wszystkie klasy");
  console.log(text.classList);
}
x(text.classList);
//7
var x=document.querySelectorAll("#longList li");
function add(x){
  x.forEach(element =>{
    if(!element.hasAttribute('data-text')) {
            element.dataset.text = 'text';
        }
  })
  
}
add(x);
//8
var text="dsfsdfds";
function first(text){
  Object = {
    newClass: text,
  }
  second(Object);
}
function second(){
  var i=Object.NewClass;
  document.querySelector('#myDiv').classList.add(i);
}

//9 
var x= document.querySelector('#numbers');

var random=Math.floor(Math.random()*10);
function add(random){
  if(random%2==0){
    x.classList.add="even";
  }
  else{
    x.classList.add="odd";
  }
}
console.log(x);
