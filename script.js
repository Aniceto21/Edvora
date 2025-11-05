const technicalFields = [
    { name: "Computer Science Engineering", icon: "💻", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Information Technology", icon: "🖥️", location: "BITS Pilani, Rajasthan", fees: "₹4-5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Electronics Engineering", icon: "⚡", location: "IIT Bombay, Mumbai", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Mechanical Engineering", icon: "⚙️", location: "NIT Trichy, Tamil Nadu", fees: "₹1.5-2 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Civil Engineering", icon: "🏗️", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Electrical Engineering", icon: "🔌", location: "IIT Kanpur, Uttar Pradesh", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Artificial Intelligence", icon: "🤖", location: "IIIT Hyderabad, Telangana", fees: "₹3-4 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Data Science", icon: "📊", location: "IIT Roorkee, Uttarakhand", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Cybersecurity", icon: "🔒", location: "NIT Surathkal, Karnataka", fees: "₹2-2.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Robotics Engineering", icon: "🦾", location: "VIT Vellore, Tamil Nadu", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Aerospace Engineering", icon: "✈️", location: "IIT Kharagpur, West Bengal", fees: "₹2-3 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Chemical Engineering", icon: "🧪", location: "ICT Mumbai, Maharashtra", fees: "₹1.5-2.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Biotechnology", icon: "🧬", location: "NIT Warangal, Telangana", fees: "₹1.5-2 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Automobile Engineering", icon: "🚗", location: "MIT Manipal, Karnataka", fees: "₹3-4 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Petroleum Engineering", icon: "🛢️", location: "UPES Dehradun, Uttarakhand", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Mining Engineering", icon: "⛏️", location: "ISM Dhanbad, Jharkhand", fees: "₹1-1.5 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Textile Engineering", icon: "🧵", location: "NIT Jalandhar, Punjab", fees: "₹1-1.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Food Technology", icon: "🍔", location: "NIFTEM Sonipat, Haryana", fees: "₹1.5-2 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Agricultural Engineering", icon: "🌾", location: "PAU Ludhiana, Punjab", fees: "₹50K-1 Lakh/year", timing: "8:00 AM - 3:00 PM" },
    { name: "Marine Engineering", icon: "🚢", location: "IMU Chennai, Tamil Nadu", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Environmental Engineering", icon: "🌍", location: "Anna University, Chennai", fees: "₹1-1.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Instrumentation Engineering", icon: "📡", location: "NIT Kurukshetra, Haryana", fees: "₹1.5-2 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Industrial Engineering", icon: "🏭", location: "NIT Calicut, Kerala", fees: "₹1.5-2 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Production Engineering", icon: "⚒️", location: "COEP Pune, Maharashtra", fees: "₹1-1.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Metallurgical Engineering", icon: "🔩", location: "NIT Rourkela, Odisha", fees: "₹1-1.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Nanotechnology", icon: "🔬", location: "Amity University, Noida", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Telecommunication Engineering", icon: "📞", location: "DTU Delhi, New Delhi", fees: "₹1.5-2 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Embedded Systems", icon: "🎛️", location: "VJTI Mumbai, Maharashtra", fees: "₹1-1.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Cloud Computing", icon: "☁️", location: "Manipal Institute, Karnataka", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Blockchain Technology", icon: "⛓️", location: "IIIT Bangalore, Karnataka", fees: "₹3-4 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Internet of Things", icon: "🌐", location: "SRM University, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Machine Learning", icon: "🧠", location: "IIT Guwahati, Assam", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Computer Networks", icon: "🔗", location: "NSIT Delhi, New Delhi", fees: "₹1.5-2 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Software Engineering", icon: "📱", location: "PES University, Bangalore", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Game Development", icon: "🎮", location: "Chandigarh University, Punjab", fees: "₹2-3 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Web Development", icon: "🌐", location: "LPU Jalandhar, Punjab", fees: "₹1.5-2.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Mobile App Development", icon: "📲", location: "Thapar University, Patiala", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "DevOps Engineering", icon: "🔄", location: "BITS Goa, Goa", fees: "₹4-5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Quantum Computing", icon: "⚛️", location: "IIT Kharagpur, West Bengal", fees: "₹2-3 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Bioinformatics", icon: "🧬", location: "JNU Delhi, New Delhi", fees: "₹50K-1 Lakh/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Geoinformatics", icon: "🗺️", location: "IIT Roorkee, Uttarakhand", fees: "₹2-3 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Renewable Energy", icon: "♻️", location: "Pandit Deendayal Energy University, Gujarat", fees: "₹1.5-2.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Nuclear Engineering", icon: "☢️", location: "Homi Bhabha National Institute, Mumbai", fees: "₹1-2 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Polymer Technology", icon: "🧴", location: "ICT Mumbai, Maharashtra", fees: "₹1.5-2.5 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Ceramic Engineering", icon: "🏺", location: "NIT Rourkela, Odisha", fees: "₹1-1.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Paper Technology", icon: "📄", location: "IIT Roorkee, Uttarakhand", fees: "₹2-3 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Pharmaceutical Engineering", icon: "💊", location: "ICT Mumbai, Maharashtra", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Dairy Technology", icon: "🥛", location: "NDRI Karnal, Haryana", fees: "₹50K-1 Lakh/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Sugar Technology", icon: "🍬", location: "Vasantdada Sugar Institute, Maharashtra", fees: "₹1-1.5 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Leather Technology", icon: "👞", location: "CLRI Chennai, Tamil Nadu", fees: "₹50K-1 Lakh/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Aviation Engineering", icon: "🛩️", location: "Hindustan University, Chennai", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Fire & Safety Engineering", icon: "🚒", location: "NIT Calicut, Kerala", fees: "₹1.5-2 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Genetic Engineering", icon: "🧬", location: "SRM University, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Mechatronics", icon: "🤖", location: "MIT Manipal, Karnataka", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "3D Printing Technology", icon: "🖨️", location: "VIT Vellore, Tamil Nadu", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Virtual Reality", icon: "🥽", location: "SRM University, Chennai", fees: "₹2-3 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Augmented Reality", icon: "👓", location: "LPU Jalandhar, Punjab", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Digital Marketing", icon: "📈", location: "MICA Ahmedabad, Gujarat", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Ethical Hacking", icon: "🕵️", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:30 AM - 5:30 PM" },
    { name: "Network Security", icon: "🛡️", location: "IIIT Hyderabad, Telangana", fees: "₹3-4 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Computer Graphics", icon: "🎨", location: "NIT Surathkal, Karnataka", fees: "₹2-2.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Animation Technology", icon: "🎬", location: "NID Ahmedabad, Gujarat", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 6:00 PM" },
    { name: "Sound Engineering", icon: "🎵", location: "SAE Institute, Mumbai", fees: "₹3-4 Lakhs/year", timing: "10:00 AM - 6:00 PM" },
    { name: "Photonics", icon: "💡", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Optical Engineering", icon: "👁️", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "VLSI Design", icon: "🔲", location: "IIIT Bangalore, Karnataka", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Signal Processing", icon: "📶", location: "IIT Bombay, Mumbai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Control Systems", icon: "🎛️", location: "IIT Kanpur, Uttar Pradesh", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Power Electronics", icon: "⚡", location: "NIT Trichy, Tamil Nadu", fees: "₹1.5-2 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Smart Grid Technology", icon: "🔋", location: "IIT Roorkee, Uttarakhand", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Electric Vehicle Technology", icon: "🔌", location: "ARAI Pune, Maharashtra", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Battery Technology", icon: "🔋", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Solar Energy Engineering", icon: "☀️", location: "MNIT Jaipur, Rajasthan", fees: "₹1.5-2 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Wind Energy Engineering", icon: "💨", location: "NIT Calicut, Kerala", fees: "₹1.5-2 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Hydropower Engineering", icon: "💧", location: "IIT Roorkee, Uttarakhand", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Geothermal Engineering", icon: "🌋", location: "IIT Kharagpur, West Bengal", fees: "₹2-3 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Ocean Engineering", icon: "🌊", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Space Technology", icon: "🚀", location: "IIST Thiruvananthapuram, Kerala", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Satellite Technology", icon: "🛰️", location: "ISRO Bangalore, Karnataka", fees: "₹1.5-2.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Radar Technology", icon: "📡", location: "BEL Bangalore, Karnataka", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Microwave Engineering", icon: "📻", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "RF Engineering", icon: "📡", location: "NIT Surathkal, Karnataka", fees: "₹2-2.5 Lakhs/year", timing: "8:00 AM - 4:00 PM" },
    { name: "Optical Fiber Technology", icon: "🌈", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "5G Technology", icon: "📶", location: "IIT Bombay, Mumbai", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Wireless Communication", icon: "📡", location: "IIIT Hyderabad, Telangana", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Image Processing", icon: "🖼️", location: "IIT Kanpur, Uttar Pradesh", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Natural Language Processing", icon: "💬", location: "IIT Bombay, Mumbai", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Computer Vision", icon: "👁️", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Speech Recognition", icon: "🗣️", location: "IIIT Hyderabad, Telangana", fees: "₹3-4 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Pattern Recognition", icon: "🔍", location: "IIT Madras, Chennai", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Deep Learning", icon: "🧠", location: "IIT Kharagpur, West Bengal", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Reinforcement Learning", icon: "🎯", location: "IIT Bombay, Mumbai", fees: "₹2-3 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Neural Networks", icon: "🕸️", location: "IIT Delhi, New Delhi", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Big Data Analytics", icon: "📊", location: "IIIT Bangalore, Karnataka", fees: "₹3-4 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Database Management", icon: "🗄️", location: "NIT Trichy, Tamil Nadu", fees: "₹1.5-2 Lakhs/year", timing: "8:30 AM - 4:30 PM" },
    { name: "Information Security", icon: "🔐", location: "IIT Kanpur, Uttar Pradesh", fees: "₹2-3 Lakhs/year", timing: "9:00 AM - 5:00 PM" },
    { name: "Digital Forensics", icon: "🔎", location: "IIIT Delhi, New Delhi", fees: "₹2.5-3.5 Lakhs/year", timing: "9:00 AM - 5:00 PM" }
];

const techGrid = document.getElementById('techGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const modalFees = document.getElementById('modalFees');
const modalTiming = document.getElementById('modalTiming');

function createTechCards() {
    technicalFields.forEach(field => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <div class="tech-card-icon">${field.icon}</div>
            <h3 class="tech-card-title">${field.name}</h3>
            <div class="tech-card-stats">
                <span class="stat-badge">📍 Click for details</span>
            </div>
        `;
        
        card.addEventListener('click', () => showDetails(field));
        techGrid.appendChild(card);
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

createTechCards();
