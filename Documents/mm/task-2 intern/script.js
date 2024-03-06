// console.log("Hello world!");
// console.log(2*"Hello world!");
// console.log("Hello world!"*2);
// console.log("Hello world!"+2);
// console.log(""2);
// var a=10;
// if(a>0){
//     console.log("positive");

// }
// else{
//     console.log("negative");
// }
// function add1(a,b){
//     return a+b;
// }
// console.log(add1(2,3))
// var a=function(a,b){
//     return a+b;
// }
// console.log(a(7,3))
// var a=(a,b)=>{
//     return a+b;
// }
// console.log(a(17,3))
// function ODD(a){
//     if(a%2  ==0){
//         console.log("even")
//         return 1
//     }
//     else{
//         console.log("odd")
//         return -1
//     }

// }
// console.log(ODD(10))
//  var a=function (a){
//     if(a%2  ==0){
//         console.log("even")
//         return 1
//     }
//     else{
//         console.log("odd")
//         return -1
//     }

// }
// console.log(a(9))

// var a = (a) => {
//     return (a % 2 == 0) ? 1 : -1;
// }

// console.log(a(10)); 

// var odd = num => num % 2 == 0 ? "Even" : "Odd";
// console.log(odd(9)); 


// var prn = num => num > 0 ? "Positive" : "Negative";
// console.log(prn(-1));
// var x=10;
// let y =20;
// const z=20;
// //re-assign 
// y=15;
// console.log(x);
// //re-declare
// var
//  x=40;
// console.log(x);
// var s="hi da navthik p!@#$#@"
// function hi(){
//     console.log("inside",s);
// }
// hi();
// console.log(s)
// function h(){
//      var str=10
//     console.log(str);
// }
// h()
// var arr=[10,20,30,"hi da navthik p!@#$"]
// console.log(arr[3])
// console.log(arr.length)
// console.log(arr);

// arr.push(40);
// console.log(arr);
// arr.unshift(4);
// console.log(arr);
// var num=arr.pop();
// console.log(num);
// var s=arr.shift();
// console.log(s);
// console.log(arr);
// var ar=[1,2,3];

// var newarr=[];
// function a(ar){
// for(var element of ar){
//     newarr.push(element*2);
// }
// console.log(newarr);
// }
// a(ar);

// var newarr1=[];
// function a1(ar){
//     for(var element of ar){
//         if(element%2==0)
//         newarr1.push("Even");
//         else{
//             newarr1.push("ODd");

//         }
 
//     }
//     console.log(newarr1);
//     }
//     a1(ar);
// ar1=[-1,-2,3,4]
// var newarr2=[];
//     function a2(ar){
//         for(var element of ar){
//             if(element>0)
//             newarr2.push("Posivite");
//             else{
//                 newarr2.push("negative");
    
//             }
     
//         }
//         console.log(newarr2);
//         }
// a2(ar1);
// var myArray=[0,1,2,3,4,5,6,7,8,9];
// var splice=myArray.splice(2,6);
// console.log(splice);
// console.log(myArray)

// function fun1(a){
//     console.log("Executing h-o function");
//     a();
// }
// function fun2(){
//     console.log("Function fun2() executed");
// }
// fun1(fun2);
// function multiply(factor) {
//     return function(number) {
//         return number * factor;
//     }
// }

// var multiplyby2 = multiply(2); 
// console.log(multiplyby2(5));  

// var multiplyby3 = multiply(3);

// console.log(multiplyby3(5));  

// console.log(multiply(4)(5));   

// arr.forEach((element)=>{
//     console.log(element);
// })
// var newArr=[];
// arr.forEach((element)=>{
//     newArr.push(element*2);
// })
// console.log(newArr)
// var arr=[1,2,3,4,5];
// var newArr = arr.map((el) => el % 2 == 0 ? el * 1 : el * 2);

// console.log(newArr);
// var arr=[1,2,3,4,5];
// var newArr=arr.filter((el)=>{ el % 2 == 0});
// console.log(newArr);


// const arr = [0, null, undefined, 1, 2, "", 3, false, true, "A", -1];
// var newarr=arr.filter((el)=>el);
// console.log(newarr);
// const  arr1=[1,12,3,16,2,5];
// // arr1.sort();
// //console.log(arr1);
// arr1.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr1);

// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   [12, 5, 8, 130, 44].every(isBigEnough); 
//   [12, 54, 18, 130, 44].every(isBigEnough); 
//   const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); 
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); 
// const array = [2, 9, 9];


// console.log(array.indexOf(2)); 

// console.log(array.indexOf(7)); 


// console.log(array.indexOf(9, 2)); 


