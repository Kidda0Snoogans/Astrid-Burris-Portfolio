// To turn the Intro French on hover

let Intro = document.querySelector(".Intro");
let French_Intro = document.querySelector(".French_Intro");

Intro.addEventListener('mouseenter',function(){
    Intro.style.display = "none";
    French_Intro.style.display = "block";
});

// To turn back on exit

French_Intro.addEventListener('mouseleave', function(){
    Intro.style.display = "block";
    French_Intro.style.display = "none";
});