// ===== INICIALIZAÇÃO DO SITE =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Controlar tela de carregamento
    handleLoadingScreen();
    
    // Configurar navegação suave
    setupSmoothNavigation();
    
    // Configurar efeitos do header
    setupHeaderEffects();
    
    // Configurar interações dos produtos
    setupProductInteractions();
    
    // Configurar animações customizadas
    setupCustomAnimations();
});

// ===== TELA DE CARREGAMENTO =====
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingLogo = document.querySelector('.loading-logo');
    
    // Simular tempo de carregamento
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remover elemento após animação
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Adicionar efeito de pulso na logo durante carregamento
    loadingLogo.addEventListener('animationiteration', function() {
        this.style.animationDuration = '1.2s';
    });
}

// ===== NAVEGAÇÃO SUAVE =====
function setupSmoothNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Destacar link ativo na navegação
    window.addEventListener('scroll', highlightActiveNavLink);
}

// ===== EFEITOS DO HEADER =====
function setupHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Adicionar/remover classe baseada no scroll
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(139, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// ===== DESTACAR LINK ATIVO =====
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== INTERAÇÕES DOS PRODUTOS =====
function setupProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    const buyButtons = document.querySelectorAll('.buy-button');
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    
    // Efeitos hover nos cards de produto
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animação nos botões de compra
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar efeito de ripple
            createRippleEffect(e, this);
            
            // Adicionar feedback visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Funcionalidade dos botões de visualização rápida
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // Simular modal de visualização rápida
            showQuickViewModal(productCard);
        });
    });
}

// ===== EFEITO RIPPLE =====
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Adicionar CSS para o ripple se não existir
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== MODAL DE VISUALIZAÇÃO RÁPIDA =====
function showQuickViewModal(productCard) {
    const productName = productCard.querySelector('.product-name').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    const productImage = productCard.querySelector('.product-image img').src;
    const productDescription = productCard.querySelector('.product-description').textContent;
    
    // Criar modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-product">
                    <div class="modal-image">
                        <img src="${productImage}" alt="${productName}">
                    </div>
                    <div class="modal-info">
                        <h3>${productName}</h3>
                        <p>${productDescription}</p>
                        <div class="modal-price">${productPrice}</div>
                        <a href="https://shopee.com.br" target="_blank" class="modal-buy-btn">
                            <i class="fas fa-shopping-cart"></i>
                            Comprar na Shopee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar estilos do modal se não existir
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .quick-view-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-overlay {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            
            .modal-content {
                background: var(--secondary-black);
                border-radius: var(--border-radius);
                max-width: 800px;
                width: 100%;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: var(--white);
                font-size: 2rem;
                cursor: pointer;
                z-index: 1;
            }
            
            .modal-product {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                padding: 2rem;
            }
            
            .modal-image img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: var(--border-radius);
            }
            
            .modal-info h3 {
                font-family: var(--font-title);
                color: var(--white);
                margin-bottom: 1rem;
                font-size: 1.5rem;
            }
            
            .modal-info p {
                color: var(--gray-light);
                margin-bottom: 1.5rem;
            }
            
            .modal-price {
                font-size: 2rem;
                color: var(--bright-red);
                font-weight: 700;
                margin-bottom: 2rem;
            }
            
            .modal-buy-btn {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: linear-gradient(45deg, var(--blood-red), var(--bright-red));
                color: var(--white);
                text-decoration: none;
                border-radius: var(--border-radius);
                font-weight: 600;
                transition: var(--transition);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @media (max-width: 768px) {
                .modal-product {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Fechar modal
    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Fechar com ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// ===== ANIMAÇÕES CUSTOMIZADAS =====
function setupCustomAnimations() {
    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.product-card, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efeito parallax sutil no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ===== UTILITÁRIOS =====
// Função para debounce (otimização de performance)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce no scroll
window.addEventListener('scroll', debounce(function() {
    // Funções de scroll otimizadas
    highlightActiveNavLink();
}, 10));

// ===== EASTER EGG =====
// Sequência de teclas para ativar efeito especial
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateSpecialEffect();
        konamiCode = [];
    }
});

function activateSpecialEffect() {
    // Efeito especial: fazer todos os logos pulsarem
    const logos = document.querySelectorAll('.logo-img, .footer-logo-img');
    logos.forEach(logo => {
        logo.style.animation = 'pulse 1s ease-in-out infinite';
        setTimeout(() => {
            logo.style.animation = '';
        }, 4000);
    });
    
    // Mostrar mensagem especial
    const message = document.createElement('div');
    message.textContent = '⚔️ Código dos Cavaleiros Ativado! ⚔️';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, var(--blood-red), var(--bright-red));
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-family: var(--font-title);
        font-size: 1.2rem;
        z-index: 10001;
        animation: fadeIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

