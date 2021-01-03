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
  console.log([...x.classList].join(', '));
 //2.4
  console.log([...x.classList]);
  //2.5
  console.log(x.dataset)
} example2(x);
 

//3
var x = document.querySelector('#datasetCheck');
var array=[x.dataset.numberone, x.dataset.numbertwo, x.dataset.numberThree];

function show(array) {
  var add=0;
  var sub=0;

    array.forEach((e) => {
      add += parseInt(e);
      sub -= parseInt(e);
    })
    console.log(add, sub);
}
show(array);

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

//10
var longList = document.querySelector('#longList');
var li=longList.querySelectorAll('li');

function createArray(longList) {
    let array = [];
    li.forEach(function(element) {
        array.push(element.innerText);
      });
 return array;
}console.log(createArray(longList));

//11
var longList = document.querySelector('#longList').children;

function changeChildren(longList) {
        var arrayChildren = [...longList];

          arrayChildren.forEach(function(element) {
            var rand = Math.round(Math.random() * 10);
            element.dataset.oldValue = element.innerText;
            element.innerText = rand;
        });        
    }
 changeChildren(longList);