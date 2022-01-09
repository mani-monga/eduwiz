burger= document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightnav');
navlist = document.querySelector('.navlist');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('vcls');
    rightnav.classList.toggle('vcls');
    navbar.classList.toggle('hnav');
})

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});
