document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(this.value)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Please enter a valid email address');
        }
    });

    // Thêm smooth scrolling cho navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Xử lý sự kiện gửi form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn hành động gửi form mặc định

        // Hiển thị thông báo thành công
        formMessage.textContent = "Your message has been sent successfully!";
        formMessage.classList.remove('hidden', 'text-red-500');
        formMessage.classList.add('text-green-500');

        // Reset form
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(this.value)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Please enter a valid email address');
        }
    });

    // Thêm smooth scrolling cho navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Xử lý sự kiện gửi form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn hành động gửi form mặc định

        // Hiển thị thông báo thành công
        formMessage.textContent = "Your message has been sent successfully!";
        formMessage.classList.remove('hidden', 'text-red-500');
        formMessage.classList.add('text-green-500');

        // Reset form
        contactForm.reset();
    });

    // Xử lý sự kiện nhấp vào biểu tượng menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Kích hoạt hoặc ẩn menu
    });
});