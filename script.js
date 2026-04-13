// ============================================
// JolpoddoBD - JavaScript Functionality
// ============================================

// DOM Elements
const bookingModal = document.getElementById('bookingModal');
const ctaBtn = document.querySelector('.cta-btn');
const bookingBtns = document.querySelectorAll('.package-card .btn-primary');
const closeBtn = document.querySelector('.close');
const bookingForm = document.querySelector('.booking-form');
const contactForm = document.querySelector('.contact-form');

// ============================================
// MODAL FUNCTIONALITY
// ============================================

// Open Booking Modal
function openBookingModal() {
    bookingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Booking Modal
function closeBookingModal() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners for Modal
ctaBtn.addEventListener('click', openBookingModal);

bookingBtns.forEach(btn => {
    btn.addEventListener('click', openBookingModal);
});

closeBtn.addEventListener('click', closeBookingModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// ============================================
// FORM HANDLING
// ============================================

// Booking Form Submission
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = bookingForm.querySelector('input[type="text"]').value;
        const email = bookingForm.querySelector('input[type="email"]').value;
        const phone = bookingForm.querySelector('input[type="tel"]').value;
        const date = bookingForm.querySelector('input[type="date"]').value;
        const guests = bookingForm.querySelector('input[type="number"]').value;
        const package = bookingForm.querySelector('select').value;
        
        // Validate
        if (!name || !email || !phone || !date || !guests || !package) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message
        showSuccessMessage('Booking request received! We will contact you soon.');
        
        // Reset form
        bookingForm.reset();
        
        // Close modal
        closeBookingModal();
        
        // Here you would typically send the data to your backend
        console.log({
            name,
            email,
            phone,
            date,
            guests,
            package
        });
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Validate
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message
        showSuccessMessage('Message sent successfully! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Here you would typically send the data to your backend
        console.log({
            name,
            email,
            phone,
            message
        });
    });
}

// ============================================
// SUCCESS MESSAGE
// ============================================

function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

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

// ============================================
// NAVBAR ACTIVE STATE
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all package cards and review cards
document.querySelectorAll('.package-card, .review-card, .why-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// GALLERY LIGHTBOX (OPTIONAL)
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        openLightbox(img.src, img.alt);
    });
});

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2500;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        animation: slideIn 0.3s ease;
    `;
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 40px;
        color: white;
        cursor: pointer;
        transition: color 0.3s ease;
    `;
    closeBtn.onmouseover = () => closeBtn.style.color = '#ccc';
    closeBtn.onmouseout = () => closeBtn.style.color = 'white';
    
    closeBtn.addEventListener('click', () => {
        lightbox.remove();
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });
    
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================

function sendWhatsAppMessage() {
    const phoneNumber = '8801234567890'; // Replace with your WhatsApp number
    const message = 'Hi JolpoddoBD, I am interested in booking a houseboat. Can you provide more information?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// MOBILE MENU TOGGLE (if needed)
// ============================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}

// ============================================
// INITIALIZATION
// ============================================

console.log('JolpoddoBD Website Loaded Successfully!');

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
