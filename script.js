
//TOGGLE ICON NAVBAR////////////////////////////////////////////////////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}


//STICKY NAVBAR/////////////////////////////////////////////////////////////////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


//STICKY FOOTER////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
    // Get the content and the footer elements
    const content = document.querySelector('.content');
    const footer = document.getElementById('footer');

    // Get the height of the content and the viewport
    const contentHeight = content.offsetHeight;
    const windowHeight = window.innerHeight;

    // Add the 'sticky-footer' class to body if content is shorter than the viewport
    if (contentHeight < windowHeight) {
        document.body.classList.add('sticky-footer');
    }
};



//PARALLAX/////////////////////////////////////////////////////////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));