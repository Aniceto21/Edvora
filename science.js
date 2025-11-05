const scienceFields = [
    { 
        name: "B.Sc Physics", 
        icon: "⚛️", 
        location: "IISc Bangalore, Karnataka", 
        fees: "₹50,000-1.5 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "B.Sc Chemistry", 
        icon: "⚗️", 
        location: "IIT Delhi, New Delhi", 
        fees: "₹2-3 Lakhs/year", 
        timing: "9:00 AM - 5:30 PM" 
    },
    { 
        name: "B.Sc Mathematics", 
        icon: "🧮", 
        location: "Chennai Mathematical Institute, Tamil Nadu", 
        fees: "₹1-2 Lakhs/year", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "B.Sc Biology", 
        icon: "🧬", 
        location: "Delhi University, New Delhi", 
        fees: "₹30,000-1 Lakh/year", 
        timing: "8:30 AM - 4:30 PM" 
    },
    { 
        name: "Environmental Science", 
        icon: "🌍", 
        location: "Jawaharlal Nehru University, New Delhi", 
        fees: "₹20,000-80,000/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Biotechnology Research", 
        icon: "🔬", 
        location: "National Institute of Biotechnology, Mohali", 
        fees: "₹1.5-3 Lakhs/year", 
        timing: "9:00 AM - 6:00 PM" 
    },
    { 
        name: "Astronomy & Astrophysics", 
        icon: "🔭", 
        location: "Indian Institute of Astrophysics, Bangalore", 
        fees: "₹1-2 Lakhs/year", 
        timing: "10:00 AM - 6:00 PM (Observatory hours vary)" 
    },
    { 
        name: "Geology", 
        icon: "🪨", 
        location: "Banaras Hindu University, Varanasi", 
        fees: "₹40,000-1.2 Lakhs/year", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Microbiology", 
        icon: "🦠", 
        location: "University of Pune, Maharashtra", 
        fees: "₹50,000-1.5 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Bioinformatics", 
        icon: "💻", 
        location: "University of Hyderabad, Telangana", 
        fees: "₹1-2.5 Lakhs/year", 
        timing: "9:30 AM - 5:30 PM" 
    }
];

const scienceGrid = document.getElementById('scienceGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createScienceCards() {
    scienceFields.forEach(field => {
        const card = document.createElement('div');
        card.className = 'science-card';
        card.innerHTML = `
            <div class="science-card-icon">${field.icon}</div>
            <h3 class="science-card-title">${field.name}</h3>
            <div class="science-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(field));
        scienceGrid.appendChild(card);
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

createScienceCards();
