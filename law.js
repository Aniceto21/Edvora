const lawCourses = [
    { 
        name: "LLB (Bachelor of Laws)", 
        icon: "⚖️", 
        location: "National Law School of India University (NLSIU), Bangalore", 
        fees: "₹2-3 Lakhs/year (NLUs), ₹50,000-2 Lakhs/year (Other Govt), ₹3-8 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "LLM (Master of Laws)", 
        icon: "📜", 
        location: "National Law University Delhi (NLU Delhi)", 
        fees: "₹1.5-3 Lakhs/year (NLUs), ₹50,000-1.5 Lakhs/year (Govt), ₹2-5 Lakhs/year (Private)", 
        timing: "9:30 AM - 4:30 PM" 
    },
    { 
        name: "BA LLB (Integrated)", 
        icon: "🏛️", 
        location: "NALSAR University of Law, Hyderabad", 
        fees: "₹2-3.5 Lakhs/year (NLUs), ₹1-2.5 Lakhs/year (Govt), ₹4-10 Lakhs/year (Private)", 
        timing: "8:30 AM - 5:30 PM" 
    },
    { 
        name: "BBA LLB (Integrated)", 
        icon: "💼", 
        location: "Jindal Global Law School, Sonipat", 
        fees: "₹2.5-4 Lakhs/year (NLUs), ₹1.5-3 Lakhs/year (Govt), ₹5-12 Lakhs/year (Private)", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "Corporate Law", 
        icon: "🏢", 
        location: "Symbiosis Law School, Pune", 
        fees: "₹3-6 Lakhs/year (Specialized Programs)", 
        timing: "10:00 AM - 6:00 PM" 
    },
    { 
        name: "Criminal Law", 
        icon: "👨‍⚖️", 
        location: "Faculty of Law, Delhi University", 
        fees: "₹10,000-50,000/year (Govt), ₹2-4 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "Intellectual Property Law", 
        icon: "💡", 
        location: "IIT Kharagpur (IP Law Programs)", 
        fees: "₹2-5 Lakhs/year (Specialized Courses)", 
        timing: "9:30 AM - 5:00 PM" 
    },
    { 
        name: "Cyber Law", 
        icon: "💻", 
        location: "Asian School of Cyber Laws, Pune", 
        fees: "₹1.5-4 Lakhs/year", 
        timing: "10:00 AM - 5:00 PM" 
    },
    { 
        name: "Constitutional Law", 
        icon: "📖", 
        location: "West Bengal National University of Juridical Sciences (WBNUJS), Kolkata", 
        fees: "₹1-3 Lakhs/year (NLUs), ₹50,000-2 Lakhs/year (Govt)", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "International Law", 
        icon: "🌍", 
        location: "Gujarat National Law University (GNLU), Gandhinagar", 
        fees: "₹2-4 Lakhs/year (NLUs), ₹3-6 Lakhs/year (Private)", 
        timing: "9:30 AM - 5:30 PM" 
    }
];

const lawGrid = document.getElementById('lawGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createLawCards() {
    lawCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'law-card';
        card.innerHTML = `
            <div class="law-card-icon">${course.icon}</div>
            <h3 class="law-card-title">${course.name}</h3>
            <div class="law-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(course));
        lawGrid.appendChild(card);
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

createLawCards();
