var typed = new Typed('#element', {
      strings: ['Software Developer', 'Java Devloper','Frontend Developer'],
      typeSpeed: 70,
    });


const prevEle = document.querySelector(".prev")
const nextEle = document.querySelector(".next")
const imgContainerEle = document.querySelector(".img_container")
const imgEle = document.querySelectorAll(".proj_image")

let currImg = 1;
let timeout;

nextEle.addEventListener("click", ()=>{
    currImg++
    clearInterval(timeout)
    updateImg()
})
prevEle.addEventListener("click", ()=>{
    currImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){
    if(currImg > imgEle.length){
        currImg = 1
    }else if(currImg < 1){
        currImg = imgEle.length
    }
    imgContainerEle.style.transform = `translateX(${-(currImg - 1) * 100}%)`

    timeout = setTimeout(()=>{
        currImg++
        updateImg()
    }, 2000)
}