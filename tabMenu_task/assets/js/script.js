

let home = document.getElementById("homeButton")
home.addEventListener("click", function(){
    document.getElementById("home").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("contact").style.display = "none";
})

let profile = document.getElementById("profileButton")
profile.addEventListener("click", function(){
    document.getElementById("profile").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("contact").style.display = "none";
})

let contact = document.getElementById("contactButton")
contact.addEventListener("click", function(){
    document.getElementById("contact").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
})



