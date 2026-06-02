// how to select  ahtml element by id

// let container = document.getElementById('container');
// console.log(container);

// how to select  ahtml element by class

// let paras = document.getElementsByClassName('paras');
// //console.log(paras);
// console.log(paras[2]);

//let paras = document.getElementsByClassName('paras');
//paras[2].innerText = 'This is the third paragraph';
//console.log(paras[2]);

// how to select  ahtml element by tag name

// let allparagraph = document.getElementsByTagName('p');
// console.log(allparagraph);

// let allheading = document.getElementsByTagName('h1');
// console.log(allheading);

// querry seclector using id

// let querry = document.querySelector('#sec');
// console.log(querry);

// // querry seclector using class
// let querry1 = document.querySelector('.sectionclass');
// console.log(querry1);

// // querry seclector using both id and class
// let querry2 = document.querySelector('section');
// console.log(querry2);

// // selecting all the elements using querry selector
// let querry3 = document.querySelectorAll('section');
// console.log(querry3);

//---------------------------------------------------------------------------------------------------------------
 
//get element

// const main = document.querySelector('main');
//console.log(main);

//create element

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// const p = document.createElement('p');


//console.log(div,h1,p);

// add text content

//let text = document.textcontent = 'Hello world';
// h1.innerText = "Helloworld";
// p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque!";

// append child

// div.appendChild(h1);
// div.appendChild(p); 

// main.appendChild(div);

// console.log(div);

//add / remove class

// div.className = 'container';

//=====================================================================================

//Event handling / event listener

// const btn = document.getElementById('btn');
// //console.log(btn);

// btn.addEventListener('mouseover', handleclick);

// function handleclick(){
//     console.log('Button clicked!');
// }

//shorthand
//btn.addEventListener('mouseover', () => console.log('Button clicked!'));

//=====================================================================================

//form handling

// const firstname = document.getElementById('fname');
// const lastname = document.getElementById('lname');
// const btn = document.getElementById('btn'); 

// function handleSubmit(event){
//     event.preventDefault(); // prevent the default form submission behavior
//     //console.log('hi'); 

//     console.log(firstname.value);
//     console.log(lastname.value);
// }


//=====================================================================================

//asynchronous programming
//advanced concepts
//exception handling /error handling
// try, catch, throw

// try{
//     for(let count = 1; count <= 5; count++) {
//         console.log(count);
//         if(count === 6){
//             throw new Error("loop stoped");
//         }
//     }
// } 
// catch (err) {
//     console.error(err);
//}
//=====================================================================================
// call back function

// function greet(callback, name){
//     console.log('welcome user', name);
//     //callback();
//     setTimeout(() => {callback()}, 2000);
// }
// function user(){
//     console.log('This is a callback function');
// }
// greet(user, 'John');
//=====================================================================================
// function greet(callback, name){
//     console.log('welcome user', name);
//     //callback();
//     setTimeout(() => {callback()}, 2000);
// }
// function user(callback){
//     console.log('This is a callback function');
//     //callback();
//      setTimeout(() => {callback()}, 2000);
// }

// function student(){
//     console.log('Hello student');
// }
// greet(() => user(student), 'John');

//==================================================================================

//promise

//new promise

//------------------------------
// string literals
//let name = 'js';

// let name  = new string()
// name = 'JAVASCRIPT';
//-------------------------------

//object literals

// let person = new object();
// person.name = 'Js';
//--------------------------------

//literals

// new array();
// boolean();
// equal();
//-------------------------------

//


//promise
// let mypromise = new Promise((resolve, reject) => {
//     let data  = 'Hello world';
//     if(data){
//         resolve(data);
//     }
//     else{
//         reject('Error: No data found');
//     }
// });

// //console.log(mypromise);

// mypromise.then((result) => console.log(result))
// .catch((err) => console.error(err))
// .finally(() => console.log('End'));

//==================================================================================

//API- APPLICATION PROGRAMMING INTERFACE

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

//fetch users data 

const userName = document.getElementById('userName');

async function fetchUserData(){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        console.log(response);
        if(!response.ok){
            throw new Error('HTTP Error');
        }
        let result = await response.json();
        //console.log(result);
        result.forEach((user) => {
            userName.innerText += user.name;
        })
        
    }
    catch(err){
        console.log(err);
    }
}
    

fetchUserData(); 