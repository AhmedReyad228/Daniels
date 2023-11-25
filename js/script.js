// let valueDisplays = document.querySelectorAll(".num");
// let interval = 1000;



// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute
//     ("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function() {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if(startValue == endValue){
//             clearInterval(counter);
//         }
//     }, duration);
// });


let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".four");
let started = false;


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop){
        if (!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};


function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
}
