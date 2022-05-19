// const loginForm = document.querySelector("form");
// const loginInput = document.querySelector("#input-id");
// const greeting = document.querySelector("#greeting");

// function loginBtnClick (event) {
//     event.preventDefalut();

//     loginForm.classList.add("hidden");
//     const ID = loginInput.value;

//     const greeting = document.createElement("h1");

//     greeting.innerText = `안녕하세요 ${ID}님`;
// //    greeting.classList.remove("hidden");

//     document.body.appendChild(greeting);
// }

// loginForm.addEventListener("submit", loginBtnClick);

const arr = ['a', 'b', 'c', 'd', 'e'];

const btn = document.querySelector("button");

function btnClicked () {
    arr.forEach((item) => {
        const item_p = document.createElement("p");
        item_p.innerText = item;
        document.body.appendChild(item_p);
    })
}

btn.addEventListener("click", btnClicked);