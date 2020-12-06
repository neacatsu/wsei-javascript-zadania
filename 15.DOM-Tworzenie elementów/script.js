var root=document.querySelector('#root');
//1
let x= document.createElement('div');
x.innerHTML="To jest nowy element";
root.appendChild(x);
//2
var ul =document.createElement('ul');
var li1=document.createElement('li');
li1.innerHTML="jabłko";
var li2=document.createElement('li');
li2.innerHTML="gruszka";
var li3=document.createElement('li');
li3.innerHTML="melon";
var li4=document.createElement('li');
li4.innerHTML="mandarynka";
var li5=document.createElement('li');
li5.innerHTML="banan";
var li6=document.createElement('li');
li6.innerHTML="winogrono";

root.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

//3
ul.addEventListener('click', function(){
    var ulFind=document.querySelector('ul');
    let ulArray = [...ulFind.children];
    for(var i=0;i<ulArray.length;i++){
      if(i%2!=0){
        ulArray[i].remove();
      }
    }
  });


//4
var root=document.querySelector('#root');
var button=document.createElement("button");
button.innerHTML="delete";
root.appendChild(button);
button.addEventListener('click', function(){
  button.remove();
});

//5
var root=document.querySelector('#root');
var random= Math.floor(Math.random()*10);

for(var number=1; number<=random; number++){
  var div= document.createElement("div");
  div.innerHTML="to jest div numer "+number;
  root.appendChild(div);
}

//6
var root=document.querySelector('#root');

var div1=document.createElement('div');
div1.innerHTML="to jest div";

var div2=document.createElement('div');
div2.innerHTML="to jest div";

var div3=document.createElement('div');
div3.innerHTML="to jest div";

var span1=document.createElement('span');
span1.innerHTML="to jest span";

var span2=document.createElement('span');
span2.innerHTML="to jest span";

root.appendChild(div1);
root.appendChild(span1);
root.appendChild(div2);
div2.appendChild(div3);
root.appendChild(span2);