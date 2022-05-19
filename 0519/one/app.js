// // // function add (num1, num2) {
// // //    return num1 + num2;
// // // }

// // // function titleClicked() {
// // //    close.log("h2가 클릭되었습니다.");
// // // }

// // // title.addEventListener("click", titleClicked);

// // // 윗 코드와 아래 코드는 같음
// // // const add = (num1, num2) => num1 + num2; 

// // // function v1 (num1, num2) {
// // //    return num1 + num2;
// // // }

// // // const v2 = function(num1, num2) {
// // //    return num1 + num2;
// // // }

// // // 버전 3은 실질적으로 아무 동작도 안함
// // // const v2 = (num1, num2) =>  (num1 + num2); 
// // // const v3 = (num1, num2) =>  { num1 + num2 }; 

// // // title.EventListener("click", () => console.log("h2가 클릭되었습니다."));

// // const studentNames = ['천예지', '감지복', '강엠돌', '고양이', '사람'];

// // // for ( i=0; i<stdentNames.length; i++ ) {
// // //    console.log(stdentNames);
// // // }

// // for(i in studentNames) {
// //     console.log(studentNames[i]);
// // }


// // function f1 (name) {
// //     console.log(name);
// // }

// // studentNames.forEach(f1);
// // studentNames.forEach(name => console.logname + "😀");

// // const newList = studentNames.map((name) => name + "😀");
// // console.log(newList);

// // 유저가 title을 클릭했을 때, h2의 색상을 red로 바꿔주세요

// // title.EventListener("click", () => title.style.color = "#ff0000");

// const title = document.querySelector('h2');
// // title.addEventListener("click", () => title.style.color = "red");

// function changeColorToRed () {
//     title.style.color = "red";
// }
// title.addEventListener("click", changeColorToRed);

// const title2 = document.querySelector("h3");
// function changeColorBlackOrred () {
//     if (title2.style.color === "red") {
//         title2.style.color = "black";
//     } else {
//         title2.style.color = "red";
//     }
// }

// title2.addEventListener("click", changeColorBlackOrred);

// 3. 클릭할때마다 색이 바뀌는데, CSS + JS

const title = document.querySelector("h3");

// function clickFn () {
//     if (title.className !== "clicked") {
//         title.className = "clicked";
//     } else {
//         title.className = "";
//     }
// }

//function clickFn () {
//    const clickClassName = "clicked";
//    if (title.classList.contains(clickClassName)) {
//        title.classList.remove(clickClassName);
//   } else {
//        title.classList.add(clickClassName);
//    }
// } 

function clickFn () {
    const clickClassName = "clicked";
    title.classList.toggle(clickClassName);
}
title.addEventListener("click", clickFn);