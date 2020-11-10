//1
var x=document.querySelectorAll('.list');
document.write(x);
//2
function find(x){
    var result = document.querySelectorAll(`${x}`);
      return console.log(result);
  }
  find('li');

//3
var y=document.querySelectorAll('#list');
console.log(y);

//4
function show(x){
    return console.log(x);
}
show(document.querySelectorAll('li'));
show(document.querySelectorAll('ul'));
show(document.querySelectorAll('span'));
show(document.querySelectorAll('div.list span'));
show(document.querySelectorAll('div#spans span'));