// const title = document.querySelector("a");

// function clickFn () {
//     const clickClassName = "clicked";
//     title.classList.toggle(clickClassName);
// }
// title.addEventListener("click", clickFn);

// function clickFn () {
//    const clickClassName = "test2";
//    title.classList.toggle(clickClassName);
// }

// title.addEventListener("click", clickFn);

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");

// function clickFn () {
//     const clickClassName = "test";
//     item.classList.toggle(clickClassName);
// }

// item.addEventListener("click", clickFn);

//function clickFn () {
//    const clickClassName = "clicked";
//    if (title.classList.contains(clickClassName)) {
//        title.classList.remove(clickClassName);
//   } else {
//        title.classList.add(clickClassName);
//    }
// } 




const ACTIVE = "active";

function clickFn1 () {
    item1.classList.toggle(ACTIVE);
}

function clickFn2 () {
    item2.classList.toggle(ACTIVE);
}

function clickFn3 () {
    item3.classList.toggle(ACTIVE);
}

function clickFn4 () {
    item4.classList.toggle(ACTIVE);
}

item1.addEventListener("click", clickFn1);

item2.addEventListener("click", clickFn2);

item3.addEventListener("click", clickFn3);

item4.addEventListener("click", clickFn4);

const ulist = document.querySelector("ul");

let listItems = ulist.children;

