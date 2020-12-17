

// Introduction Animation

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });
tl.to('.intro', { y: '-100%', duration: 1}, '-=1');

// Title Animation

//.to('.title-text', { fontSize: '52px', opacity: 1, duration: 1, stagger: 0.25}, '-=1');

// Text Animation

//tl.fromTo('.initialisation-text', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1}, '-=1')