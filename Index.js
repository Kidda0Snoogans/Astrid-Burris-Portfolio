// To turn the intro French on hover

let French_Intro = document.querySelector(".French_Intro")
let Intro = document.querySelector(".Intro")

Intro.addEventListener ("click", function() {
    French_Intro.style.display = "block"
    Intro.style.display = "none"
})

