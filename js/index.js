// Your code goes here
// import TweenMax from "gsap/TweenMax";

const header = document.querySelectorAll('a');
header.forEach( a => {
    a.addEventListener('mouseover', (d) => {
    d.target.style.backgroundColor = '#17A2B8';
    })
    a.addEventListener('mouseleave', (d) => {
    d.target.style.backgroundColor = '#FFFFFF';
    })
});

const intro = document.querySelector('.intro');
    intro.addEventListener('dblclick', (f) => {
        intro.classList.toggle('large');
    });

const image = document.querySelector('.intro img');
    image.addEventListener('dblclick', (f) => {
        f.stopPropagation();
    });

const likeBtn = document.querySelector('.btn');
    likeBtn.addEventListener('click', e => {
    // Make sure your click event is firing
    console.log(`Work button fired a click event!`);
    
});

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }

let scale = 1;
const el = document.querySelector('footer');
el.onwheel = zoom; 

const log = document.querySelector('body');
    window.addEventListener('load', () => {
        console.log('page has loaded');
    });

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    // Do something with the scroll position
    console.log(`scrollin dirty`);
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
        });

        ticking = true;
    }
});

const preventer = document.querySelectorAll('.nav-link');
    preventer.forEach( a => {
        a.addEventListener('click', function(event) {
            console.log(`the Nav will not work`);
            event.preventDefault();
        })
    });
  
const btnHover = document.querySelectorAll('.btn');
btnHover.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
        TweenMax.to(e.target, 1, {
            scale: 1.3,
            filter: 'none',
            ease: Elastic.easeOut.config( 1, 0.75)
        })
    })
    btn.addEventListener('mouseleave', (e) => {
        TweenMax.to(e.target, 0.5, {
            scale: 1,
            filter: 'grayscale(1) blur(3px)',
            ease: Power1.easeIn
        })
    })
});


