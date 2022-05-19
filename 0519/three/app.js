// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#submit");

// function loginBtnClick () {
// //    console.log(loginInput.value);
//     if ( loginInput.value === "" ) {
//         alert("이름을 적어주세요");
//     } else if ( loginInput.value.length > 15 ) {
//         alert("이름이 너무 깁니다. 15자 이내로 작성해주세요!");
//     } else {
//         console.log(loginInput.value);
//     }
// }

// loginButton.addEventListener("click", loginBtnClick);

const loginInput = document.querySelector("#text");
const loginForm = document.querySelector("#login-form");

 function loginBtnClick (event) {
    event.preventDefault();
    console.log(loginForm.value);
    console.log(loginInput.value);
 }

function btnclick (event) {
    console.log("클릭됩!");
    console.log(event);

    const ID = loginInput.value;
}

loginForm.addEventListener("submit", loginBtnClick);
