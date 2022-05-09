let button1 = document.getElementById("card1Button")
button1.addEventListener("click",function(){
    document.getElementById("card1image").style.filter = "none"
    document.getElementById("card1text").style.display = "block"
    document.getElementById("card2text").style.display = "none"
    document.getElementById("card3text").style.display = "none"
    document.getElementById("card4text").style.display = "none"
    document.getElementById("card2image").style.filter = "blur(25px)"
    document.getElementById("card3image").style.filter = "blur(25px)"
    document.getElementById("card4image").style.filter = "blur(25px)"

})

let button2 = document.getElementById("card2Button")
button2.addEventListener("click",function(){
    document.getElementById("card1image").style.filter = "blur(25px)"
    document.getElementById("card2image").style.filter = "none"
    document.getElementById("card3image").style.filter = "blur(25px)"
    document.getElementById("card4image").style.filter = "blur(25px)"
    document.getElementById("card1text").style.display = "none"
    document.getElementById("card2text").style.display = "block"
    document.getElementById("card3text").style.display = "none"
    document.getElementById("card4text").style.display = "none"

})

let button3 = document.getElementById("card3Button")
button3.addEventListener("click",function(){
    document.getElementById("card1image").style.filter = "blur(25px)"
    document.getElementById("card2image").style.filter = "blur(25px)"
    document.getElementById("card3image").style.filter = "none"
    document.getElementById("card4image").style.filter = "blur(25px)"
    document.getElementById("card1text").style.display = "none"
    document.getElementById("card2text").style.display = "none"
    document.getElementById("card3text").style.display = "block"
    document.getElementById("card4text").style.display = "none"
  

})

let button4 = document.getElementById("card4Button")
button4.addEventListener("click",function(){
    document.getElementById("card1image").style.filter = "blur(25px)"
    document.getElementById("card2image").style.filter = "blur(25px)"
    document.getElementById("card3image").style.filter = "blur(25px)"
    document.getElementById("card4image").style.filter = "none"
    document.getElementById("card1text").style.display = "none"
    document.getElementById("card2text").style.display = "none"
    document.getElementById("card3text").style.display = "none"
    document.getElementById("card4text").style.display = "block"
  

})