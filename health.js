const medicalFields = [
    { 
        name: "MBBS", 
        icon: "🩺", 
        location: "AIIMS Delhi, New Delhi", 
        fees: "₹5,000-10,000/year (Govt), ₹15-25 Lakhs/year (Private)", 
        timing: "8:00 AM - 6:00 PM" 
    },
    { 
        name: "BDS (Dental)", 
        icon: "🦷", 
        location: "Maulana Azad Institute, New Delhi", 
        fees: "₹50,000-1 Lakh/year (Govt), ₹5-10 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "B.Pharm (Pharmacy)", 
        icon: "💊", 
        location: "BITS Pilani, Rajasthan", 
        fees: "₹1-2 Lakhs/year (Govt), ₹2-4 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Nursing (B.Sc)", 
        icon: "👩‍⚕️", 
        location: "CMC Vellore, Tamil Nadu", 
        fees: "₹50,000-1.5 Lakhs/year", 
        timing: "7:00 AM - 3:00 PM (with shifts)" 
    },
    { 
        name: "Physiotherapy (BPT)", 
        icon: "🧘", 
        location: "Manipal University, Karnataka", 
        fees: "₹1.5-3 Lakhs/year", 
        timing: "8:30 AM - 4:30 PM" 
    },
    { 
        name: "Veterinary Science (B.V.Sc)", 
        icon: "🐕", 
        location: "IVRI Bareilly, Uttar Pradesh", 
        fees: "₹50,000-1 Lakh/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "BAMS (Ayurveda)", 
        icon: "🌿", 
        location: "Banaras Hindu University, Varanasi", 
        fees: "₹50,000-2 Lakhs/year", 
        timing: "8:00 AM - 4:00 PM" 
    },
    { 
        name: "BHMS (Homeopathy)", 
        icon: "💧", 
        location: "National Institute of Homoeopathy, Kolkata", 
        fees: "₹30,000-1 Lakh/year", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "BMLT (Medical Lab Technology)", 
        icon: "🔬", 
        location: "CMC Vellore, Tamil Nadu", 
        fees: "₹1-2 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Radiology & Imaging Tech", 
        icon: "📡", 
        location: "AIIMS Delhi, New Delhi", 
        fees: "₹1-2.5 Lakhs/year", 
        timing: "8:00 AM - 4:00 PM (with shifts)" 
    }
];

const healthGrid = document.getElementById('healthGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createHealthCards() {
    medicalFields.forEach(field => {
        const card = document.createElement('div');
        card.className = 'health-card';
        card.innerHTML = `
            <div class="health-card-icon">${field.icon}</div>
            <h3 class="health-card-title">${field.name}</h3>
            <div class="health-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(field));
        healthGrid.appendChild(card);
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

createHealthCards();
