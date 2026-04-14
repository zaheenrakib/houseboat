// ============================================
// JolpoddoBD - JavaScript Functionality
// ============================================

// DOM Elements
const welcomeModal = document.getElementById('welcomeModal');
const closeWelcome = document.querySelector('.close-welcome');
const closeModalBtn = document.querySelector('.close-modal-btn');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const currentMonthYear = document.getElementById('currentMonthYear');
const calendarDays = document.getElementById('calendarDays');

const bookingModal = document.getElementById('bookingModal');
const ctaBtn = document.querySelector('.cta-btn');
const bookingBtns = document.querySelectorAll('.package-card .btn-primary');
const closeBtn = document.querySelector('.close');
const bookingForm = document.querySelector('.booking-form');
const contactForm = document.querySelector('.contact-form');

// Calendar State
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Bangla Names
const banglaMonths = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

const banglaNumbers = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

function toBanglaNumber(n) {
    return n.toString().split('').map(char => banglaNumbers[char] || char).join('');
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

// Open Welcome Modal
function openWelcomeModal() {
    if (welcomeModal) {
        welcomeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        renderCalendar(currentMonth, currentYear);
    }
}

// Close Welcome Modal
function closeWelcomeModal() {
    welcomeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

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

if (closeWelcome) closeWelcome.addEventListener('click', closeWelcomeModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeWelcomeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
    if (e.target === welcomeModal) {
        closeWelcomeModal();
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
            alert('অনুগ্রহ করে সব ঘর পূরণ করুন');
            return;
        }
        
        // Show success message
        showSuccessMessage('বুকিং অনুরোধ পাওয়া গেছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        
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
            alert('অনুগ্রহ করে সব ঘর পূরণ করুন');
            return;
        }
        
        // Show success message
        showSuccessMessage('বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        
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
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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
// CALENDAR LOGIC
// ============================================

function renderCalendar(month, year) {
    calendarDays.innerHTML = '';
    
    // Set Header
    currentMonthYear.textContent = `${banglaMonths[month]} ${toBanglaNumber(year)}`;
    
    // First day of month
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust for Bengali week starting with Saturday (if needed, but here we stay consistent with HTML)
    // HTML has: শনি, রবি, সোম, মঙ্গল, বুধ, বৃহস্পতি, শুক্র
    // JS getDay(): 0 (Sun), 1 (Mon), ..., 6 (Sat)
    // We want Shoni (Sat) to be 0 for our CSS grid
    let adjustedFirstDay = (firstDay + 1) % 7; 

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty slots
    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        calendarDays.appendChild(emptyDiv);
    }
    
    // Today's date for reference
    const today = new Date();
    
    // Mock Availability (you could replace this with real data)
    const bookedDates = [5, 6, 12, 13, 20, 25, 26]; 

    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = toBanglaNumber(day);
        dayDiv.classList.add('day');
        
        // Check if booked or available (Mocking)
        if (day < today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.style.opacity = '0.3';
            dayDiv.style.cursor = 'default';
        } else if (bookedDates.includes(day)) {
            dayDiv.classList.add('booked');
        } else {
            dayDiv.classList.add('available');
        }
        
        calendarDays.appendChild(dayDiv);
    }
}

// Month Navigation
if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
}

// Show Modal on Load
window.addEventListener('load', () => {
    setTimeout(openWelcomeModal, 500); // Small delay for effect
});

// ============================================
// WHATSAPP INTEGRATION
// ============================================

function sendWhatsAppMessage() {
    const phoneNumber = '8801234567890'; // Replace with your WhatsApp number
    const message = 'নমস্কার জলপদ্ম বিডি, আমি হাউসবোট বুকিং করতে আগ্রহী। বিস্তারিত তথ্য দিলে ভালো হয়।';
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