// console.log(array.indexOf(2, -1)); 


// console.log(array.indexOf(2, -3));
// const ar1 = [1, 2, 3, 4, 5];

// console.log(array.includes(2)); 
// console.log(array.includes(7));
// const ar = ['apple', 'banana', 'orange'];

// console.log(array.join()); 
// console.log(array.join(' - ')); 
// console.log(array.join('')); 
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.reverse());
// const array2= ['apple', 'banana', 'orange', 'kiwi', 'melon'];

// console.log(array2.slice(1, 3)); 
// console.log(array2.slice(2)); 
// console.log(array2.slice(-2)); 
// console.log(array2.slice(1, -1)); 

// const mixedArray = [1, 'apple', 3.14, true, 42];

// const newArray = mixedArray.map(item => {
//     if (typeof item === 'number') {
//         return item.toString();
//     }
//     return item;
// });

// console.log(newArray); 
// var obj={
//     firstName: 'John',
//     lastName: "doe",
//     age:25,
//     address:{
//         city:"San Francisco",
//         state:"CA"
//     }

// }
// console.log(obj["address"]["state"]);
// console.log(obj.firstName,obj.lastName)
// console.log(obj["firstName"])
// var keyToFetch="age";
// console.log(obj[keyToFetch]);
// const obj={
//     firstname:"Tony",
//     lastname:"Stark",
//     age:35,
//     marks:{
//         physics:90,
//         chemistry:85,
//         maths:95,
//     },
// };
// const sub="maths";
// console.log(obj.firstname+" "+obj.lastname+"'s"+" "+sub.charAt(0).toUpperCase()+sub.slice(1)+ " "+" marks "+" are "+obj.marks[sub])
// console.log(`${obj.firstname} ${obj.lastname} is ${obj.age} years old`)
// console.log(`${obj.firstname} ${obj.lastname}'s ${sub.charAt(0).toUpperCase()+sub.slice(1)} marks are ${obj.marks[sub]}`)
// const student=[
//     {
//         name:"John",
//         age:25,
//         grade:9,
//         height:6.1,
//     },
//     {
//         name:"Tony",
//         age:23,
//         grade:8,
//         height:6,
//     },
//     {
//         name:"Smith",
//         age:30,grade:7,
//         height:5,
//     }
// ]
// console.log(student.map(student => student.name));
// console.log(student.map(student => student.age));

// student.forEach(student => {
//     if (student.grade > 8) {
//         console.log(`${student.name} has a grade greater than 8`);
//     } else {
//         console.log(`${student.name} does not have a grade greater than 8.`);
//     }
// });
// Assuming student is an array of student objects
// const filter = student.filter(student => student.grade > 7);
// const names = filter.map(student => student.name);
// console.log(names);
// const filter1 = student.filter(student => student.grade > 7).map(student => student.name);
// console.log(filter1);
// const height=student.filter(student => student.height);
// // console.log(height.sort((a,b) => a.height - b.height));
// height1=height.sort((a,b) => b.height-a.height);
// console.log(height1.name,",")
// console.log(height1[0].name)
// console.log(height1[2].name)
// age1=student.map(student=>student.age);
// console.log(age1);
// var count=0;

// student.forEach(student=>{
//     if(student.age1>25){
//         count++;

//     }
// })
// console.log(count==)

// const greater25 = student.map(student => student.age).every(age => age > 20);
// console.log(greater25);
// const great = student.map(student => student.age).some(age => age > 20);
// console.log(great);

// const sortedHeight = height.sort((a, b) => b.height - a.height);
// sortedHeight.forEach(person => {
//     console.log(person.name+",");
// });
// const arr=[1,2,3]
// const arr1=[...arr]
// arr.push(4);
// console.log(arr,arr1)
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr=[10,20,...arr1,30,40,...arr2]
// console.log(arr1,arr2,arr);
// const obj1={
//     name:"Tony",
//     age:25,
// };
// const obj={
//     name:"Tony",
//     age:25,
// };
// const obj2={...obj1, ...obj};
// obj1.age=20;
// console.log(obj1,obj2)
// const obj1 = {
//     name : "Tony",
//     age : 35,
//     age : 40,
// }
// console.log(obj1)

// //ARRAY DESTRUCTURING
// const[a,b,...rest]=[1,2,3,4,5];
// console.log(a,b,rest)
//OBJECT DESTRUCTURING
// const obj={
//     firstname:"Tom",
//     lastname:"Stark",age:30,
// };
// const{firstname:fname,lastname,age}=obj;
// console.log(age)

