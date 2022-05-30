var x = "John";
var y = "Doe";
console.log(x + "<>" + y);

const demo = [
   {
  name: "ken",
  surname: "bruce",
  email: "kennyb@gmail.com",
},
];
delete demo.email;

var twenty2 = [1,2,3,4,5,6,7,8,9,10];
for(var i=0; i< twenty2.length; i++){
  console.log(twenty2[i]);
};

var random100 = [];
for(var i=0; i< 100; i++){
  random100.push(Math.floor((Math.random()*100)+1));
};
console.log(random100);

function maxAndMin() {
  var max = Math.max(...random100);
  var min = Math.min(...random100);
  console.log("max = " + max);
  console.log("min = " + min);
};

var arr01 = [];
var arr02 = [];
var arrays = [arr01,arr02];
for(var i=0; i< 10; i++){
  arr01.push(Math.floor((Math.random()*10)+1));
};
for(var i=0; i< 10; i++){
  arr02.push(Math.floor((Math.random()*10)+1));
};
console.log(arrays);


function longest(arr1,arr2) {
  var long1 = arr1.length;
  var long2 = arr2.length;
  if(long1 > long2){
    console.log(arr1);
  } else {
    console.log(arr2);
  }
};

function highSum(num1,num2) {
  var sum1 = 0;
  for(var i=0; i<num1.length; i++){
    sum1 = sum1 + num1[i];
  };
  var sum2 = 0;
  for(var i=0; i<num2.length; i++){
    sum2 = sum2 + num2[i];
  };
  if(sum1 > sum2){
    console.log(num1);
  } else{
    console.log(num2);
  }
};


function addUL(){
  var newLi = document.createElement("li");
  var newText = document.createTextNode("texts");
   var news = newLi.appendChild(newText);
  var oldLi = document.querySelector("ul");
  oldLi.appendChild(news);
  console.log("welcome")
};


// DOM EXERCISES


console.log(document.querySelector("#container"));

console.log(document.querySelectorAll("td"));

function heading() {
  document.querySelector("h1").innerHTML = "GoodBye";
};

function redRBG() {
  document.querySelectorAll("a").style.backgroundColor = "red" ;
};

console.log("page loaded");

function addRow() {
  var table = document.querySelector("table");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 =  row.insertCell();
  var cell3 =  row.insertCell();
  var cell4 =  row.insertCell();
  var cell5 = row.insertCell();
};

var tds = document.querySelectorAll("td");
var listOfTd = [];
function tdss(){
  for(var i=0; i<tds.length; i++){
   listOfTd.push(tds[i]);
  }
  console.log(listOfTd);
}

function dltUl() {
  var lists = document.getElementById("myList");

  while(lists.hasChildNodes()){
    lists.removeChild(lists.firstChild)
  }
}

// EXTRA EXERCISES


var tdAll = document.querySelectorAll("td");
var sum = 0;
function sumTd(){
  for(var i=0; i<tdAll.length; i++){
    if(typeof(tdAll[i]) === "number"){
      sum = sum + tdAll[i];
    }
  }
  console.log(sum);
};

function classes() {
  document.querySelectorAll("tr").classList.add("test");
};

function hidePics() {
var imgs =  document.querySelectorAll("img")
  for(var i=0; i<imgs.length; i++){
    imgs[i].style.visibility = "hidden"
  }
};

var show = false;
function hideTable() {
  show = !show;
  if(show === false){
    document.querySelector("table").style.visibility = "hidden";
  } else{
    document.querySelector("table").style.visibility = "visible"
  }

console.log(show);
};

function dltLast() {
  var h = document.getElementById("heading");
  var hText = (h.innerHTML);

 var sliced = hText.slice(0, hText.length-1);
 h.innerHTML = sliced

};
document.getElementById("heading").addEventListener("click", dltLast);

function randomTd() {
var tds = document.querySelectorAll("td");
var randomTds = Math.floor(Math.random()* tds.length);
tds[randomTds].remove();

}

function tdColor() {
  document.querySelectorAll("td").style.backgroundColor = red;
};
document.querySelectorAll("td").addEventListener("click", tdColor);

function extraTable() {
  var newTable = document.createElement("table");
var  newRow = newTable.insertRow();
var  newRow1 = newTable.insertRow();
var  newRow2 = newTable.insertRow();
var  newRow3 = newTable.insertRow();
var newCol = newRow.insertCell();
var newcol1 = newRow.insertCell();
var newcol2 = newRow.insertCell();
var newcol3 = newRow1.insertCell();
var newcol4 = newRow1.insertCell();
var newcol5 = newRow1.insertCell();
var newcol6 = newRow2.insertCell();
var newcol7 = newRow2.insertCell();
var newcol8 = newRow2.insertCell();
var newcol9 = newRow3.insertCell();
var newcol01 = newRow3.insertCell();
var newcol11 = newRow3.insertCell();
}
