// repeat karne ko loop kahte hai
// for while do-while forin forof foreach

// 1 1 1 1 1 1 1 1 1  
// 1 2 3 4 5 6 7 8 9 

// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai
// for

// kaha se jaana hai -> kab rukna hai -> kaise jaana hai
// while 

// 1 - 40 for 
// 20 - 30 for 
// hello na aajaye - while
// laal color ka ped - while
// bhaalu miley jab jiske upar hirad baitha hai - while 

// 1. for
// 1 - 100

// for(let i=1; i<101; i++){
//     console.log(i);
// }

// 2. while 
// 1 - 32

// let i = 1;
// while(i<33){
//     //code
// console.log(i);
// i++;
// }

// 3. do-while
// 1-20
// 22-21 

// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while(i<21)

// let i = 22;
// do {
//     console.log(i);
//     i++;
// }
// while(i<21)   condition false bhaye vane pani yak choti value do maa chahe run hunca

// 3. break 
// 1 to 50 but we need to brak in 30

// for( let i=1; i<51; i++){
//     console.log(i);
//     if(i===30){
//         break;
//     }
// }


// 4.continue
// 1 to 50 but with out 32

// for(let i=1; i<50;i++){
//     if(i===32){
//         continue;
//     }
//     console.log(i);
// }

// 1. print number from 1 to 10 using for loop.

// for(i=1; i<11; i++){ 
//     console.log(i);
// }

// 2. print numbers from 10 to 1 using while loop.

// i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// 3. print even numbers from 1 to 20 using a for loop.

// for(let i = 1; i<21; i++){
//     if (i%2===0){
//         console.log(i);
//     }
// }

// 4. print odd numbers from 1 to 15 using a while loop.

// let i = 1 ;
// while(i<16){
//     if(i%2===1){
//         console.log(i);
//     }
//     i++;
// } 

// 5. print the multiplication table of 5 (i.e 5 * 1 = 5......5 * 10 = 50).

// for ( let i = 1; i<11; i++){
//     // console.log(5*i); yes bata direct 5 10 15 20 ... 50;
//     // console.log(`5 * ${i} = ${5*i}`); yo garem vane system maa value aaunxa jastai 5*1=5 ... 50 samma..
// }

// 6. Find the sum of numbers from 1 to 100 using loop.

// let sum = 0;
// for ( let i = 1; i<101; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 7. print all numbers between 1 to 50 that are divisible 3.

// for ( i = 1; i<51; i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// 8. Ask the user for a number and print whether each number from 1 to that number is even or odd..

// let val = prompt("give a number");

// for ( let i=1; i<=val; i++){
//     if(i%2 ===0){
//         console.log(`${i} is a even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     }
// }

// 9. count how many numbers between 1 to 100 are divisible by both 3 and 5.

// for (let i=1; i<101; i++){
//    if(i%3===0 && i%5===0){
//     console.log(i);
//    }
// }

// Break 

// 1. stop at first multiple of 7

// write a loop from 1 to 100 that:
//.. print each number
//.. stops completely when it finds the first number divisible by 7

// for(let i = 1; i<101; i++){
//     console.log(i);
//      if(i%7===0){
//         break;
//      }
// }

// 2. skip multiples of 3 
// write a loop from 1 to 20 that:
// skips numbers divisible by 3
// prints all others 

// use continue 

// Expected output:
// 1 2 3 4 5 6 7 8 10 11 ...(no 3, 6, 9, etc.)

// for (let i = 1; i<21; i++){
//     if(i%3===0) continue;
//     console.log(i);
// }


