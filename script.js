function toggleTheme() {
    const card = document.querySelector('.profile-card');
    card.classList.toggle('dark');
    card.classList.toggle('light');
    }
    function toggleContact() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' :
    'none';
    }
