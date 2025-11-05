const agricultureFields = [
    { 
        name: "B.Sc Agriculture", 
        icon: "🌾", 
        location: "Punjab Agricultural University, Ludhiana", 
        fees: "₹20,000-50,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "8:00 AM - 4:00 PM" 
    },
    { 
        name: "Agricultural Engineering", 
        icon: "🚜", 
        location: "Indian Agricultural Research Institute, Delhi", 
        fees: "₹50,000-1 Lakh/year (Govt), ₹2-3 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Horticulture", 
        icon: "🌻", 
        location: "Tamil Nadu Agricultural University, Coimbatore", 
        fees: "₹30,000-70,000/year (Govt), ₹1.5-2.5 Lakhs/year (Private)", 
        timing: "8:00 AM - 3:00 PM" 
    },
    { 
        name: "Food Technology", 
        icon: "🥛", 
        location: "National Dairy Research Institute, Karnal", 
        fees: "₹40,000-80,000/year (Govt), ₹1.5-3 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Forestry", 
        icon: "🌳", 
        location: "Forest Research Institute, Dehradun", 
        fees: "₹25,000-60,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "8:30 AM - 4:00 PM" 
    },
    { 
        name: "Dairy Technology", 
        icon: "🥛", 
        location: "Anand Agricultural University, Gujarat", 
        fees: "₹35,000-75,000/year (Govt), ₹1.5-2.5 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Soil Science", 
        icon: "🌾", 
        location: "Indian Institute of Soil Science, Bhopal", 
        fees: "₹30,000-60,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "8:00 AM - 4:00 PM" 
    },
    { 
        name: "Agricultural Economics", 
        icon: "💰", 
        location: "University of Agricultural Sciences, Bangalore", 
        fees: "₹25,000-55,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "Plant Breeding & Genetics", 
        icon: "🧬", 
        location: "G.B. Pant University, Pantnagar", 
        fees: "₹35,000-70,000/year (Govt), ₹1.5-2.5 Lakhs/year (Private)", 
        timing: "8:30 AM - 4:30 PM" 
    },
    { 
        name: "Organic Farming", 
        icon: "🌱", 
        location: "Indira Gandhi Agricultural University, Raipur", 
        fees: "₹20,000-50,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "8:00 AM - 3:30 PM" 
    }
];

const agricultureGrid = document.getElementById('agricultureGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createAgricultureCards() {
    agricultureFields.forEach(field => {
        const card = document.createElement('div');
        card.className = 'agriculture-card';
        card.innerHTML = `
            <div class="agriculture-card-icon">${field.icon}</div>
            <h3 class="agriculture-card-title">${field.name}</h3>
            <div class="agriculture-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(field));
        agricultureGrid.appendChild(card);
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

createAgricultureCards();
