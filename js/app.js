// Efecto de desplazamiento suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Animación al hacer scroll
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio-card, .trabajo-card, .sobre-contenido').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observador.observe(el);
});

console.log("✅ ¡Portafolio cargado con éxito! 🎨");