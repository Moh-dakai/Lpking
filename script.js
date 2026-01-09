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
});
