//Write a program that determines whether a given number is positive or negative.

// var num = -15;

// if( num >= 0){
//  console.log(num ,"NUMBER IS POSITIVE")
// }
// else{
//     console.log(num ,"NUMBER IS NEGATIVE")
// }

//write a program to check given number is even or odd

// let num =  15;

// if(num % 2){
//     console.log(num ,"Number is odd")
// }
// else{
//     console.log(num , "Number is even")
// }

//Write a program to determine the greater of two numbers.

//  let num1 = 1000;
//  let num2 = 54;
//  let num3 = 100;

//  if(num1 >= num2 && num1 >= num3 ){
//   console.log(num1 , "num1 is greater")
//  }
//  else if(num2 >= num3 && num2 >=num1){
//     console.log(num2 , "num2 is greater")
//  }
//  else if(num3 >= num1 && num3 >=num1){
//     console.log(num3 , "num3 is greater")
//  }

//Write a program that determines if a year is a leap year.

// let year = 1988;

// if(year % 4 == 0 ){
//     console.log(year ,"this year is leap year")
//     console.log("this year is divisible by 4 and its remainder is equal to 0")
// }
// else{
//     console.log(year ,"this year is not a  leap year")
//     console.log("this year is not divisible by 4 and its remainder is not equal to 0")
// }  


// Write a program that calculates the ticket price based on age with the following conditions:
//  age below 12 pay a ticket price of 5,
//  age below 18 pay a ticket price of 10,
//  age below 60 pay a ticket price of 20, 
//  age over 60 play a ticket price of 15.

// let age = 59;
// let ticketprice;

// if (age < 12){
//     ticketprice = 5;
// }
// else if(age >= 12 && age < 18){
//     ticketprice = 10;

// }
// else if(age >= 18 && age < 60){
//     ticketprice = 20;
// }
// else { ticketprice = 15; 

// }
    


// console.log("ticket price $ :" , ticketprice)


// Write a program that calculates a discount based on the 
// purchase amount.Prices equal or over 100 discount have a discount of 20. 
// Prices equal or over 50 have a discount of 10. Otherwise discount is 0

//  let purchaseamount = 139;
//  let discount;

//  if (purchaseamount >= 100){
//     discount = "20%"
//  }

//  else if (purchaseamount >= 50){
//     discount = "10%"
//  }

//  else {
//     discount = "No discount"
//  }

//  console.log("your discount is :" , discount)

// let studentnames = ["Naveen","Sushma","Reshma","Manisha","deepika","karthi","Naveen","Sushma","Reshma","Manisha","deepika","karthi"]
// let length = 0;
//  for (let i of studentnames ){
//     console.log(i)
//     length++
//  } console.log("length of the above array is :",length)

// 
 
for(let i = 0; i <= 100; i++){
    if(i%2 ==0)
    console.log(i);
}