
// ** Task 1

// var user={
//     name:"",
//     age:0, 
//     displayUser:function (){
//          document.writeln(`<h2 style="color:${this.age<18?"orange":"green"}">
//                     Welcome ${this.name} , you are  ${this.age}  years old.
//                  </h2>`);
//     }
// }

// var user1=user;
// var userName="" ,userAge=0;
// var isValid = false;

// do{
//     userName = prompt("Enter your name:");
// }while(userName === null || userName === "" || !isNaN(userName));

// do{
//     userAge = prompt("Enter your age:");
//     if(!isFinite(userAge) || userAge < 0){
//         isValid = true;
//         alert("'Please enter a valid number");
//     }else if(userAge===null || userAge=== ""){
//         isValid = true;
//     } else {
//         isValid = false;
//         user1.age = parseInt(userAge);
//         user1.name = userName;
//         (user1.age<50) ? user1.displayUser():document.writeln("age is greater than 50, no display");
//     }
// }while(isValid);







// **Task 2

// var student={
//     name:"",
//     age:0,
//     contact:{
//         phone:0,
//         email:"",
//     } ,
//     displayProfile:function (){
//          document.writeln(`<h2>
//                      ${this.name} is ${this.age}  years old. Contact: ${this.contact.phone} , ${this.contact.email}
//                  </h2>`);
//     }
// }

// var student1=student;
// var studentName="" ,studentAge=0,studentPhone=0,StudentEmail="";
// var isValid = false;
// // ** handeling text input
// do{
//     studentName = prompt("Enter your name:");
// }while(studentName === null || studentName === "" || !isNaN(studentName));
// do{
//     StudentEmail = prompt("Enter your email:");
// }while(StudentEmail === null || StudentEmail === "" || !isNaN(StudentEmail) || !StudentEmail.includes("@gmail.com"));

// // ** handeling age input
// do{
//     studentAge = prompt("Enter your age:");
//     if(!isFinite(studentAge) || studentAge < 0){
//         isValid = true;
//         alert("'Please enter a valid number");
//     }else if(studentAge===null || studentAge=== ""){
//         isValid = true;
//     } else {
//         isValid = false;
//     }
// }while(isValid);

// // ** handeling phone number input
// do{
//     studentPhone = prompt("Enter your phone number:");
//     if(!isFinite(studentPhone) || studentPhone < 0 || studentPhone.length !== 11){
//         isValid = true;
//         alert("'Please enter a valid number");
//     }else if(studentPhone===null || studentPhone=== ""){
//         isValid = true;
//     } else {
//         isValid = false;
//     }
// }while(isValid);

//     student1.age = parseInt(studentAge);
//     student1.name = studentName;
//     student1.contact.phone = parseInt(studentPhone);
//     student1.contact.email = StudentEmail;
//     student1.displayProfile();

// **Task 3


function calculatePrice(quantity, pricePerUnit){
    if(!isFinite(quantity) || quantity <= 0 || !isFinite(pricePerUnit) || pricePerUnit <= 0){
        alert( "Please enter valid numbers for quantity and price per unit.");
        return -1;
    }
    return (quantity>10)? quantity * pricePerUnit *0.9 : quantity * pricePerUnit;
} 

console.log(calculatePrice(5, 100) ); // 5*100 = 500
console.log(calculatePrice(15, 100)); // 15*100*0.1 = 1350
console.log(calculatePrice(-5, 100)); // -1
console.log(calculatePrice(20, -100)); //-1
console.log(calculatePrice(5, "abc")); // -1
console.log(calculatePrice("abc", 100)); // -1