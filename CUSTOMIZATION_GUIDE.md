# JolpoddoBD Website - Complete Customization Guide

This guide will help you customize every aspect of the JolpoddoBD website to match your business needs.

## 📋 Table of Contents
1. [Text Content](#text-content)
2. [Images](#images)
3. [Colors & Styling](#colors--styling)
4. [Contact Information](#contact-information)
5. [Packages & Pricing](#packages--pricing)
6. [Reviews & Testimonials](#reviews--testimonials)
7. [Forms & Functionality](#forms--functionality)
8. [Advanced Customization](#advanced-customization)

---

## 📝 Text Content

### Hero Section
**File:** `index.html`
**Location:** Find the `<section id="home" class="hero">` section

```html
<!-- Current -->
<h1 class="hero-title">Experience Serenity on Water</h1>
<p class="hero-subtitle">Luxury houseboat experiences, affordable packages, and unforgettable river adventures in Bangladesh</p>

<!-- Change to your text -->
<h1 class="hero-title">Your Custom Headline</h1>
<p class="hero-subtitle">Your custom subtitle here</p>
```

### Business Name & Logo
**File:** `index.html`
**Location:** Navigation bar

```html
<!-- Current -->
<h1>🚤 JolpoddoBD</h1>

<!-- Change to -->
<h1>🚤 Your Business Name</h1>
```

You can replace the emoji with any other emoji or use an image:
```html
<!-- Using image instead -->
<img src="your-logo.png" alt="Logo" style="height: 40px;">
```

### Section Titles
Find and replace all section titles:
- "Our Packages"
- "Why Choose JolpoddoBD?"
- "Gallery"
- "Customer Reviews"
- "Get In Touch"

### Navigation Links
**File:** `index.html`
**Location:** `<ul class="nav-links">`

```html
<li><a href="#home">Home</a></li>
<li><a href="#packages">Packages</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#reviews">Reviews</a></li>
<li><a href="#contact">Contact</a></li>
```

Add or remove links as needed. Make sure the `href` matches the section `id`.

---

## 🖼️ Images

### Hero Image
**File:** `index.html`
**Location:** Inside `.hero-image` div

```html
<!-- Current -->
<img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498357489/kNAYpW6dUMDAWtbs7PRuz3/jolpoddo-hero-5X5cnQBky2GCC5erCyKrWx.webp" alt="Luxury Houseboat at Sunset">

<!-- Replace with your image URL -->
<img src="YOUR_IMAGE_URL_HERE" alt="Your Description">
```

### Package Images
**File:** `index.html`
**Location:** Inside each `.package-card`

```html
<div class="package-image">
    <img src="YOUR_IMAGE_URL_HERE" alt="Package Name">
</div>
```

### Gallery Images
**File:** `index.html`
**Location:** Inside `.gallery-grid`

```html
<div class="gallery-item">
    <img src="YOUR_IMAGE_URL_HERE" alt="Description">
    <p>Description</p>
</div>
```

### Where to Get Images

**Free Stock Photo Sites:**
- [Unsplash](https://unsplash.com) - High quality, free
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images
- [Freepik](https://freepik.com) - Design resources

**Paid Options:**
- [Shutterstock](https://shutterstock.com)
- [Getty Images](https://gettyimages.com)
- [Adobe Stock](https://stock.adobe.com)

**Image Hosting:**
- [Imgur](https://imgur.com) - Free image hosting
- [Cloudinary](https://cloudinary.com) - Free tier available
- [Imgbb](https://imgbb.com) - Free image hosting

---

## 🎨 Colors & Styling

### Primary Colors
**File:** `styles.css`
**Location:** `:root` section at the top

```css
:root {
    --primary-blue: #0066cc;      /* Main brand color */
    --light-blue: #e6f2ff;        /* Light backgrounds */
    --accent-gold: #d4a574;       /* Accent color */
    --dark-text: #1a1a1a;         /* Main text */
    --light-text: #666666;        /* Secondary text */
    --white: #ffffff;             /* White */
}
```

### How to Change Colors

1. **Find a color you like:**
   - Use [Color Picker](https://htmlcolorcodes.com)
   - Use [Coolors](https://coolors.co) for color palettes

2. **Get the hex code** (e.g., #FF5733)

3. **Replace in CSS:**
```css
--primary-blue: #FF5733;  /* Your new color */
```

### Example Color Schemes

**Ocean Blue Theme:**
```css
--primary-blue: #006994;
--light-blue: #e0f4ff;
--accent-gold: #ff9500;
```

**Luxury Gold Theme:**
```css
--primary-blue: #1a1a1a;
--light-blue: #f5f5f5;
--accent-gold: #d4af37;
```

**Tropical Green Theme:**
```css
--primary-blue: #2d6a4f;
--light-blue: #d8f3dc;
--accent-gold: #ff9f1c;
```

### Button Styling
**File:** `styles.css`

```css
.btn-primary {
    background: var(--primary-blue);  /* Change primary color */
    color: var(--white);
}

.btn-primary:hover {
    background: #0052a3;  /* Darker shade on hover */
}
```

---

## 📞 Contact Information

### Phone & Email
**File:** `index.html`
**Location:** Contact section and footer

```html
<!-- Find and replace -->
<strong>📞 Phone:</strong>
<p>+880 1234 567890</p>

<strong>📧 Email:</strong>
<p>info@jolpoddo.com</p>
```

### Address
```html
<strong>📍 Address:</strong>
<p>Dhaka, Bangladesh</p>
```

### WhatsApp Number
**File:** `index.html`
**Location:** WhatsApp button at bottom

```html
<!-- Current -->
<a href="https://wa.me/8801234567890" class="whatsapp-btn">

<!-- Change to your number (without + or spaces) -->
<a href="https://wa.me/YOUR_NUMBER_HERE" class="whatsapp-btn">
```

Example: `https://wa.me/8801234567890`

### Social Links
**File:** `index.html`
**Location:** Footer social links

```html
<a href="https://facebook.com/your-page">Facebook</a>
<a href="https://instagram.com/your-page">Instagram</a>
<a href="https://wa.me/your-number">WhatsApp</a>
```

---

## 💰 Packages & Pricing

### Update Package Information
**File:** `index.html`
**Location:** `.packages-grid` section

```html
<div class="package-card">
    <div class="package-image">
        <img src="IMAGE_URL" alt="Package Name">
    </div>
    <h3>Package Name</h3>
    <p class="price">৳ PRICE/night</p>
    <ul class="features">
        <li>✓ Feature 1</li>
        <li>✓ Feature 2</li>
        <li>✓ Feature 3</li>
        <li>✓ Feature 4</li>
    </ul>
    <button class="btn btn-primary">View Details</button>
</div>
```

### Add New Package
1. Copy an entire `.package-card` div
2. Paste it in the `.packages-grid`
3. Update all the details
4. Update the image URL

### Remove Package
Simply delete the entire `.package-card` div

### Mark as Featured
Add `featured` class to make a package stand out:
```html
<div class="package-card featured">
    <!-- Add this badge -->
    <div class="badge">Most Popular</div>
    ...
</div>
```

---

## ⭐ Reviews & Testimonials

### Update Reviews
**File:** `index.html`
**Location:** `.reviews-grid` section

```html
<div class="review-card">
    <div class="stars">★★★★★</div>
    <p class="review-text">"Your review text here"</p>
    <p class="review-author">- Customer Name</p>
</div>
```

### Add New Review
1. Copy a `.review-card` div
2. Paste it in the `.reviews-grid`
3. Update the review text and author name
4. Adjust stars (★) as needed

### Star Ratings
- 5 stars: `★★★★★`
- 4 stars: `★★★★☆`
- 3 stars: `★★★☆☆`

---

## 📋 Forms & Functionality

### Booking Form
**File:** `index.html`
**Location:** Inside `#bookingModal`

The form currently includes:
- Full Name
- Email
- Phone Number
- Date
- Number of Guests
- Package Selection
- Special Requests

To add more fields:
```html
<input type="text" placeholder="New Field" required>
```

### Contact Form
**File:** `index.html`
**Location:** Contact section

Currently includes:
- Name
- Email
- Phone
- Message

### Form Validation
**File:** `script.js`

The forms validate that all required fields are filled. To customize:

```javascript
// In script.js, find the form submission handler
if (!name || !email || !phone || !message) {
    alert('Please fill in all fields');
    return;
}
```

### Success Messages
**File:** `script.js`

```javascript
showSuccessMessage('Booking request received! We will contact you soon.');
```

Change the message text as needed.

### Send Data to Backend
**File:** `script.js`

Currently, form data is logged to console. To send to your backend:

```javascript
// Replace console.log with:
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name,
        email,
        phone,
        message
    })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

---

## 🔧 Advanced Customization

### Change Fonts
**File:** `index.html`
**Location:** `<head>` section

```html
<!-- Current -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

<!-- Find different fonts at Google Fonts -->
<!-- Example: Change to Roboto and Merriweather -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Merriweather:wght@700&display=swap" rel="stylesheet">
```

Then update in `styles.css`:
```css
body {
    font-family: 'Roboto', sans-serif;  /* Changed from Poppins */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;  /* Changed from Playfair Display */
}
```

### Add Custom CSS
**File:** `styles.css`

Add your custom styles at the end of the file:

```css
/* Custom Styles */
.my-custom-class {
    background: #your-color;
    padding: 2rem;
    border-radius: 10px;
}
```

### Modify Animations
**File:** `styles.css`

Find animation definitions:
```css
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
```

Change the `translateY(30px)` value to adjust animation distance.

### Add Analytics
Add Google Analytics to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

### Add SEO Meta Tags
**File:** `index.html`
**Location:** `<head>` section

```html
<meta name="description" content="Your business description">
<meta name="keywords" content="houseboat, rental, Bangladesh, river">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Business Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-image-url.jpg">
```

---

## 🚀 Deployment Checklist

Before deploying, make sure to:

- [ ] Update all business information
- [ ] Replace all placeholder images
- [ ] Update contact information and WhatsApp number
- [ ] Customize colors to match your brand
- [ ] Update all text content
- [ ] Test all forms and links
- [ ] Test on mobile devices
- [ ] Check all images load correctly
- [ ] Update social media links
- [ ] Add analytics code
- [ ] Test WhatsApp button functionality

---

## 💡 Pro Tips

1. **Keep Backups** - Save original files before making changes
2. **Test Changes** - Always test in browser before deploying
3. **Mobile First** - Test on mobile devices
4. **Image Optimization** - Compress images for faster loading
5. **Regular Updates** - Keep content fresh and current
6. **Monitor Performance** - Use Google Analytics to track visitors
7. **Respond Quickly** - Reply to inquiries promptly

---

## 📞 Need Help?

- Check the README.md for basic setup
- Review the HTML comments in index.html
- Test in browser DevTools (F12)
- Use online resources like MDN or W3Schools

---

**Happy Customizing! 🎉**
