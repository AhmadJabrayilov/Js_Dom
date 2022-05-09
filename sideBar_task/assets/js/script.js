let menuElement = document.getElementById("menuLink");
menuElement.addEventListener("click", function(){
    menuElement.style.display = "none"
    document.getElementById("timesLink").style.display = "inline"
    document.getElementById("contentText").style.display="block"
})

let timesElement= document.getElementById("timesLink")
timesElement.addEventListener("click",function(){
    timesElement.style.display = "none"
    menuElement.style.display = "block"
    document.getElementById("contentText").style.display="none"

})