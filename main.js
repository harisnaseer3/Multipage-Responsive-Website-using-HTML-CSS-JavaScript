// change navbar on scroll

var navbar = document.querySelector('nav')
window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
// hide/show questions answer

const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => faq.classList.toggle('open'))
    //change icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus') {
      console.log('inside if');
        icon.className = "uil uil-plus";
    } else {
      console.log('inside else');
        icon.className = 'uil uil-plus';
    }
});

// hide/show nav menu tablets
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)