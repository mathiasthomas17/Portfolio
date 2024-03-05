const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav_menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';

})


// #Close Button Function

const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

// #close Button Event Listener

closeBtn.addEventListener('click', closeNav)

// #Close Menu On click of menu Item On medium and small devices
if(window.innerWidth < 1024){
    document.querySelectorAll('.nav_menu li a').forEach(navItem =>{
        navItem.addEventListener('click', closeNav)
    })
}

// window.addEventListener('scroll', () =>{
//     document.querySelector('nav').classList.toggle('width-scroll', window.scrollY > 0);
// })