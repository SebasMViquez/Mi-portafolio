// Inicializar AOS 
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});

// ======== GSAP y ScrollTrigger Animaciones ========

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

// Animación inicial del Hero
gsap.from(".hero-text", { 
  duration: 1.2, 
  x: -100, 
  opacity: 0, 
  ease: "power2.out" 
});

gsap.from(".hero-img", { 
  duration: 1.2, 
  x: 100, 
  opacity: 0, 
  delay: 0.3, 
  ease: "power2.out" 
});

// Animación general de secciones al hacer scroll
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%", // empieza cuando el 90% del viewport ve la sección
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });
});

// Efecto sutil de entrada lateral en los proyectos
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    x: i % 2 === 0 ? -100 : 100, // alterna entrada desde izquierda o derecha
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

anime({
  targets: '.hero-text h2 span',
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(100),
  easing: 'easeOutExpo',
  duration: 1200
});

