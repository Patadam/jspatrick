// Introduction Animation

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


//tl.to('.text', { x: '0%', duration: 1, stagger: 0.25 });
//tl.to('.about-intro', { x: '100%', duration: 1.5, delay: 0}, '-=3.2');


tl.fromTo('.about-intro', { x: '0%' }, { x: '100%', duration: 1, delay: 1.5});
//tl.fromTo('.text', { x: '0%' }, { x: '100%', duration: 1.5}, '-=1.5');