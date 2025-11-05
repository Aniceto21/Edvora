const engineeringBranches = [
    { 
        name: "Civil Engineering", 
        icon: "🏗️", 
        location: "IIT Madras, Chennai", 
        fees: "₹2-4 Lakhs/year (IIT), ₹3-6 Lakhs/year (Private)", 
        timing: "8:30 AM - 5:00 PM" 
    },
    { 
        name: "Mechanical Engineering", 
        icon: "⚙️", 
        location: "NIT Trichy, Tamil Nadu", 
        fees: "₹1.5-3 Lakhs/year (NIT), ₹4-7 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:30 PM" 
    },
    { 
        name: "Electrical Engineering", 
        icon: "⚡", 
        location: "IIT Bombay, Mumbai", 
        fees: "₹2-4 Lakhs/year (IIT), ₹3-6 Lakhs/year (Private)", 
        timing: "8:00 AM - 4:30 PM" 
    },
    { 
        name: "Electronics & Communication", 
        icon: "📡", 
        location: "BITS Pilani, Rajasthan", 
        fees: "₹4-6 Lakhs/year (BITS), ₹3-7 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Chemical Engineering", 
        icon: "🧪", 
        location: "IIT Delhi, New Delhi", 
        fees: "₹2-4 Lakhs/year (IIT), ₹3-6 Lakhs/year (Private)", 
        timing: "8:30 AM - 5:00 PM" 
    },
    { 
        name: "Aerospace Engineering", 
        icon: "✈️", 
        location: "IIT Kanpur, Uttar Pradesh", 
        fees: "₹2-4 Lakhs/year (IIT), ₹5-8 Lakhs/year (Private)", 
        timing: "8:00 AM - 4:30 PM" 
    },
    { 
        name: "Automobile Engineering", 
        icon: "🚗", 
        location: "VIT Vellore, Tamil Nadu", 
        fees: "₹2-4 Lakhs/year (Govt), ₹4-7 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:30 PM" 
    },
    { 
        name: "Industrial Engineering", 
        icon: "🏭", 
        location: "NIT Surathkal, Karnataka", 
        fees: "₹1.5-3 Lakhs/year (NIT), ₹3-6 Lakhs/year (Private)", 
        timing: "8:30 AM - 5:00 PM" 
    },
    { 
        name: "Metallurgical Engineering", 
        icon: "⚒️", 
        location: "IIT Kharagpur, West Bengal", 
        fees: "₹2-4 Lakhs/year (IIT), ₹3-5 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Structural Engineering", 
        icon: "🌉", 
        location: "NIT Warangal, Telangana", 
        fees: "₹1.5-3 Lakhs/year (NIT), ₹3-6 Lakhs/year (Private)", 
        timing: "8:00 AM - 4:30 PM" 
    }
];

const engineeringGrid = document.getElementById('engineeringGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createEngineeringCards() {
    engineeringBranches.forEach(branch => {
        const card = document.createElement('div');
        card.className = 'engineering-card';
        card.innerHTML = `
            <div class="engineering-card-icon">${branch.icon}</div>
            <h3 class="engineering-card-title">${branch.name}</h3>
            <div class="engineering-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(branch));
        engineeringGrid.appendChild(card);
    });
}

function showDetails(branch) {
    modalTitle.textContent = branch.name;
    modalLocation.textContent = branch.location;
    modalFees.textContent = branch.fees;
    modalTiming.textContent = branch.timing;
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

createEngineeringCards();
