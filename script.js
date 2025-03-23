// Login Pop-up Functionality
const loginLink = document.getElementById('loginLink');
const loginPopup = document.getElementById('loginPopup');

if (loginLink && loginPopup) {
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginPopup.classList.contains('show')) {
            loginPopup.classList.remove('show');
            loginLink.textContent = 'Login';
            loginLink.classList.remove('active');
        } else {
            loginPopup.classList.add('show');
            loginLink.textContent = 'Close Login';
            loginLink.classList.add('active');
        }
    });
}

function closeLoginPopup() {
    if (loginPopup) {
        loginPopup.classList.remove('show');
        if (loginLink) {
            loginLink.textContent = 'Login';
            loginLink.classList.remove('active');
        }
    }
}

function submitLogin(event) {
    event.preventDefault();
    alert('Login successful! (This is a prototype message.)');
    closeLoginPopup();
}

// Close both pop-ups with the "Esc" key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFeedbackPopup();
        closeLoginPopup();
    }
});

// About page Toggle info btn
function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const btn = document.querySelector('.learn-more-btn');
    if (moreInfo.style.display === 'block') {
        moreInfo.style.display = 'none';
        btn.textContent = 'Learn More';
    } else {
        moreInfo.style.display = 'block';
        btn.textContent = 'Show Less';
    }
}

// Toggle the pop-up when the Contact link is clicked
const contactLink = document.getElementById('contactLink');
const popup = document.getElementById('feedbackPopup');

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Contact link clicked');
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        contactLink.textContent = 'Contact';
        contactLink.classList.remove('active');
        console.log('Pop-up closed');
    } else {
        popup.classList.add('show');
        contactLink.textContent = 'Close Contact';
        contactLink.classList.add('active');
        console.log('Pop-up opened');
    }
});

// Close the pop-up
function closePopup() {
    console.log('Closing pop-up via close button or form');
    popup.classList.remove('show');
    contactLink.textContent = 'Contact';
    contactLink.classList.remove('active');
}

// Handle feedback form submission
function submitFeedback(event) {
    event.preventDefault();
    alert('Thank you for your feedback! We’ll get back to you soon.');
    closePopup();
}

// Handle contact form submission
function submitContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
    document.getElementById('contactForm').reset(); // Reset the form
}

// Close the pop-up with the "Esc" key for accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

// Ride Action Buttons Functionality (Mock for Prototype)
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent;
        if (action === 'Cancel Ride') {
            if (confirm('Are you sure you want to cancel your ride?')) {
                alert('Ride cancelled. (This is a prototype message.)');
            }
        } else {
            alert(`${action} action initiated. (This is a prototype message.)`);
        }
    });
});

const map = new maplibregl.Map({
  style: 'https://tiles.openfreemap.org/styles/liberty',
  center: [13.388, 52.517],
  zoom: 9.5,
  container: 'map',
})