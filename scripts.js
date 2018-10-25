
window.onscroll = function () {
    myFunction();
};

var nav = document.querySelector('.top-nav');

var sticky = nav.offsetTop;   // number of pixels from the closest parent element
function myFunction() {
    if (window.pageYOffset > sticky) {      // when page scrolls, the page offset becomes greater than 0 
        nav.classList.add("nav-background");     // and adds background color
    } else {
        nav.classList.remove("nav-background");
    }
}


