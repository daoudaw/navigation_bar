const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');



const display_menu = () =>
{
    ul.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
   
};


burger.addEventListener('click', display_menu);