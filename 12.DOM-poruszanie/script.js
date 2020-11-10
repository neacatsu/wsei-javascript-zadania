//1
console.log(document.getElementById("buz").parentNode.nodeName);
console.log(document.getElementById("baz").previousElementSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentNode.nodeName);
console.log(document.getElementById("foo").children[1]);

//2
function find(x){
  x.addEventListener('click',function(){
     console.log(x.textContent);
  })
}
  var x=document.getElementById('ex2');
  find(x);
//3
var temp=0;
function show(x){
  x.addEventListener('click',function(){
    if(temp==0){
      x.nextElementSibling.style.display="block";
      temp=1;
    }
    else{
      x.nextElementSibling.style.display="none";
       temp=0;
    }
  });
}
var x=document.querySelectorAll('#ex3 button');
x.forEach(x=>{
  show(x);
})
//4

function show(x){
  x.addEventListener('click',function(){
 var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    x.parentElement.style.backgroundColor = '#'+randomColor;
  });
}
var x=document.querySelectorAll('#ex3 button');
x.forEach(x=>{
  show(x);
})

//5


  //6

var x=document.getElementById("ex6").firstElementChild.firstElementChild.firstElementChild;
var y=document.getElementById("ex6").firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
var z=document.getElementById("ex6").parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log(x);
console.log(y);
console.log(z);
  