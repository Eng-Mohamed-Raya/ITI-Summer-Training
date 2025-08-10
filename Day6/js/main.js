//** Task 1 */

var input="";
var flag=0;
var validInput = false;
function count(input){
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i]==='A') {
            count++;
        }
    }
    return count;
}

do{
    input=prompt("Enter a string :");
    if(input === null || input === ""){
       validInput = false;
    } else {
        validInput = true;
        flag = count(input);
        alert("The number of 'a' or 'A' in the string is: " + flag);
    }

}while(!validInput);



//** Task 2 */

// function validNumber(input){
//     if(isNaN(input)|| input === null || input === ""){
//         return false;
//     }
//     return true;
// }

// var arr = [];
// var input1=0,input2=0,input3=0;
// var validInput = false;

// do{
//     input1 = prompt("Enter first number:");
//     if(validNumber(input1)){
//         input1 = parseFloat(input1);
//         arr.push(input1);
//         validInput = true;
//     } else {
//         validInput = false;
//     }
// }while(!validInput);
// do{
//         input2 = prompt("Enter second number:");
//         if(validNumber(input2)){
//             input2 = parseFloat(input2);
//             arr.push(input2);
//             validInput = true;
//         } else {
//            validInput = false;
//         }
  
// }while(!validInput);
// do{
//         input3 = prompt("Enter third number:");
//         if(validNumber(input3)){
//             input3 = parseFloat(input3);
//             arr.push(input3);
//             validInput = true;
//         } else {
//            validInput = false;
//         }
  
// }while(!validInput);
// function handelDivide(input){
//     if(input === 0){
//         return false;
//     }
//     return true;
// }

// var sum = 0,mul=1;
// for(var i = 0; i < arr.length; i++) {
//    sum+= arr[i];
//     mul*= arr[i];
// }
// console.log(`Sum of ${input1}, ${input2}, and ${input3} is: ` + sum);
// console.log(`multiplication of ${input1}, ${input2}, and ${input3} is: ` + mul);
// if( handelDivide(input2) && handelDivide(input3)){
//     console.log(`Division of ${input1}, ${input2}, and ${input3} is: ` + (input1 / input2 / input3));
// }else{
//     console.log("Division by zero is not allowed.");
// }



//** Task 3 



// function validNumber(input){
//     if(isNaN(input)|| input === null || input === ""){
//         return false;
//     }
//     return true;
// }

// var arr = [];
// var input=0;
// var validInput = false;


// for(var i=0;i<5;i++){
//     do{
//         input = prompt(`Enter ${i+1}th number:`);
//         if(validNumber(input)){
//             input = parseFloat(input);
//             arr.push(input);
//             validInput = true;
//         } else {
//            validInput = false;
//         }
  
//     }while(!validInput);
// }

// arr.sort(function(a, b){return a - b});
// console.log(`Ascending Order: "Sorted in ascending order: ${arr} "`);
// arr.sort(function(a, b){return b - a});
// console.log(`Descending Order: "Sorted in ascending order: ${arr} "`);


//** Task 4


// var userName="" ,phone=0,email="";
// var isValid = false;
// var namePattern = /^[a-zA-Z\s]+$/;
// var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
// var phonePattern = /^01[0-2,5]{1}[0-9]{8}/;
// // ** handeling text input
// do{
//     userName = prompt("Enter your name:");
    
//     if(namePattern.test(userName) === false){
//         isValid = true;
//         alert("Please enter a valid userName (letters and spaces only).");
//     }else{
//         isValid = false;
//     }
// }while(isValid ||userName === null ||userName === "" || !isNaN(userName) );
// do{
//     email = prompt("Enter your email:");
//     if(emailPattern.test(email) === false){
//         isValid = true;
//         alert("Please enter a valid email address ending with @gmail.com");
//     }else{
//         isValid = false;
//     }
// }while(email === null || email === "" || !isNaN(email) || isValid );


// // ** handeling phone number input
// do{
//     phone = prompt("Enter your phone number:");
//     if(!isFinite(phone) || phonePattern.test(phone) === false || phone.length !== 11){
//         isValid = true;
//         alert("'Please enter a valid number (11 digits, starting with 01 and followed by 0-2 or 5) :");
//     }else{
//         isValid = false;
//     }
// }while(isValid || phone===null || phone=== "");

// console.log(`Welcome, ${userName}! ,your mobile number is ${phone}, and your email is ${email}.`);



//** Task 5

// function calculateTotal(){
//     var inputs= Array.from(arguments);
//     var sum=0;
//     for(let i = 0; i < inputs.length; i++){
//         if(typeof inputs[i] !== 'number' || isNaN(inputs[i])){
//             return -1;
//         }
//         sum += inputs[i];
//     }
//     return sum;
// }
// var test1=calculateTotal(5,10,20);
// (test1==-1)? alert(`String values are not allowed`):console.log(`Total: ${test1}`); // Total: 35
// var test2=calculateTotal(5,"10",20);
// (test2==-1)? alert(`String values are not allowed`):console.log(`Total: ${test2}`); // String values are not allowed
