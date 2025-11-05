const businessCourses = [
    { 
        name: "BBA (Bachelor of Business Administration)", 
        icon: "💼", 
        location: "IIM Indore, Madhya Pradesh", 
        fees: "₹15-20 Lakhs/year", 
        timing: "9:00 AM - 5:00 PM" 
    },
    { 
        name: "MBA (Master of Business Administration)", 
        icon: "📊", 
        location: "IIM Ahmedabad, Gujarat", 
        fees: "₹25-30 Lakhs/year", 
        timing: "9:00 AM - 6:00 PM" 
    },
    { 
        name: "B.Com (Bachelor of Commerce)", 
        icon: "💰", 
        location: "Shri Ram College of Commerce, Delhi", 
        fees: "₹20,000-50,000/year (Govt), ₹1-2 Lakhs/year (Private)", 
        timing: "8:30 AM - 3:30 PM" 
    },
    { 
        name: "M.Com (Master of Commerce)", 
        icon: "📈", 
        location: "Delhi University, New Delhi", 
        fees: "₹10,000-30,000/year (Govt), ₹50,000-1.5 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "CA (Chartered Accountancy)", 
        icon: "🧾", 
        location: "ICAI Centers across India", 
        fees: "₹2-3 Lakhs (Total Course Fee)", 
        timing: "Flexible - Self-paced + Articleship" 
    },
    { 
        name: "CS (Company Secretary)", 
        icon: "📋", 
        location: "ICSI Centers across India", 
        fees: "₹1.5-2.5 Lakhs (Total Course Fee)", 
        timing: "Flexible - Self-paced + Training" 
    },
    { 
        name: "CFA (Chartered Financial Analyst)", 
        icon: "💹", 
        location: "Online - Global Certification", 
        fees: "₹2-3 Lakhs (Total for 3 Levels)", 
        timing: "Self-paced Online Learning" 
    },
    { 
        name: "Digital Marketing", 
        icon: "📱", 
        location: "MICA, Ahmedabad", 
        fees: "₹1-3 Lakhs/year", 
        timing: "10:00 AM - 5:00 PM" 
    },
    { 
        name: "Hotel Management", 
        icon: "🏨", 
        location: "IHM Mumbai, Maharashtra", 
        fees: "₹2-4 Lakhs/year", 
        timing: "8:00 AM - 4:00 PM (with practical sessions)" 
    },
    { 
        name: "Event Management", 
        icon: "🎉", 
        location: "NAEMD, Mumbai", 
        fees: "₹1.5-3 Lakhs/year", 
        timing: "9:30 AM - 5:30 PM" 
    }
];

const businessGrid = document.getElementById('businessGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createBusinessCards() {
    businessCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'business-card';
        card.innerHTML = `
            <div class="business-card-icon">${course.icon}</div>
            <h3 class="business-card-title">${course.name}</h3>
            <div class="business-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(course));
        businessGrid.appendChild(card);
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

createBusinessCards();
