// ========================================
// SCRIPT PRINCIPAL - Semana 8
// ========================================

// ========================================
// 1. BOTÓN DE ALERTA PERSONALIZADA
// ========================================

document.getElementById('alertBtn').addEventListener('click', function() {
    const alertMessages = [
        '¡Hola! Gracias por visitarnos 👋',
        '¡Sorpresa! Este proyecto es increíble 🚀',
        'JavaScript es poderoso ✨',
        '¡Sigue explorando nuestro sitio! 🔍',
        'Estamos aquí para servirte 💼'
    ];

    const randomMessage = alertMessages[Math.floor(Math.random() * alertMessages.length)];
    alert(randomMessage);
});

// ========================================
// 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ========================================

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Función para validar el nombre
function validateNombre(nombre) {
    return nombre.trim().length >= 3;
}

// Función para validar el correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar el mensaje
function validateMensaje(mensaje) {
    return mensaje.trim().length >= 10;
}

// Mostrar error en el campo
function showError(inputElement, errorElementId, isValid) {
    if (!isValid) {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
    } else {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
    }
}

// Validación en tiempo real (mientras escribe)
document.getElementById('nombre').addEventListener('blur', function() {
    const isValid = validateNombre(this.value);
    showError(this, 'nombreError', isValid);
});

document.getElementById('nombre').addEventListener('input', function() {
    if (this.classList.contains('is-invalid')) {
        const isValid = validateNombre(this.value);
        showError(this, 'nombreError', isValid);
    }
});

document.getElementById('email').addEventListener('blur', function() {
    const isValid = validateEmail(this.value);
    showError(this, 'emailError', isValid);
});

document.getElementById('email').addEventListener('input', function() {
    if (this.classList.contains('is-invalid')) {
        const isValid = validateEmail(this.value);
        showError(this, 'emailError', isValid);
    }
});

document.getElementById('mensaje').addEventListener('blur', function() {
    const isValid = validateMensaje(this.value);
    showError(this, 'mensajeError', isValid);
});

document.getElementById('mensaje').addEventListener('input', function() {
    if (this.classList.contains('is-invalid')) {
        const isValid = validateMensaje(this.value);
        showError(this, 'mensajeError', isValid);
    }
});

document.getElementById('asunto').addEventListener('change', function() {
    if (this.value === '') {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    }
});

document.getElementById('terminos').addEventListener('change', function() {
    if (this.checked) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    } else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
    }
});

// ========================================
// 3. MANEJO DEL ENVÍO DEL FORMULARIO
// ========================================

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const terminos = document.getElementById('terminos').checked;

    // Validar todos los campos
    const isNombreValid = validateNombre(nombre);
    const isEmailValid = validateEmail(email);
    const isMensajeValid = validateMensaje(mensaje);
    const isAsuntoValid = asunto !== '';

    // Mostrar errores en los campos
    showError(document.getElementById('nombre'), 'nombreError', isNombreValid);
    showError(document.getElementById('email'), 'emailError', isEmailValid);
    showError(document.getElementById('mensaje'), 'mensajeError', isMensajeValid);
    showError(document.getElementById('asunto'), 'asuntoError', isAsuntoValid);
    showError(document.getElementById('terminos'), 'terminosError', terminos);

    // Si toda la validación es correcta
    if (isNombreValid && isEmailValid && isMensajeValid && isAsuntoValid && terminos) {
        // Simular envío del formulario
        console.log('Formulario válido. Datos:');
        console.log({
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje
        });

        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';

        // Limpiar el formulario
        contactForm.reset();

        // Limpiar las validaciones visuales
        document.querySelectorAll('.form-control, .form-select, .form-check-input').forEach(element => {
            element.classList.remove('is-valid', 'is-invalid');
        });

        // Desaparecer el mensaje de éxito después de 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);

        // Scroll al mensaje de éxito
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.log('Formulario inválido. Corrija los errores.');
    }
});

// ========================================
// 4. FUNCIONALIDAD ADICIONAL: LIMPIAR VALIDACIONES AL RESETEAR
// ========================================

const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.addEventListener('click', function() {
    // Limpiar las clases de validación después de que se limpie el formulario
    setTimeout(() => {
        document.querySelectorAll('.form-control, .form-select, .form-check-input').forEach(element => {
            element.classList.remove('is-valid', 'is-invalid');
        });
        successMessage.style.display = 'none';
    }, 0);
});

// ========================================
// 5. ANIMACIÓN DE SCROLL PARA LAS SECCIONES
// ========================================

// Observador para animar elementos cuando entran en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out forwards';
        }
    });
}, observerOptions);

// Observar todas las secciones
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ========================================
// 6. FUNCIÓN PARA AGREGAR EFECTOS A LOS BOTONES
// ========================================

const buttons = document.querySelectorAll('button, a.btn');
buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        // Crear efecto de onda (ripple)
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remover ripple anterior si existe
        const oldRipple = this.querySelector('.ripple');
        if (oldRipple) oldRipple.remove();

        this.appendChild(ripple);
    });
});

// ========================================
// 7. MONITOREO DE ENTRADA DE DATOS EN TIEMPO REAL
// ========================================

// Contador de caracteres para el mensaje
const mensajeInput = document.getElementById('mensaje');
const mensajeContainer = mensajeInput.parentElement;

const charCounter = document.createElement('small');
charCounter.style.display = 'block';
charCounter.style.marginTop = '0.5rem';
charCounter.style.color = '#6c757d';
mensajeContainer.appendChild(charCounter);

mensajeInput.addEventListener('input', function() {
    const charCount = this.value.length;
    charCounter.textContent = `${charCount} caracteres (Mínimo: 10)`;

    if (charCount < 10) {
        charCounter.style.color = '#dc3545';
    } else {
        charCounter.style.color = '#198754';
    }
});

// ========================================
// 8. VALIDACIÓN DE TELÉFONO (OPCIONAL)
// ========================================

const telefonoInput = document.getElementById('telefono');
telefonoInput.addEventListener('input', function() {
    // Permitir solo números y algunos caracteres especiales
    this.value = this.value.replace(/[^\d\-\+\(\)\s]/g, '');
});

// ========================================
// 9. CARGAR ANIMACIÓN AL CARGAR LA PÁGINA
// ========================================

window.addEventListener('load', function() {
    console.log('Página cargada correctamente');
    document.body.style.opacity = '1';
});

// ========================================
// 10. FUNCIONALIDAD DE BREADCRUMB DINÁMICO
// ========================================

// Detectar la sección actual mientras se hace scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header .nav-link');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// 11. CONSOLA DE INFORMACIÓN
// ========================================

console.log('%c=== Página Cargada Exitosamente ===', 'color: #0d6efd; font-size: 16px; font-weight: bold;');
console.log('%cSemana 8 - Bootstrap y JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('%cFormulario con validación en tiempo real activada', 'color: #198754; font-size: 12px;');
console.log('%cTodos los elementos interactivos están listos', 'color: #17a2b8; font-size: 12px;');

// ========================================
// FIN DEL SCRIPT
// ========================================
