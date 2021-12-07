// preloder start
setTimeout(function(){
    var loader = document.querySelector('.pre-loader');

    loader.style.display = "none";

}, 3000)

// preloader end
// nav start
var nav = document.querySelector('nav');

var pos = nav.offsetTop;

var arrow = document.querySelector('.scroll-up-item');

window.onscroll = function(){
    if (window.pageYOffset > pos){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
    if(window.pageYOffset > 400){
        arrow.style.display="block";
    }else{
        arrow.style.display = "none";
    }
}
//nav end

var x, burger, mobilenav;

burger = document.querySelector('.burger');
mobilenav = document.querySelector('nav ul');

burger.onclick = () => {
    if(x == 0){
    mobilenav.classList.add('showNav')
    x = 1;
    }else{
        mobilenav.classList.remove('showNav');
        x = 0;
    }


}

