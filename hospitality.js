const hospitalityCourses = [
    { 
        name: "Hotel Management", 
        icon: "🏨", 
        location: "IHM Mumbai, Maharashtra", 
        fees: "₹1-3 Lakhs/year (Govt), ₹3-6 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Tourism Management", 
        icon: "✈️", 
        location: "IITTM Gwalior, Madhya Pradesh", 
        fees: "₹50,000-2 Lakhs/year", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Culinary Arts", 
        icon: "👨‍🍳", 
        location: "IHM Delhi, New Delhi", 
        fees: "₹2-5 Lakhs/year", 
        timing: "8:00 AM - 6:00 PM" 
    },
    { 
        name: "Event Management", 
        icon: "🎉", 
        location: "NAEMD Mumbai, Maharashtra", 
        fees: "₹1.5-4 Lakhs/year", 
        timing: "10:00 AM - 6:00 PM" 
    },
    { 
        name: "Travel & Tourism", 
        icon: "🗺️", 
        location: "Christ University, Bangalore", 
        fees: "₹80,000-2.5 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Aviation & Hospitality", 
        icon: "✈️", 
        location: "Frankfinn Institute, Pan India", 
        fees: "₹1.5-3 Lakhs/year", 
        timing: "8:30 AM - 4:30 PM" 
    },
    { 
        name: "Cruise Management", 
        icon: "🚢", 
        location: "IHM Goa, Goa", 
        fees: "₹2-4 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Restaurant Management", 
        icon: "🍽️", 
        location: "IHM Bangalore, Karnataka", 
        fees: "₹1.5-3.5 Lakhs/year", 
        timing: "9:00 AM - 5:30 PM" 
    },
    { 
        name: "Catering Technology", 
        icon: "🍴", 
        location: "IHM Chennai, Tamil Nadu", 
        fees: "₹1-3 Lakhs/year", 
        timing: "8:00 AM - 4:00 PM" 
    },
    { 
        name: "Resort Management", 
        icon: "🏖️", 
        location: "Welcomgroup Graduate School, Manipal", 
        fees: "₹2-5 Lakhs/year", 
        timing: "9:00 AM - 6:00 PM" 
    }
];

const hospitalityGrid = document.getElementById('hospitalityGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createHospitalityCards() {
    hospitalityCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'hospitality-card';
        card.innerHTML = `
            <div class="hospitality-card-icon">${course.icon}</div>
            <h3 class="hospitality-card-title">${course.name}</h3>
            <div class="hospitality-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(course));
        hospitalityGrid.appendChild(card);
    });
}

function showDetails(course) {
    modalTitle.textContent = course.name;
    modalLocation.textContent = course.location;
    modalFees.textContent = course.fees;
    modalTiming.textContent = course.timing;
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

createHospitalityCards();
