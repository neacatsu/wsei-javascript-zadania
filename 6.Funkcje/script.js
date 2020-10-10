//1
function show()
{
  console.log("Udało sie");
}
  show();

  //2
  var data = 35
  function show(parametr)
  {
    console.log(parametr)
  } show(data);

  //3

  var table=[1,2,3,4,5,6];

function show(table)
{
  for(var i=0;i<table.length;i++){
    console.log(table[i]);
  }
}
  show(table);


  //4

  var text="witam";
var number=1;
var time=setInterval("show(text)",1000);
function show(text){
  
  
  if(number<=5){
    console.log(text);
    time;
  }
  else{
    console.log("Koniec");
    clearInterval(time);
  }
  number++;
}
  
  
