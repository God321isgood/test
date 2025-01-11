/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
            });
        }
    })

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

/*==================== form submission ====================*/
const contactForm = document.querySelector('.contact form');
const submitBtn = contactForm.querySelector('input[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Change button text and disable it during submission
    const originalBtnText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('https://formspree.io/f/xdkkyeen', {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success message
            contactForm.reset();
            showMessage('Message sent successfully!', 'success');
        } else {
            // Error message
            showMessage('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        showMessage('Something went wrong. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.value = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Function to show messages
function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = text;
    
    // Add styles for the message
    messageDiv.style.padding = '10px';
    messageDiv.style.marginTop = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.textAlign = 'center';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#4BB543';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.style.backgroundColor = '#ff3333';
        messageDiv.style.color = 'white';
    }

    // Remove any existing messages
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Add new message
    contactForm.appendChild(messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

/*==================== scroll reveal ====================*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-box, .contact form', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, ', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('#multiple-text',{
    strings: ['Frontend Developer', 'Backend Developer','Graphic designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true,
});