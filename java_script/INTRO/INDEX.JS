
// Output Statements 

// document.writeln('Hello');
// console.log('Hello Guys');
// window.alert('hi');
// window.Confirm('Are you Ready To Learn JS ?');

// Variables 

// 1.var 

// var firsname1 = 'Imran';
// var firsname2= 'raja';
// console.log(firsname1,firsname2);

// 2.let

// let age = 25;
// console.log(age);

// 3.const 
// const pi = 3.14;
// console.log(pi);
// const isstudent = false;
// console.log(isstudent);

//--------------------------------------------------------------------------------------------
// Data Types

    // 1.Primitive DataType
        // 1.String 
                // let studentName = 'JavaScript';
        // 2.Number
                // let age = 31;
                // let height = 5.6;
        // 3.Boolean 
                // let isAlive = true;
        // 4.Undefined     
                // let work;
                // console.log(work);                
        // 5.Null
                // let greet = null;
                // console.log(greet);
                
    // 2.Non-Primitive DataType
        // 1.Object
                //  let student1 = {
                //     //key : value
                //     name : 'Imran',
                //     age : 31,
                //     mark : '50 / 100',
                //  }
                //  console.log(student1);
                //  console.log(student1.mark);
         //2.Array

                // let allStudentsName = [ 'Raja','James','Imran','JS','Html' ];
                // console.log(allStudentsName);
//--------------------------------------------------------------------------------------------  

// Operators 

// 1.Assignment Operator ( = )
//let greet = 'Welcome All';

// let a = 10;
//  a = a + 40;
// a += 40; //shorthand 
// console.log(a);

// 2.Arithmetic Operator ( + , - , * , / , % , ** , ++ , -- )

// let a = 5;
// let b = 2;

// let add = a + b;
// console.log(add);

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// Increment ++

// Post Increment 
// console.log(a++);


// Pre Increment 
// console.log(++b);
// --------------------------------------------------------------------------------------------

// Decrement -- 

// Post 

// let c = 10;
// c--;
// console.log(c);

// Pre 
// let c = 10;
// --c;
// console.log(--c);

// ----------------------------------------------------
// 3.Comparison Operator ( == , === , != , !== , > , < , >= , <= )

// let a = 10;
// let b = '10';

// console.log(a == b); //true
// console.log(a === b); //false

// console.log(a < b);
// console.log(a > b);

// console.log(a <= b);
// console.log(a >= b);

// console.log(a != b);
// console.log(a !== b);

//--------------------------------------------------------------------------------------------

// 4.Logical Operator ( AND - && , OR - || ,  NOT - ! )

// console.log( true && true );
// console.log( true || false );
// console.log( !true );


// let a = 5;
// let b = 10;

// console.log( (a < b) && (a == b) );
// console.log( (a < b) || (a == b) );
// console.log( !(a < b));


// --------------------------------------------------------------------------------------------

// 5.Conditional Operator  ( ? : ) Ternary Operator

// let age = 25;

// let result = (age > 24) ? 'You are Eligble' : 'Not Eligible';

// console.log(result);

// ----------------------------------------------------------------------------

// 6.Typeof

// console.log(typeof(''));
// console.log(typeof(4568));
// console.log(typeof(4.568));
// console.log(typeof(true));
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof({}));
// console.log(typeof([]));


// ----------------------------------------------------------------------------


// Conditional Statement 
// if, else, else if 

// if(condition){
//         // your code goes here... 
// }

// if(true){
//         console.log('Hi I am If Condition');        
// }
// else{
//         console.log('I am Else');
// }

// if(false){
//         console.log('If Condition');
// }
// else if(false){
//         console.log('ELSE IF CONDITION');
// }
// else{
//         console.log('Finally I am Here');
// }

//EX:

let age = prompt('Enter Your Age');

if(age <= 4){
        console.log(' Baby ticket');
        console.log('Your ticket price is free');
}
else if(age > 4 && age <= 18){
    console.log('Child ticket');
    console.log('Your ticket price is 100rs');
}
else if(age > 18 && age <= 50){
    console.log('Adult ticket');
    console.log('Your ticket price is 250rs');
}
else{
    console.log('Senior Citizen ticket');
    console.log('Your ticket price is 150rs');
}