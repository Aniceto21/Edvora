const sportsCourses = [
    {
        name: "B.P.Ed (Bachelor of Physical Education)",
        icon: "⚽",
        location: "Lakshmibai National Institute of Physical Education (LNIPE), Gwalior; Indira Gandhi Institute of Physical Education and Sports Sciences, Delhi; Universities across India",
        fees: "₹50,000 - ₹2,00,000 per year",
        timing: "3-4 years full-time program"
    },
    {
        name: "M.P.Ed (Master of Physical Education)",
        icon: "🏅",
        location: "LNIPE Gwalior; Patiala Sports University; Pune University; Various state universities",
        fees: "₹60,000 - ₹2,50,000 per year",
        timing: "2 years full-time program"
    },
    {
        name: "Sports Management",
        icon: "🏋️",
        location: "Symbiosis School of Sports Sciences, Pune; IISM (International Institute of Sports Management), Mumbai; Christ University, Bangalore",
        fees: "₹1,00,000 - ₹5,00,000 per year",
        timing: "2 years MBA/PG Diploma; 3 years undergraduate"
    },
    {
        name: "Sports Science",
        icon: "🔬",
        location: "Panjab University, Chandigarh; Amity University; Jamia Millia Islamia; SAI (Sports Authority of India) centers",
        fees: "₹80,000 - ₹3,00,000 per year",
        timing: "3-4 years undergraduate; 2 years postgraduate"
    },
    {
        name: "Yoga & Naturopathy",
        icon: "🧘",
        location: "Swami Vivekananda Yoga Anusandhana Samsthana, Bangalore; Morarji Desai National Institute of Yoga, Delhi; BHU Varanasi",
        fees: "₹30,000 - ₹1,50,000 per year",
        timing: "1-5 years (Certificate to degree programs)"
    },
    {
        name: "Fitness Training & Nutrition",
        icon: "💪",
        location: "K11 School of Fitness Sciences, Mumbai; Gold's Gym Fitness Institute; ISSA India; ACE Fitness India",
        fees: "₹40,000 - ₹2,00,000 for certification",
        timing: "3-12 months (certification programs)"
    },
    {
        name: "Sports Coaching",
        icon: "🏃",
        location: "National Institute of Sports (NIS), Patiala; SAI NCOE centers; State Sports Academies",
        fees: "₹50,000 - ₹1,50,000 per year",
        timing: "1-2 years diploma/certificate programs"
    },
    {
        name: "Sports Medicine",
        icon: "⚕️",
        location: "All India Institute of Medical Sciences (AIIMS); Armed Forces Medical College, Pune; Post-graduation after MBBS",
        fees: "₹1,00,000 - ₹10,00,000 (fellowship programs)",
        timing: "2-3 years post-MBBS specialization"
    },
    {
        name: "Exercise Physiology",
        icon: "🥇",
        location: "Panjab University; Savitribai Phule Pune University; Jamia Millia Islamia; Various research institutes",
        fees: "₹60,000 - ₹2,50,000 per year",
        timing: "2 years M.Sc.; 3-5 years Ph.D."
    },
    {
        name: "Sports Psychology",
        icon: "🧠",
        location: "LNIPE Gwalior; Jamia Millia Islamia; Amity Institute of Psychology and Allied Sciences; Banaras Hindu University",
        fees: "₹70,000 - ₹3,00,000 per year",
        timing: "2 years M.Sc./M.A.; 3-5 years Ph.D."
    }
];

function createSportsCards() {
    const sportsGrid = document.getElementById('sportsGrid');
    
    sportsCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'sports-card';
        card.innerHTML = `
            <span class="sports-icon">${course.icon}</span>
            <h3>${course.name}</h3>
            <div class="sports-info">
                <div class="sports-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>${course.location.substring(0, 40)}...</span>
                </div>
                <div class="sports-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="2" x2="12" y2="22"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <span>${course.fees}</span>
                </div>
                <div class="sports-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <span>${course.timing}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showModal(course));
        sportsGrid.appendChild(card);
    });
}

function showModal(course) {
    const modal = document.getElementById('detailModal');
    document.getElementById('modalTitle').textContent = course.name;
    document.getElementById('modalLocation').textContent = course.location;
    document.getElementById('modalFees').textContent = course.fees;
    document.getElementById('modalTiming').textContent = course.timing;
    modal.style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('detailModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

createSportsCards();
