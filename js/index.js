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

const image = document.querySelector('.intro');
    image.addEventListener('dblclick', (f) => {
        image.classList.toggle('large');
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
  
// const btnHover = document.querySelectorAll('.btn');
// btnHover.forEach(btn => {
//     btn.addEventListener('mouseover', (e) => {
//         TweenMax.to(e.target, 1, {
//             scale: 1.3,
//             filter: 'none',
//             ease: Elastic.easeOut.config( 1, 0.75)
//         })
//     })
//     btn.addEventListener('mouseleave', (e) => {
//         TweenMax.to(e.target, 0.5, {
//             scale: 1,
//             filter: 'grayscale(1) blur(3px)',
//             ease: Power1.easeIn
//         })
//     })
// });


