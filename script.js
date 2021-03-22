var wrapperEle = document.body.querySelector(".wrapper");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML = list[i].name+" "+list[i].age;
  
  if (list[i].age > 25) {
    ele.style.color = "green";
  }
  wrapperEle.appendChild(ele);
}

var counterEle = document.body.querySelector(".counter");
var numberEle = document.body.querySelector(".number");
var number = 5;
numberEle.innerHTML = number;

function counter(){
  number = number+1;
  numberEle.innerHTML = number;
}

counterEle.addEventListener("click", function(){
  counter();
})