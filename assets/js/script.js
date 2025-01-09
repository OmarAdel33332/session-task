let links = document.querySelectorAll('.link');
let navScroll = document.querySelector('.navbar');
let navScrollA = document.querySelectorAll('.nav-link');
let navHeight = navScroll.offsetHeight;
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', function() {
    scroll = window.scrollY;
    sections.forEach((section, index) => {
        if (scroll >= section.offsetTop - navHeight - 180) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
        else if (scroll < sections[0].offsetTop - navHeight - 130) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
        }
    });
});
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        window.scrollTo(0,sections[i-1].offsetTop - navHeight);
    });
}
window.addEventListener('scroll', function() {
if (scroll > 0) {
    navScroll.classList.add('bg-light');
    navScroll.style = 'box-shadow: 0 2px 4px rgba(0,0,0,.1)';
    links.forEach(link => {
        link.classList.add('link-out');});
}else {
    navScroll.classList.remove('bg-light');
    navScroll.style = 'box-shadow: none';
    links.forEach(link => {
        link.classList.remove('link-out');
    }
    );
}});
let scrollUp = document.querySelector('.scroll-up');
let about = document.querySelector('.about');
window.addEventListener('scroll', function() {
    if (scroll > about.offsetTop) {
        scrollUp.style = 'display: flex';
    } else {
        scrollUp.style = 'display: none';
    }
});
scrollUp.addEventListener('click', function() {
    window.scrollTo(0,0);
});
let inputs = document.querySelectorAll('.form-control');
let invalids = document.querySelectorAll('.invalid-label');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', function() {
        if (inputs[i].value == '') {
            inputs[i].classList.add('is-invalid');
            inputs[i].classList.remove('is-valid');
            inputs[i].classList.remove('mb-3');
            invalids[i].style = 'display: block';
        } else {
            invalids[i].style = 'display: none';
            inputs[i].classList.remove('is-invalid');
            inputs[i].classList.add('is-valid');
            inputs[i].classList.add('mb-3');
        }
    });
}

