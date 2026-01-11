// Pricing Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');
    const priceElement = document.getElementById('price');
    const periodElement = document.getElementById('period');

    // Initial state: Monthly
    let isMonthly = true;
    const monthlyPrice = 99;
    const yearlyPrice = 999; // Assuming yearly is 999 for example

    monthlyBtn.addEventListener('click', function() {
        if (!isMonthly) {
            isMonthly = true;
            monthlyBtn.classList.add('active');
            yearlyBtn.classList.remove('active');
            priceElement.textContent = `$${monthlyPrice}`;
            periodElement.textContent = '/month';
        }
    });

    yearlyBtn.addEventListener('click', function() {
        if (isMonthly) {
            isMonthly = false;
            yearlyBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            priceElement.textContent = `$${yearlyPrice}`;
            periodElement.textContent = '/year';
        }
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu after clicking a link
            const navbarNav = document.querySelector('.navbar-nav');
            const hamburgerBtn = document.getElementById('hamburger');
            navbarNav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });

    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger');
    const navbarNav = document.querySelector('.navbar-nav');

    hamburgerBtn.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');

    // Toggle icon
    if (isLightMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});
