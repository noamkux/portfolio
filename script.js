
// document.addEventListener("scroll", function () {
//     var blobYellow = document.getElementById("blobYellow")
//     var blobGreen = document.getElementById("blobGreen")
//     var scrollPosition = window.scrollY
//     console.log(scrollPosition);
//     blobYellow.style.opacity = scrollPosition / 500
//     blobGreen.style.opacity = scrollPosition / 300


// })

let techContainers = document.querySelectorAll("tech-container")
let techContainersArr = Array.from(techContainers) 

for (let i = 0; i < techContainersArr.length; i++) {
    console.log(techContainersArr[i]);

}


// function blah(){
//     techContainers.forEach(container => {
//        container.addEventListener("mouseenter"),function (){
//            console.log(container.innerText);
//        }

//    });}

//    blah()

console.log(techContainers);
console.log(techContainersArr);