// const obj={
//     firstname:"Tony",
//     lastname:"Stark",
//     age:35,
//     marks:{
//         physics:90,
//         chemistry:85,
//         maths:95,
//     },
// };
// const{
//     marks:{physics},
// }=obj;
// console.log(obj);



    //IMPORTANT

// function handleClick(){
//     console.log("button clicked");
//     document.getElementById("container").innerHTML="Button Clicked";
// }
// function handleIncrement(){
//     const value=1*document.getElementById("counter").innerText;
//     document.getElementById("counter").innerText=value+1;
// }

// function handleDecrement(){
//     const value=1*document.getElementById("counter").innerText;
//     document.getElementById("counter").innerText=value-1;
// }
//  console.log("Hello")
// console.log(2 * "2a")
// console.log(2 * "2")
// console.log(2+"2")

// Count the words in a sentence
// var a="The quick brown fox";
// var b=a.split(" ");
// console.log(b.length);

// // Capitalize the First Letter of Each Word
// var a = "hello world!";
// var b = a.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(b);

// // Reverse wors in asentence
// var a= "The quick brown fox";
// console.log(a.split(" ").reverse().join(" "));

// // Reverse the whole sentence
// var a="Hello world";
// console.log(a.split("").reverse().join(""));

// // Find the longest word in the sentence
// var a = "The quick brown fox is jumping over the lazy dog";
// var b = a.split(" ").sort((a, b) => b.length - a.length);
// console.log(b[0]);

// setTimeout
// console.log("START")
// setTimeout(() => {
//     console.log("Hello")
// },0)
// console.log("END")

 // Set up an interval and get the interval ID
//  var b = 1;

// var a = setInterval(function() {
//     console.log(b++);
// }, 1000);

// setTimeout(function() {
//     clearInterval(a);
// }, 5000);

// var a 
// var p1 = () =>
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(a)
// },1000)
// })

// var p2 = () =>
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(a)
//     },2000)
// })

// var p3 = () =>
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(a)
//     },3000)
// })
// console.log("START")

//  p1()
//  .then((res) =>{
//      console.log("P1 Success :", res)
//  })
//  .catch((err) => {
//      console.log("P1 error : ", err)
//  })

// p2()
// .then((res) => {
//     console.log("P2 Success :", res)
// })
// .catch((err) => {
//     console.log("P2 error : ", err)
// }) 

// console.log("END")

// p1()
// .then((res) => {
//     console.log("P1 success",res)
//     return p2()
// })
// .catch((err) => {
//     console.log("P1 error")
//     return p2()
// })
// .then((res) => {
//     console.log("P2 success", res)
//     return p3()
// })
// .then((res) => {
//     console.log("P3 success", res)
// })
// .catch((err) => {
//     console.log()
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((res) => res.join())
//       .then((json) => console.log(json))
//       .catch((err) => console.log("Error :", err))
     
// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))

// Promise.resolve('Success!')
//   .then(data => {
//     data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })

//   async function fetchData(){
//     console.log("Start")
//     try {
//         const res = await res()
//         console.log("res success", res)
//         const res2 = await json()
//         console.log("json success", json)

//     }catch (err) {
//         console.log("ERROR :", err)
//     }
//     console.log("END")
// }
// fetchData()

// var interval;
//  let a= 0;
//  function handlestart() {
//      interval=setInterval(() => {
//         a++;
//          document.getElementById("timer").innerText =a;
//      },1000);
//     }
//       function handlestop() {
//        clearInterval(interval); 
//        }
//        function increment(){
//         const value=parseInt(document.getElementById("counter").innerText);
//        document.getElementById("counter").innerText=value+1;
//    }
//    function Decrement(){
      
//        var value=1 * document.getElementById("counter").innerText;
//        document.getElementById("counter").innerText=value-1;
  
//    }
//    var cart=[1,2,3,4,5];   
// function createOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             cart.length ? resolve(10) : reject("Cart is empty");
//         }, 2000);
//     });
// }

// function proceedtopayment(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             orderId > 5 ? resolve("Payment success") : reject("Payment failed");
//         }, 3000);
//     });
// }

// function updatewalletbalance() {
//     return new Promise((resolve, reject) => {
//         console.log("Wallet balance updated successfully");
//         resolve();
//     });
// }

// function displayerror() {
//     console.log("Wallet not updated, Payment failed");
// }

// function returntoHome() {
//     setTimeout(() => {
//     console.log("Returned to Homepage");
// },4000);
// }

// createOrder().then((orderId) => {
//     return proceedtopayment(orderId);
// }).then((res) => {
//     console.log(res);
//     return updatewalletbalance();
// }).then(() => {
//     returntoHome(); 
// }).catch((err) => {
//     console.log(err);
//     displayerror(); 
//     returntoHome();
// })
