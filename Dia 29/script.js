const nav = document.querySelector('.nav')
const  a = document.querySelectorAll('a');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active-nav');
        a.forEach(element => {
            element.classList.add('active-nav');
        });
    } else {
        nav.classList.remove('active-nav');
        a.forEach(element => {
            element.classList.remove('active-nav');
        });
    }

    console.log(window.scrollY);
}