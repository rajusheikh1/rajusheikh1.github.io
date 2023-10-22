let menu = document.querySelector(".menu1")
let menuClose = document.querySelector(".menu-close1")
let navBar = document.querySelector(".left2")
let body = document.querySelector(".content")

menu.addEventListener("click",function(){
        menu.style.display = "none"
        navBar.style.display = "initial"
})
menuClose.addEventListener("click",function(){
    navBar.style.display = "none"
    menu.style.display = "initial"
})