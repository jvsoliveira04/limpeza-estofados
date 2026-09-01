// Scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação e envio do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pega os valores do formulário
    const form = this;
    const formData = new FormData(form);
    
    // Aqui você poderia integrar com um serviço de email
    // Por enquanto, mostramos uma mensagem de sucesso
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    
    // Limpa o formulário
    form.reset();
});

// Efeito ao passar o mouse nas cards de serviço
document.querySelectorAll('.servico-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Highlight no menu quando scrollar
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animação ao carregar a página
window.addEventListener('load', function() {
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Adiciona a animação CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-links a.active {
        color: #3498db;
        border-bottom: 2px solid #3498db;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);