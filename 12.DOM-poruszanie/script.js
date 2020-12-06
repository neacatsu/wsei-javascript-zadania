//1
console.log(document.getElementById("buz").parentNode.nodeName);
console.log(document.getElementById("baz").nextSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentElement);
console.log(document.getElementById("foo").children[0]);
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
//zad 4

const buttons = document.querySelectorAll("#ex3 button");
for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;
    })
    
}
var x=document.querySelectorAll('#ex3 button');
x.forEach(x=>{
  show(x);
})

//zad 4

const buttons = document.querySelectorAll("#ex3 button");
for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;
    })
    
}

//5.1

let first = () => {
  zad5Li = divZ5.querySelectorAll("li");
  zad5Li[0].style.background = backgroundColor;
}

//5.2

let last = () => {
  zad5Li = divZ5.querySelectorAll("li");
  zad5Li[zad5Li.length - 1].style.background = backgroundColor;
}

//5.3
let even = () => {
  zad5Li = divZ5.querySelectorAll("li");
  let counter = 1;
  zad5Li.forEach(x => {
      if (counter % 2 == 0) {
          x.style.background = backgroundColor;
      }
      counter++;
  })
}

//5.4
let odd = () => {
  zad5Li = divZ5.querySelectorAll("li");
  let counter = 1;
  zad5Li.forEach(x => {
      if (counter % 2 != 0) {
          x.style.background = backgroundColor;
      }
      counter++;
  })
}

//5.5

let all = () => {
  zad5ul = divZ5.querySelector("ul");

  zad5ul.style.background = backgroundColor;

}
let divZ5 = document.getElementById("ex5");
var backgroundColor;

// event
divZ5.addEventListener("mouseover", (x) => {
  if (x.target.tagName == "DIV" && x.target.style.length > 0) {
      backgroundColor = x.target.style.backgroundColor;

      // to podmienić;
      all();
  }
})

  //6
  const ex6 = document.querySelector("#ex6");
  const thirdChild = ex6.children[0].children[0].children[0];
  console.log(thirdChild);
  const comb2 = ex6.children[0].parentNode.children[0].nextSibling.parentNode;
  console.log(comb2);
  const comb3 = ex6.parentNode.children[0].parentNode.children[1].children[0].children[0].children[0];
  console.log(comb3);
  