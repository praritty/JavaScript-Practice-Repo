// console.log("JAi shree ram");


// pattern printing

// *****
// *****
// *****
// *****
// *****

// var str="";
// for(var i =1;i<=5;i++){ //row
//     str="";
//    for(var j=1;j<=5;j++){
//     // console.log("i->",i , "j->" ,j);
//     str += "*";
//     // console.log("*");
//    }
//    console.log(str);
// }


// var str="";
// for(var i =1;i<=5;i++){ //row
//     str="";
//    for(var j=1;j<=i;j++){
//     str += "*";
//    }
//    console.log(str);
// }




// var str="";
// for(var i =1;i<=5;i++){ //row
//     str="";
//    for(var j=5;j>=i;j--){
//     str += "*";
//    }
//    console.log(str);
// }


// var n=3; 
// var str="";
// for(var i=1;i<=n;i++){
//       str="";
//      for(var j=1;j<=n;j++){
//         if(j != n+1-i){
//            str += " ";
//         }
//         else{
//             str += "*"
//         }
//      }  
//      console.log(str,i);
// }


// functions 

// function sum(){
//     var x=35;
//     var y=65;
//     console.log(x+y);
// }


// var x=35;
// var y=65;

// function sum(x,y){ 
//     console.log(x+y);
// }


// sum(x,y);


// function sum(a,b){
//     return a+b;
// }

// var out= sum(10,30);
// console.log(sum(10,20));


// function isOdd(x){
//     return x%2 != 0;
// }
// console.log(isOdd(8))


// function printEven(x,y){
//      for(var i=x;i<=y;i++){
//         if(!isOdd(i)){
//             console.log(i);
//         }
//      }
// }
// printEven(10,100);


// function sum(a,b){
//     console.log(a+b);
// //    sum(2,6);
// }

// sum(10,20);


// Array 

// var arr =[1,2,3,4,5];
// var arr = [1,"ram",false,undefined];
// console.log(arr);

// console.log(arr[0])
// console.log(typeof arr)
// console.log(arr[arr.length-1])

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]+5);
//     arr[i] = arr[i]+ 5;
// }
// console.log(arr)

// object

// var person = {
//     name:"Rakesh",
//     age:40,
//     gender:"male"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person["gender"]);

// for(var key in person){
//     console.log(person[key]);
// }



// strings

// var firstName = "Jai ";
// var lastName = "Shree Ram";

// console.log(firstName + " " + lastName);
// var x=5;
// var y = '5';
// console.log(typeof (x+y));


// var fullName = firstName.concat(lastName);
// console.log(fullName);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());


// var name = "Rakesh";

// name[0]='S';
// console.log(name)
// console.log(name[0]);


// var arr = name.split('');
// console.log(arr[0]='S');
// var str=arr.join('');
// console.log(str);


// var name = "Arjun";
// console.log(name.charAt(3));


// Math Object 


// var x= 2.4899;
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(x));

// console.log(Math.pow(2,3));


// var myMath={
//     power: function(x,y){
//         var res=1;
//    for(var i=1;i<=y;i++){
//      res *= x; 
//    }
//    return res; 
//     }
// }

// function power(x,y){
//     var res=1;
//    for(var i=1;i<=y;i++){
//      res *= x; 
//    }
//    return res;
// }


// console.log(myMath.power(2,4));

// var date = new Date();
// console.log(date.getFullYear())


// ES6 => EcmaScript Version 6
// standard --> scripting langauge 


// var x=5;

// console.log(x);

// if(x==5){
//     console.log(x);
//     x=9;
//     var y=9;
// }
// console.log(x,y);
// y=6;
// console.log(y);



// let x=5;

// console.log(x);

// if(x==5){
//     console.log(x);
//     x=9;
//     // let y=9;
// }
// console.log(x);
// // console.log(y); 


// console.log(window);
// let x=5;
// x=9;
// console.log(x);

// const x=2002;
// console.log(x);

// function Difference(){
//     for(const i=1;i<=5;i++){
//         console.log(i)
//     }
//     // console.log(i);
// }


// Difference();

// // Hoisting

// console.log(x);


// var x=5;


// template literal

// let firstName = "Raghu";
// let lastName = "Pati Raghav Ram";

// console.log(firstName + " " + lastName);
// console.log(`${firstName} || ${lastName}`);


//         0,1,2,3,4
// console.log(arr.length-1);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// const a = arr[1];
// const b = arr[3];
// console.log(a+b);

// Destructuring
// const arr=[1,2,3,4,5];
// const [a,,c,,b,] =arr;
// console.log(a+b+c);

// function Airpod(){
//     const Airpod={
//         name:"Boat Immortal 161",
//         color:"White",
//         price:999,
//         stock:50,
//      }

//      // const price = Airpod.price;
//      // console.log(price);

//      const {name,color,stock}=Airpod;
//      console.log(name,color,stock);
// }



// const car = {
//     name: "Creta",
//     brand: "hyundai",
//     color:" white",
//     price: 1500000
// }

// const {name,color,brand}=car;
// console.log(name,color,brand);
// Airpod();


// pass by value or pass by refrence

// let x=5;
// let y =x;
// console.log(x,y);
// x=9;
// console.log(x,y);



// const arr=[1,2,3,4,5];
// const arr1=arr;
// const arr2= arr.concat(arr1);
// console.log(arr,arr1);
// arr.push(6);
// console.log(arr,arr1);
// const arr2=[10,...arr,7,8,9,...arr1] //spread operator
// console.log(arr2);

// const arr=[1,2,3,4,5];
// function sum (...rest){
//     // console.log(rest);
// //   return a+b+c+d+e;
// let sum =1;
// for(let i=0;i<rest.length;i++){
//     sum *= rest[i];
// }
// return sum;
// }

// let res=sum(...arr,9,10);
// console.log(res);  


// function sum(a=0,b=0){ //default parameter
//     return a+b;
// }

// console.log(sum());


// function IsEven(x){
//     if(x&1){
//         return false;
//     }
//     return true;
// }

// console.log(IsEven(4));



// first class function

// const IsEven = function(x){
//     if(x&1){
//             return false;
//         }
//     return true;
// }
// console.log(IsEven(4));


// arrow function 

// const IsEven = x => !(x&1);
// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;

// console.log(sum(4,7));
// console.log(mul(4,7));


function isPrime(x){
    for(let i=2;i<Math.floor(x/2);i++){
        if(x%i === 0){
            return false;
        }
    }
    return true;
}


function printPrime(x,y){
    for(let i=x;i<=y;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
// console.log(isPrime(69));
printPrime(150,200);