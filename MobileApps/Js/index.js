// // // var 
// // // console.log(a);
// // // var a = 10
// // // console.log(a);
// // // // re declaration
// // // var a = 60
// // // console.log(a);
// // // // re assign
// // // a=70
// // // console.log(a);


// // //let 
// // // console.log(a);
// // // let a = 10
// // //const
// // // console.log(a);

// // // const  a = 10
// // // Datatypes
// // // premitive
// //     // number
// //     // num = 100
// //     // console.log(num);
    
// //     // boolean
// //     //string
// //     //undefined
// //     //null
// //     //Nan

// // // non premitive
// //     // array 
// //     //Object

// // // let x =15521545415415
// // // console.log(typeof(x));


// // // console.log("Hello"+3);


// // // let arr = [10,20,30,40,50]
// // // // let arr1 = [10,true,"names",undefined,null]
// // // console.log(arr[0]);
// // // console.log(arr[1]);
// // // console.log(arr.length);

// // // let arr1 = [
// // //     [10,20,30],[50,70,80]
// // // ]
// // // console.log(arr1[0][1]);
// // // console.log(arr1[1][1]);


// // //index
// // //length-> no of elements


// // const person = {
// //     userName:"jaya",
// //     age:25,
// //     family:{
// //         dad:"xyz",
// //         mom:"abc",
// //         siblings:{
// //             brother:["kavin","kalai"]
// //         }
// //     }
// // }
// // console.log(person.family.siblings.brother[1]);

// // if
// //if else
// //3 -> 
// let temp = 19

// if(temp<20){
//     console.log("Switch off the both ac and fan");    
// }
// if(temp>32){
//     console.log("Switch on the ac");   
// }
// else{
//     console.log("Switch on the fan");   
// }


// // let num = 5;
// // // ternary
// // // condition ? "true" : "False"

// // console.log(num%2==0 ?"Even":"Odd");


// // let courseName = "ffgh";

// // switch(courseName){
// //     case "Python":
// //         console.log("Choose the python course");
// //         break;
// //     case "Java":
// //         console.log("Choose the Java course");
// //         break; 
// //     case "Flutter":
// //         console.log("Choose the Flutter course");
// //         break;
// //     default:
// //         console.log("Choose the React course");   
// // }


// //loops
// //while
// // while(condition){}

// let a =10
// // while(a>=0){
// //     console.log(a);
// //     a--
// //     // 11
// // }
// // //do while
// // do{
// //     console.log("Do while");
// //     a--
    
// // }while(a>=0)
// //for loop
// // for(variable;condition;in/de){}

// // 1*5 = 5
// // 2*5 = 10
// // 3*5 = 15


// let num = 1

// let multiple = 3

// while(num<=10){
//     // console.log(num + "*" + multiple + "=" + num*multiple);    
//     console.log(`num*${multiple}=${num*multiple}`);
    
//     num++
// }




// for loop
// for of
let arr = [10,20,30,40]
// arr[0]
// arr[1]
// arr[2]
// arr[3]
// for(let x of arr){
//     console.log(x);    
// }
// // for in 

// for(let x in arr){
//     console.log(arr[x]);    
// }
// foreach
// arr.forEach(x=>console.log(x))

// arr.map(x=>console.log(x))

// reduce
// 10+20+30+40=100

// const total = arr.reduce((a,b)=>a+b)
// // a=0 ->100
// // b=40
// console.log(total);

// filter
// const three = arr.filter((x)=>x%3==0)
// // 10->1
// //20->2
// //30->0
// //40
// console.log(three);

// push
// pop
// shift
// unshift
// find
// includes
// indexof
// slice
// splice
// split
// join
// set
// spread operator
// rest operator
// settimeout
// setinterval
// template literals
// destrucre 
// Object methods -> like Object.keys,Object.values,Object.entries


// async


// console.log("Hello");
// try{
//     console.log(a)
// }catch(err){
//     console.log("Welcome to catch block");
// }
// console.log("Bye");



//promise
// const bookTicket = new Promise((resolved,reject)=>{
//     let isBooked = true
//     if(isBooked){
//         resolved("Ticket booked successfully")
//     }
//     else{
//         reject("Ticket booking failed")
//     }
// })

// bookTicket.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })


// const Player1 = new Promise((resolved,reject)=>{
//     let isPlayer1Won = true
//     if(isPlayer1Won){
//         resolved("Player 1 won the match")
//     }
//     else{
//         reject("Player 1 lost the match")
//     }  
// })

// const Player2 = new Promise((resolved,reject)=>{
//     let isPlayer2Won = true
//     if(isPlayer2Won){
//         resolved("Player 2 won the match")
//     }
//     else{
//         reject("Player 2 lost the match")
//     }  
// })

// const Player3 = new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         let isPlayer3Won = false 
//     if(isPlayer3Won){
//         resolved("Player 3 won the match")
//     }else{
//         reject("Player 3 lost the match")
//     }  
//     },5000)
// })

//any
// Promise.any([Player1,Player2,Player3]).then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})
//race
// Promise.race([Player1,Player2,Player3]).then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})
//all
// Promise.all([Player1,Player2,Player3]).then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})
//allsettled
// Promise.allSettled([Player1,Player2,Player3]).then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})

// const fetchProducts = new Promise((resolved,reject)=>{
//     fetch("https://fakestoreapi.com/products").then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Error while fetching the products")
//         }
//     })
// })

// fetchProducts.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

const fetchData = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    if(res.ok){
        console.log(await res.json());        
    }
    else{
        console.log("Error while fetching the products");   
}
}

fetchData()