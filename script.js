document.addEventListener("DOMContentLoaded", function() {
    // Initialize audio player
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = 0.3;
    
    // Enable audio on first user interaction
    function enableAudio() {
        audioPlayer.play().catch(e => console.log("Audio play failed:", e));
        document.body.removeEventListener('click', enableAudio);
    }
    document.body.addEventListener('click', enableAudio);
    
    // Welcome button functionality
    const welcomeBtn = document.getElementById('myBtn');
    const inviteSection = document.getElementById('invite');
    
    welcomeBtn.addEventListener('click', function() {
        inviteSection.style.display = "block";
        welcomeBtn.style.display = "none";
        audioPlayer.play().catch(e => console.log("Audio play failed:", e));
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Countdown timer
    function updateCountdown() {
        const weddingDate = new Date('January 20, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('timer').innerHTML = "We're Married!";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('timer').innerHTML = 
            `<span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Gallery modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            document.body.style.overflow = "hidden";
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    // Quotes functionality
    const quotes = [
        "Kitna Khuoobsurat chehra h tmhara, Har dil to surbhi diwana hai tmhara.",
        "Aur log kahte h tm tukra ho chand ka, par main to kahta hu chand bhi tukra h tmhara.",
        "Saath tere jeena hai, saat tere marna hai, Manoj ko bas Puja se hi mohabbat krna hai.",
        "Manoj ki Pooja, dil ki har dharkan hai, Teri muskaan mein hi uski saari jnnat hai."
    ];
    
    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').textContent = quotes[randomIndex];
    }
    
    // RSVP form handling
    const rsvpForm = document.getElementById('rsvpForm');
    const confirmation = document.getElementById('confirmation');
    
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (!name || !email) {
            confirmation.textContent = "Please fill in all required fields";
            confirmation.style.color = "red";
            return;
        }
        
        // In a real implementation, you would send this data to a server
        confirmation.textContent = "Thank you for your RSVP! We look forward to seeing you.";
        confirmation.style.color = "green";
        rsvpForm.reset();
        
        // Simulate server response
        setTimeout(() => {
            confirmation.textContent = "";
        }, 5000);
    });
    
    // Live button functionality
    window.Live = function() {
        alert("It will go live on the 20th of December. See you there!");
        return false;
    };
});

// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Close menu when clicking a link
    if (nav.classList.contains('active')) {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});