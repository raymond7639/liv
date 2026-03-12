// 1 Console & Basic Operations (5 Questions)

// 1. Log "Hello, JavaScript!" to the console in 3 different ways.
    // console.log("Hello World");
    // console.error("Hello World");
    // console.warn("Hello World");
    // console.info("Hello World");

// pro-2 ==> 2. Perform 35 * 2 - (10/2) + 7 and log the result.
// console.log(35*2-(10/2)+7);

// pro-3 ==> 3.Log the data type of "123", 123, true, and null using typeof.
// var a = "123";
// var b = 123;
// var c =  true;
// var d = null;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));

// pro-4 ==> 4. Write a program that swaps the values of two variables.
// var a = 21;
// var b = 23;
// var swapper;
// console.log("Value of a and b before swapping is " , a , "and" , b);
// swapper = b;
// b = a;
// a =swapper;
// console.log("Value of a and b after swapping is " , a , "and" , b);

// prog-5 ==> 5. Use console.group() to organize logs into a group.
// console.log("this is out of the console group");
// console.group("Noname Yet");
//     console.log("This is inside the group");
// console.groupEnd();
// console.log("This is outside of the group");


// Prog-6==> 6. Declare a const object, modify its properties, and log the updated object.
// const std_details = {
//     Name: "Jack",
//     Class : 2,
//     age: 14,
//     weight : "40"
// }
// console.log(std_details.Name);
// std_details.Name = "Aadam"; 
// console.log(std_details.Name);

//Pro-7 ==> 7. Convert "50" (string) into a number using 3 different methods.
// var  str1 = "50";
// var m1 = Number(str1);
// console.log(typeof(m1)); // 50
// let str = "50";
// let num = +str;

// console.log(typeof(num)); // 50



// 8. Check if "JavaScript" contains "Script" without using .includes().
// var str = "JavsScript";
// console.log(str.includes("Script"));
// let str = "JavaScript";

// if (str.search("Script") !== -1) {
//     console.log("Found");
// }



// 9. Create an array of 5 numbers and log the sum using .reduce().

// var arr = [5,3,7,9,1];
// arr.reduce()




// prog-11 ==> Write a for loop to print numbers from 10 to 1 in reverse.
// for (let i = 0; i < 10; i++) {
//     console.log(10-i);
    
// }

// prog-12 ==> Use a while loop to print multiples of 3 from 3 to 30.
// let i = 1;

// while (i <=10) {
//     console.log(3 , ' * ' , i , '= ', 3 * i);
//     i++;
// }
// prog-13 ==> Write a program to calculate the sum of numbers from 1 to 100 using a loop.
    // let add = 0;
    // for (let i = 0; i <= 100; i++) {
    //     add = add + i ;
    // }
    // console.log("the sum of numbers from 1 to 100 is ",add);
// prog-14 ==> Create a nested loop to print a star pattern.

// prog-15 ==> Use a for ... of loop to iterate over the string "JavaScript".
// let str = "JavaScript";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
    
// }