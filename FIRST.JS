//loops

let student = {
    name:"Mitesh",
    course:"BE",
    Branch:"IT",

}

for(let k in student){
    console.log("keys:"+k);


}
let arr =[1,2,3,4]
let sqr = []
function func(value){
    sqr.push(value*value);

}
arr.forEach(func)
for(let v of sqr){
    console.log(v);
}

let dept =["IT","comps","AIDS"]; 

for(let i=0;i<dept.length;i++)
{
    console.log(dept[i])
}

let j = 1;
while(j<5){
    console.log[j];
j++;
}

//conditional statement
let time = 12
let greeting = ""

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting)




  let colors =["red","blue","green","yellow","purple"];

  const changecolor = () => {
    let color = colors.shift();
    document.body.style.backgroundColor=color;
    colors.push(color)

  }
  setInterval(changecolor,5000);