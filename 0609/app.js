// const cat = {
//     name : "chanmi",
//     age : 3,
//     sayMeow : function() {
//         console.log("Meow");
//     }
// }

// cat.sayMeow();

// function sayHello() {
//     console.log("Hello!");
// }

// const sayHi = function() {
//     console.log("hi");
// }

// const plus = function(num1, num2) {
//     return num1 + num2;
// }

// // 위 코드와 아래 2개의 코드는 동일한 코드
// const plus2 = (num1, num2) => {return num1 + num2};

// const plus3 = (num1, num2) => (num1 + num2);

// // 요소가 하나인 경우 괄호가 없어도 됨.
// const multiply = num1 => num1*2;

// // 받아오는 값이 없을 시 꼭 괄호를 써야함.
// const sayHi2 = () => {console.log(`hi`)};

// const h1Element = document.querySelector("#wrapper h1");

// console.log(h1Element);

// function clickFn() {
//     console.log("클릭됨.")
// }

// h1Element.addEventListener("click", clickFn)

// // 위 코드와 아래 코드는 동일하게 작동됨.
// h1Element.addEventListener("click", () => {console.log("클릭됩")})

// console.h1Element(dir)


// console.log(h1Element);

// function clickFn() {
//     if(h1Element.style.color === "blue") {
//         h1Element.style.color = "red";
//     } else {
//         h1Element.style.color = "blue";
//     }
// }

// h1Element.addEventListener("click", clickFn)

// console.log(h1Element);

// function clickFn() {
//     // if (h1Element.classList.contains("clicked")) {
//     //     h1Element.classList.remove("clicked");
//     // } else {
//     //     h1Element.classList.add("clicked");
//     // }

//     h1Element.classList.toggle("clicked");
// }

// h1Element.addEventListener("click", clickFn);

const loginInput = document.querySelector("#login_form input");
// const loginBtn = document.querySelector("#login_form button");
const loginForm = document.querySelector("#login_form");
const greddtH1 = document.querySelector("h1");
const body = document.querySelector("body");

function submitFn(event) {

    event.preventDefault();
    // console.log(event);
    const userName = loginInput.value;

    const greet = document.createElement("h1");
    
   loginForm.classList.add("hidden");
    greddtH1.innerText = `Hello ${userName}`;
    // greddtH1.classList.remove("hidden");

    body.appendChild(greet);

    // console.dir(loginInput);
    // console.log(loginInput.value);
    // if ( loginInput.value.length > 15) {
    //     alert("이름 너무 길어요");
    // }
}

// currentTarget*

loginForm.addEventListener("submit", submitFn);