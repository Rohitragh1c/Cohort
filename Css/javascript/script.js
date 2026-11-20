// console.log("This is normal text")
// console.warn("This is warning")
// console.table(["harsh","adarsh","pathak"])

// var age=24;
// console.log(age);

// var a=20;
// var b=40;

// console.log("value of a is",a, "value of b is",b );

// var ans = confirm('Are u a MAN?')
// console.log(ans);

// var user = prompt('Enter your name')
// console.log(user);

// var user = prompt('enter your age')    
// console.log(typeof(user));            //type of prompt is string always

// var maths = Number(prompt('enter your maths marks'))
// var physics = Number(prompt('enter your physics marks'))
// var chemistry = Number(prompt('enter your physics marks'))

// var avg = (maths + physics + chemistry)/3

// console.log('yours marks', avg);

// if(avg>=85){
//     console.log('Grade A');
// } else{
//     console.log('Better luck');
// }

// let firstName = "Aman"
// let lastName = "Raghu"
// let fullname =firstName + lastName;
// console.log(fullname);

// let x = "aman"
// x=x.toUpperCase();
// console.log(x);

// console.log(Math.PI);

// let age = 6;
// let hasLicense = true;

// if(age>=18){
//     if(hasLicense){
//         console.log('can drive');
//     } else{
//         console.log('get license first');
//     }
// } else{
//     console.log('to young to drive');
// }

// let name=prompt('what is your name');
// console.log('hello'+ name);

// let age =Number(prompt('what is your age'));
// if (age>=18) console.log('adult');

// for(let i=1; i<=50;i++){
//     if(i%15===0) console.log('fizzbox');
//     else if(i%3===0)  console.log('fizz');
//     else if(i%5===0) console.log('box');
//     else console.log(i);
// }

// var age = 20;
// var name = "jay";
// var gender = "male";

// console.log(` Heros age is ${age}, his name is ${name}
//    and he is a ${gender} `);


// Print an error message using console.error().
// console.error("Error: something went wrong");


//Print a warning message using console.warn().
// console.warn("warning")


//Use console.table() to display an array of 5 numbers.
// console.table([1,2,3,4,5]);


// Create a variable called studentName and store your name in it.
// let studentName = ("Rohit");
// console.log(studentName);


// Create two variables and swap their values.
// let a=20;
// let b=10;
// let temp=a; 
// a=b;
// b=temp;


// console.log('a is', a);
// console.log('b is',b);


//Declare a variable without assigning a value and print it.
// let a;
// console.log(a);  //undefined


//Create a variable score and increase it by 10.
// let score=1;
// score+=10;
// console.log(score);


//Create variables of type string, number, boolean, null, and undefined.
// let str="Rohit";
// let num=24;
// let isStudent=true;
// let address=null;
// let marks;
// console.log(typeof str);
// console.log(num);
// console.log(isStudent);
// console.log(address);
// console.log(marks);



// Create a mini biodata program using variables and template literals.
// let Stdname="Rohit";
// let age=22;
// let degree="B-tech";
// let branch="Aiml";
// let year="3rd year";
// let isStudent=true;

// let biodata=`
// ==========My biodata=========
// Name     :${Stdname}
// age      :${age}
// degree   :${degree}
// branch   :${branch}
// year     :${year}
// Student  :${isStudent}

// =============================
// `;
// console.log(biodata);



// Calculate the area of a rectangle.
// let length =10;
// let breadth =12;
// let area=(length*breadth);
// console.log("Area of rectangle",area);



//Calculate the simple interest.
// let p=1000;
// let r=5;
// let t=2;
// let si=(p*r*t)/100;
// console.log("Simple Interest:", si);



//km to m
// let kilometers = 5;
// let meters = kilometers * 1000;
// console.log("Kilometers:", kilometers);
// console.log("Meters:", meters);



//percentage
// let s1=67;
// let s2=78;
// let s3=88;
// let s4=76;
// let s5=94;



// let total=s1+s2+s3+s4+s5;
// let percentage=(total/500)*100;
// console.log("total: ", total);
// console.log("percentage: ", percentage);



//Calculate electricity bill based on units consumed.
// let units=250;
// let bill=0;
// if(units<=100){
//     bill=(units*5);
// } else if(units<=200){
//     bill=(100*5) + (units-100)*7;
// } else{
//     bill=(100*5) +(100*7) +(units-200)*10;
// }
// console.log("BILL: ",bill);



// Create a username generator using first name and birth year.
// let firstName = "Rohit";
// let birthYear = 2004;
// let username = `${firstName}_${birthYear}`;
// console.log("Username:", username);



//Check whether a string starts with a specific letter.
//JavaScript provides the startsWith() method to check whether a string begins with a particular letter or word.
// let username="Rohit";
// let letter = "R";

// if (username.startsWith(letter)) {
//     console.log("String starts with the letter", letter);
// } else {
//     console.log("String does not start with the letter", letter);
// }



//Function Declaration
// greet("Chaman");  //Works
// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Naman");
// greet("Aman");



//Function Expression
// greet("Aman");  //Error
// const greet = function(name){
//      console.log("hello " + name );
// };



//Function Arrow
// const add = (a,b) => a+b;
// console.log(add(5,6));
// const sq =(x)=> x*x;
// console.log(sq(5,5));



//Anonymous => function without name
// const sayHi = function() {
//     console.log("Hi!");
// };
// sayHi();




//Default parameters => if no argument is passed use a default value
// function greet(name="Guest"){
//     console.log("hello "+ name);
// }
// greet("Anam");
// greet();





//CALLBACK FUNCTION
// JavaScript mein Callback Function ek aisa function hota hai 
// jise kisi dusre function ke argument (parameter) ke roop mein pass kiya jata hai, 
// taaki usse baad mein execute (call) kiya ja sake.
// function cupDhoLo() {
//     console.log("5. Cup dho liya!");
// }
// function chaiBanao(callbackFunction) {
//     console.log("1. Paani ubaalo");
//     console.log("2. Chai patti daalo");
//     console.log("3. Doodh daalo");
//     console.log("4. Chai taiyaar hai!");
//     callbackFunction();
// }
// chaiBanao(cupDhoLo);
// Kya hua:
// chaiBanao function ko call kiya gaya
// Argument mein cupDhoLo function ka reference (address) bheja gaya
// cupDhoLo() nahi likha, sirf cupDhoLo likha (matlab function ko call nahi kiya, bas uska naam bheja)
// JavaScript kya karta hai:
// callbackFunction ko dhundta hai
// Dekhta hai ki callbackFunction ke andar cupDhoLo ka reference hai
// Toh wo cupDhoLo() ko call kar deta hai
// Jab callbackFunction(); execute hua
// Toh JavaScript ne dekha ki callbackFunction ke andar cupDhoLo hai
// Toh usne cupDhoLo() ko call kar diya
// Isliye "5. Cup dho liya!" print hua

// function generateOTP() {
//   // Math.random() gives 0 to 0.999...; multiply and floor for integer
//   const otp = Math.floor(1000 + Math.random() * 9000); // range: 1000–9999
//   return otp.toString();
// }
// console.log("Your OTP is:", generateOTP());

// let users = [{name: "A", age: 20}, {name: "B", age: 30}];
// let user = users.find(u => u.age > 25);
// console.log(user);  