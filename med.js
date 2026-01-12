document.addEventListener('DOMContentLoaded', () => {
    
    const emergencyCallBtn = document.getElementById('emergencyCallBtn');

     emergencyCallBtn.addEventListener('click', () => {
        const isConfirmed = confirm("Are you sure you want to call 112 for emergency services?");
        if (isConfirmed) {
            window.location.href = 'tel:112';
        }
    });
});

let userLatitude = null;
let userLongitude = null;
document.getElementById('shareLocationBtn').onclick = function() {
    const status = document.getElementById('locationStatus');
    const btn = document.getElementById('shareLocationBtn');
    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser.";
        return;
    }
    status.textContent = "Sharing location...";
    navigator.geolocation.getCurrentPosition(
        function(position) {
            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;
            status.innerHTML = `<span class="location-coords">Latitude: ${userLatitude}<br>Longitude: ${userLongitude}</span>`;
            btn.textContent = "Location Shared";
            btn.disabled = true;
            btn.style.background = "#b2dfdb";
            btn.style.color = "#555";
            btn.style.cursor = "default";

            document.getElementById('findHospitalsBtn').style.display = 'flex';
        },
        function() {
            status.textContent = "Unable to retrieve your location.";
        }
    );
};

document.getElementById('findHospitalsBtn').onclick = function(e) {
    e.preventDefault(); 
    if (userLatitude && userLongitude) {
        const mapsUrl = `https://www.google.com/maps/search/hospitals/@${userLatitude},${userLongitude},14z`;
        window.open(mapsUrl, '_blank');
    } else {
        alert('Please share your location first by clicking the "Share Location" button.');
    }
};

const healthyTips = [
    "Drinking a glass of warm water in the morning helps flush out toxins, jumpstarts your metabolism, and aids digestion. Add a slice of lemon for extra benefits like improved immunity and skin health.",
    "Incorporate seasonal fruits and colorful vegetables into your meals. They are packed with essential vitamins, minerals, and fiber that support digestion, improve skin, and boost overall energy.",
    "Even 30 minutes of walking, yoga, or light stretching can improve heart health, reduce stress, and strengthen muscles. Consistency matters more than intensity—make movement a daily habit.",
    "Aim for 7–8 hours of quality sleep every night. Proper rest helps your body recover, supports mental clarity, and balances your hormones. Avoid screens at least 30 minutes before bedtime.",
    "Take 5 minutes daily to sit quietly, breathe deeply, or practice gratitude. This simple habit lowers stress levels, sharpens focus, and promotes emotional well-being throughout the day.",
    "Swish a tablespoon of coconut or sesame oil in your mouth for 5–10 minutes before brushing. This ancient Ayurvedic practice helps reduce bacteria, freshens breath, and supports gum health naturally.",
    "To prevent digital eye strain, every 20 minutes, look at something 20 feet away for 20 seconds. This simple habit reduces eye fatigue, especially for those who spend long hours on screens.",
    "Avoid eating in front of your phone or TV. Mindful eating improves digestion, prevents overeating, and enhances your connection with food—helping your body recognize true hunger and fullness.",
    "Write down 3 things you're grateful for every night. This small mental shift boosts emotional well-being, improves sleep quality, and lowers stress over time.",
    "Expose your skin to early morning sunlight for 10–15 minutes to boost your Vitamin D levels naturally. It supports bone health, improves mood, and regulates sleep cycles.",
    "Add a pinch of turmeric and grated ginger to your meals or teas. These natural anti-inflammatories support immunity, reduce joint pain, and enhance digestion.",
    "Dedicate one hour a day to be completely offline—no phones, laptops, or notifications. Use this time to walk, read, reflect, or talk to someone. It refreshes your mind and helps you reconnect with the present."
];

let tipIndex = 0;
const tipText = document.getElementById('healthyTipText');

function showNextTip() {
    tipText.style.opacity = 0;
    setTimeout(() => {
        tipIndex = (tipIndex + 1) % healthyTips.length;
        tipText.textContent = healthyTips[tipIndex];
        tipText.style.opacity = 1;
    }, 500);
}

setInterval(showNextTip, 6000); 



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle mobile navigation links
    const mobileNavLinks = mobileNav.querySelectorAll('.pages');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Handle mobile buttons (login, signup)
    const loginBtnMobile = document.getElementById('loginBtnMobile');
    const signupBtnMobile = document.getElementById('signupBtnMobile');
    const userIconMobile = document.getElementById('userIconMobile');

    if (loginBtnMobile) {
        loginBtnMobile.addEventListener('click', function() {
            // Trigger same function as desktop login
            document.getElementById('loginBtn').click();
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (signupBtnMobile) {
        signupBtnMobile.addEventListener('click', function() {
            // Trigger same function as desktop signup
            document.getElementById('signupBtn').click();
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (userIconMobile) {
        userIconMobile.addEventListener('click', function() {
            // Trigger same function as desktop user icon
            document.getElementById('userIcon').click();
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});
