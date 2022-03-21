//array destructuring
let arr = ["amazon","google"];
//old ways
let c1=arr[0];
let c2=arr[1];

//with destructuring
let [com1,com2] = arr; //the value are sequencially assigned
console.log(com1);
console.log(com2);

//object destructuring
let options ={
    title:"das",
    name:"amrit",
    age:27
}

let {title,namee,age} = options;
console.log(title+' '+namee+' '+age);