function showdiv(){
    document.getElementById('div-exemple').style.visibility = 'hidden';
} setTimeout('showdiv()' , 12000)




document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")
    [0].classList.remove("active")
})



/*escape*/
document.getElementById("open-popup-btn-escape").addEventListener("click",function(){
    document.getElementsByClassName("popup-escape")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-escape").addEventListener("click",function(){
    document.getElementsByClassName("popup-escape")
    [0].classList.remove("active")
})


/*ocean*/
document.getElementById("open-popup-btn-ocean").addEventListener("click",function(){
    document.getElementsByClassName("popup-ocean")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-ocean").addEventListener("click",function(){
    document.getElementsByClassName("popup-ocean")
    [0].classList.remove("active")
})
/*scarface*/
document.getElementById("open-popup-btn-scarface").addEventListener("click",function(){
    document.getElementsByClassName("popup-scarface")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-scarface").addEventListener("click",function(){
    document.getElementsByClassName("popup-scarface")
    [0].classList.remove("active")
})
/*mechanic*/
document.getElementById("open-popup-btn-mechanic").addEventListener("click",function(){
    document.getElementsByClassName("popup-mechanic")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-mechanic").addEventListener("click",function(){
    document.getElementsByClassName("popup-mechanic")
    [0].classList.remove("active")
})
/*anna*/
document.getElementById("open-popup-btn-anna").addEventListener("click",function(){
    document.getElementsByClassName("popup-anna")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-anna").addEventListener("click",function(){
    document.getElementsByClassName("popup-anna")
    [0].classList.remove("active")
})
/*limitless*/
document.getElementById("open-popup-btn-limit").addEventListener("click",function(){
    document.getElementsByClassName("popup-limit")
    [0].classList.add("active")
})
document.getElementById("dissmiss-popup-btn-limit").addEventListener("click",function(){
    document.getElementsByClassName("popup-limit")
    [0].classList.remove("active")
})