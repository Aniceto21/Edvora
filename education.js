const educationCourses = [
    { 
        name: "B.Ed (Bachelor of Education)", 
        icon: "📚", 
        location: "Delhi University, New Delhi", 
        fees: "₹10,000-50,000/year (Govt), ₹50,000-2 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "M.Ed (Master of Education)", 
        icon: "👨‍🏫", 
        location: "Jamia Millia Islamia, New Delhi", 
        fees: "₹15,000-60,000/year (Govt), ₹60,000-2.5 Lakhs/year (Private)", 
        timing: "9:00 AM - 4:30 PM" 
    },
    { 
        name: "D.El.Ed (Diploma in Elementary Education)", 
        icon: "🎓", 
        location: "SCERT, Multiple States", 
        fees: "₹5,000-30,000/year", 
        timing: "8:30 AM - 3:30 PM" 
    },
    { 
        name: "Early Childhood Education", 
        icon: "👶", 
        location: "IGNOU, New Delhi", 
        fees: "₹20,000-80,000/year", 
        timing: "9:00 AM - 2:00 PM" 
    },
    { 
        name: "Special Education", 
        icon: "🧑‍🎓", 
        location: "AYJNIHH, Mumbai", 
        fees: "₹15,000-1 Lakh/year", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "Physical Education", 
        icon: "⚽", 
        location: "Lakshmibai National Institute, Gwalior", 
        fees: "₹20,000-1.5 Lakhs/year", 
        timing: "7:00 AM - 3:00 PM" 
    },
    { 
        name: "Montessori Teacher Training", 
        icon: "🏫", 
        location: "Indian Montessori Centre, Delhi", 
        fees: "₹40,000-1.2 Lakhs/year", 
        timing: "9:00 AM - 3:00 PM" 
    },
    { 
        name: "Educational Technology", 
        icon: "💻", 
        location: "NIELIT, Multiple Locations", 
        fees: "₹30,000-1.5 Lakhs/year", 
        timing: "10:00 AM - 5:00 PM" 
    },
    { 
        name: "Educational Psychology", 
        icon: "📖", 
        location: "BHU, Varanasi", 
        fees: "₹15,000-80,000/year", 
        timing: "9:00 AM - 4:00 PM" 
    },
    { 
        name: "Curriculum Development", 
        icon: "📝", 
        location: "NCERT, New Delhi", 
        fees: "₹25,000-1 Lakh/year", 
        timing: "9:30 AM - 4:30 PM" 
    }
];

const educationGrid = document.getElementById('educationGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createEducationCards() {
    educationCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <div class="education-card-icon">${course.icon}</div>
            <h3 class="education-card-title">${course.name}</h3>
            <div class="education-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(course));
        educationGrid.appendChild(card);
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

createEducationCards();
