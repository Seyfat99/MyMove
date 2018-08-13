
window.onscroll = function () {
    myFunction();
};

var nav = document.querySelector('.top-nav');

var sticky = nav.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("stickyNav");
    } else {
        nav.classList.remove("stickyNav");
    }
}


