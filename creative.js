const creativeFields = [
    { 
        name: "Graphic Design", 
        icon: "🎨", 
        location: "National Institute of Design (NID), Ahmedabad", 
        fees: "₹2-4 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Fashion Design", 
        icon: "👗", 
        location: "National Institute of Fashion Technology (NIFT), New Delhi", 
        fees: "₹2-3 Lakhs/year", 
        timing: "9:30 AM - 5:30 PM" 
    },
    { 
        name: "Interior Design", 
        icon: "🏠", 
        location: "CEPT University, Ahmedabad", 
        fees: "₹1.5-3.5 Lakhs/year", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Animation & VFX", 
        icon: "🎬", 
        location: "Arena Animation, Mumbai", 
        fees: "₹1.5-3 Lakhs/year", 
        timing: "10:00 AM - 6:00 PM" 
    },
    { 
        name: "Photography", 
        icon: "📸", 
        location: "JJ School of Applied Arts, Mumbai", 
        fees: "₹50,000-1.5 Lakhs/year", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "Fine Arts", 
        icon: "🖼️", 
        location: "College of Art, New Delhi", 
        fees: "₹20,000-80,000/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Film Making & Direction", 
        icon: "🎥", 
        location: "Film and Television Institute of India (FTII), Pune", 
        fees: "₹50,000-1.2 Lakhs/year", 
        timing: "10:00 AM - 6:00 PM" 
    },
    { 
        name: "Music Production", 
        icon: "🎵", 
        location: "KM Music Conservatory, Chennai", 
        fees: "₹3-5 Lakhs/year", 
        timing: "10:00 AM - 5:00 PM" 
    },
    { 
        name: "Game Design", 
        icon: "🎮", 
        location: "Backstage Pass Institute of Gaming, Bangalore", 
        fees: "₹2-4 Lakhs/year", 
        timing: "9:30 AM - 5:30 PM" 
    },
    { 
        name: "UI/UX Design", 
        icon: "💻", 
        location: "Indian Institute of Art and Design (IIAD), New Delhi", 
        fees: "₹3-5 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    }
];

const creativeGrid = document.getElementById('creativeGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createCreativeCards() {
    creativeFields.forEach(field => {
        const card = document.createElement('div');
        card.className = 'creative-card';
        card.innerHTML = `
            <div class="creative-card-icon">${field.icon}</div>
            <h3 class="creative-card-title">${field.name}</h3>
            <div class="creative-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(field));
        creativeGrid.appendChild(card);
    });
}

function showDetails(field) {
    modalTitle.textContent = field.name;
    modalLocation.textContent = field.location;
    modalFees.textContent = field.fees;
    modalTiming.textContent = field.timing;
    modal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

createCreativeCards();
