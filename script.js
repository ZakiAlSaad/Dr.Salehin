// 1. DYNAMIC DATA (Using FontAwesome Icons)
const servicesData = [
    { icon: '<i class="fa-solid fa-stethoscope"></i>', title: 'General Medicine', description: 'Comprehensive diagnosis and treatment for acute and chronic adult illnesses, fevers, and infections.' },
    { icon: '<i class="fa-solid fa-droplet text-red-500"></i>', title: 'Diabetes Management', description: 'Personalized care plans for Type 1 and Type 2 diabetes, including diet and insulin management.' },
    { icon: '<i class="fa-solid fa-heart-pulse"></i>', title: 'Hypertension Care', description: 'Monitoring and treatment of high blood pressure to prevent long-term cardiovascular complications.' },
    { icon: '<i class="fa-solid fa-lungs"></i>', title: 'Respiratory Care', description: 'Diagnosis and management of asthma, COPD, chronic cough, and other respiratory tract issues.' },
    { icon: '<i class="fa-solid fa-viruses"></i>', title: 'Infectious Diseases', description: 'Expert treatment for Dengue, Typhoid, Malaria, and other common tropical fevers.' },
    { icon: '<i class="fa-solid fa-stomach"></i>', title: 'Gastric & Liver Issues', description: 'Management of acidity, IBS, fatty liver, jaundice, and other gastrointestinal conditions.' },
    { icon: '<i class="fa-solid fa-ribbon text-cyan-500"></i>', title: 'Thyroid Disorders', description: 'Comprehensive evaluation and treatment plans for hypothyroidism, hyperthyroidism, and goiter.' },
    { icon: '<i class="fa-solid fa-bone"></i>', title: 'Arthritis & Joint Pain', description: 'Relief and long-term care for osteoarthritis, rheumatoid arthritis, gout, and chronic body aches.' },
    { icon: '<i class="fa-solid fa-kidneys"></i>', title: 'Kidney & Urinary Health', description: 'Screening for kidney disease and effective treatment for urinary tract infections (UTIs).' }
];

const experienceData = [
    { degree: 'FACP (USA)', location: 'Fellow of the American College of Physicians', years: '2023' },
    { degree: 'MRCP (UK)', location: 'Royal College of Physicians, London', years: '2022' },
    { degree: 'FCPS (Medicine)', location: 'Bangladesh College of Physicians & Surgeons (BCPS)', years: '2020' },
    { degree: 'MACP (USA)', location: 'Member of the American College of Physicians', years: '2019' },
    { degree: 'CCD (Diabetology)', location: 'BIRDEM Academy, Dhaka', years: '2018' },
    { degree: 'MD (Internal Medicine)', location: 'Bangabandhu Sheikh Mujib Medical University (BSMMU)', years: '2016' },
    { degree: 'MBBS', location: 'Rajshahi Medical College', years: '2012' }
];

// 2. UI RENDER FUNCTIONS
function renderServices() {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = servicesData.map((service, index) => `
        <div class="glow-card shadow-sm hover:shadow-xl transition duration-300 group" data-aos="fade-up" data-aos-delay="${(index % 3) * 150}">
            <div class="glow-inner p-8 flex flex-col items-start transition-colors duration-300 h-full">
                <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    ${service.icon}
                </div>
                <h3 class="text-xl font-bold mb-3 text-slate-900">${service.title}</h3>
                <p class="text-slate-600 leading-relaxed">${service.description}</p>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const list = document.getElementById('experience-list');
    list.innerHTML = experienceData.map((item, index) => `
        <li class="flex items-start" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="flex-shrink-0 mt-1 mr-4 text-blue-600"><i class="fa-solid fa-user-graduate"></i></div>
            <div>
                <h4 class="font-bold text-lg text-slate-800">${item.degree}</h4>
                ${item.location ? `<p class="text-slate-600 font-medium">${item.location}</p>` : ''}
                <p class="text-slate-500 text-sm mt-1"><i class="fa-regular fa-calendar mr-1"></i> Passing Year: ${item.years}</p>
            </div>
        </li>
    `).join('');
}

function renderFloatingButtons() {
    const container = document.getElementById('floating-buttons-container');
    container.innerHTML = `
        <div class="fixed bottom-6 right-6 flex flex-col gap-3 md:gap-4 z-[100]">
            <a href="https://wa.me/8801711000000" target="_blank" rel="noopener noreferrer" 
               class="animate-whatsapp bg-[#25D366] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative text-2xl md:text-3xl">
                <span class="absolute right-14 md:right-16 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-base">WhatsApp Assistant</span>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+8801711000000" class="bg-blue-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative text-lg md:text-xl">
                <span class="absolute right-14 md:right-16 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-base">Call Chamber</span>
                <i class="fa-solid fa-phone"></i>
            </a>
        </div>
    `;
}

function initGlowEffect() {
    const cards = document.querySelectorAll('.glow-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ==========================================
// CHATBOT LOGIC
// ==========================================
function initChatbot() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        setTimeout(() => chatWindow.classList.toggle('scale-0'), 10);
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.add('scale-0');
        setTimeout(() => chatWindow.classList.add('hidden'), 300);
    });

    const botKnowledge = [
        { keywords: ['kemon achen', 'kemon asen', 'valo achen', 'bhalo achen'], answer: 'আমি ভালো আছি, আলহামদুলিল্লাহ! 🤖 আমি ডা. সালেহীন স্যারের ভার্চুয়াল অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি?' },
        { keywords: ['free achen', 'free asen', 'ajke rogi dekhben', 'serial pabo', 'kokhon'], answer: 'স্যার শনি থেকে বৃহস্পতিবার বিকেল ৫:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত চেম্বারে বসেন। সিরিয়াল নিতে +880 1711-000000 নম্বরে কল বা হোয়াটসঅ্যাপ করুন।' },
        { keywords: ['kothay bosen', 'chamber koi', 'thikana', 'address'], answer: 'স্যার রাজশাহী স্পেশালাইজড হাসপাতালে (লক্ষ্মীপুর মোড়, রাজশাহী) বসেন। আপনি কি সিরিয়াল নিতে চান?' },
        { keywords: ['fee koto', 'koto taka', 'visit koto'], answer: 'ভিজিট বা ফি সম্পর্কে নিশ্চিত জানতে অনুগ্রহ করে চেম্বারের অ্যাসিস্ট্যান্টকে কল করুন: +880 1711-000000।' },
        { keywords: ['sir er number', 'doctor er number'], answer: 'দুঃখিত, স্যারের পার্সোনাল নম্বর দেওয়া নিষেধ। তবে আপনি অ্যাসিস্ট্যান্টের নম্বরে (+880 1711-000000) কল করে আপনার সমস্যার কথা জানাতে পারেন।' },
        { keywords: ['tumi ke', 'apni ke', 'porichoy ki'], answer: 'আমি ডা. সালেহীন স্যারের ভার্চুয়াল ক্লিনিক অ্যাসিস্ট্যান্ট! 🤖 আমি চেম্বারের সময়, ঠিকানা এবং সিরিয়াল বুকিংয়ের বিষয়ে আপনাকে সাহায্য করতে পারি।' },
        { keywords: ['salam', 'assalamu alaikum', 'assalam', 'slm'], answer: 'ওয়ালাইকুম আসসালাম! আজ ডা. সালেহীন স্যারের চেম্বারের বিষয়ে আপনাকে কীভাবে সহায়তা করতে পারি?' },
        { keywords: ['hi', 'hello', 'hey', 'hiya'], answer: 'Hello! How can I assist you with Dr. Salehin\'s chamber details today?' },
        { keywords: ['time', 'hour', 'when', 'open', 'visiting'], answer: 'Dr. Salehin is available Saturday to Thursday from 5:00 PM to 9:00 PM.' },
        { keywords: ['where', 'location', 'address', 'chamber', 'hospital'], answer: 'The chamber is located at Rajshahi Specialized Hospital, Laxmipur Moor, Rajshahi.' },
        { keywords: ['whatsapp', 'number', 'phone', 'contact', 'call'], answer: 'You can contact the booking desk via WhatsApp or Call at +880 1711-000000.' },
        { keywords: ['serial', 'book', 'appointment', 'ticket'], answer: 'You can book a serial easily by filling out the "Request a Serial" form on this website, or by sending a WhatsApp message to +880 1711-000000.' }
    ];

    function addMessage(text, isUser) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `p-3 rounded-lg text-sm max-w-[85%] shadow-sm ${
            isUser ? 'bg-blue-600 text-white self-end rounded-tr-none' : 'bg-white text-slate-700 self-start rounded-tl-none border border-slate-100'
        }`;
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        for (const item of botKnowledge) {
            if (item.keywords.some(kw => lowerInput.includes(kw))) {
                return item.answer;
            }
        }
        const isBangla = /[\u0980-\u09FF]/.test(lowerInput) || ['ki', 'kobe', 'kothay', 'koto', 'ke', 'keno', 'ami', 'tumi', 'apni', 'sir', 'ache', 'nai', 'valo'].some(word => lowerInput.includes(word));
        
        if (isBangla) {
            return "দুঃখিত, আমি ঠিক বুঝতে পারিনি। বিস্তারিত জানতে +880 1711-000000 নম্বরে কল করুন।";
        } else {
            return "Sorry, I didn't quite catch that. For details, please call/WhatsApp +880 1711-000000.";
        }
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userText = chatInput.value.trim();
        if (!userText) return;

        addMessage(userText, true);
        chatInput.value = '';

        setTimeout(() => {
            const response = getBotResponse(userText);
            addMessage(response, false);
        }, 600);
    });
}

// 3. MAIN EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize UI
    renderServices();
    renderExperience();
    renderFloatingButtons();
    initGlowEffect();
    initChatbot();
    
    // Initialize Scroll Animations
    AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // --- Welcome Popup & Chat Connection Logic ---
    const popup = document.getElementById('welcomePopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    const chatPopupBtn = document.getElementById('chatPopupBtn'); 
    const chatbotWindow = document.getElementById('chatbot-window');
    
    const visitCountEl = document.getElementById('visitCount');
    const visitorTypeEl = document.getElementById('visitorType');
    const visitTimeEl = document.getElementById('visitTime');
    const popupGreeting = document.getElementById('popupGreeting');
    const popupMessage = document.getElementById('popupMessage');

    // Local Storage for Visits
    let visits = localStorage.getItem('drSalehinVisits');
    let visitorType = "New";

    if (!visits) {
        visits = 1;
        visitorType = "New";
        popupGreeting.innerHTML = "👋 Welcome!";
        popupMessage.innerHTML = "Thank you for visiting my medical portfolio. Dedicated to providing exceptional surgical care.";
    } else {
        visits = parseInt(visits) + 1;
        visitorType = "Returning";
        popupGreeting.innerHTML = "👋 Welcome Back!";
        popupMessage.innerHTML = "Great to see you again! Check out what's new in my portfolio since your last visit.";
    }
    localStorage.setItem('drSalehinVisits', visits);

    // Current Time Setup
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes;

    visitCountEl.innerText = visits;
    visitorTypeEl.innerText = visitorType;
    visitTimeEl.innerText = strTime;

    // Show Popup after 1 second
    setTimeout(() => { popup.classList.add('show'); }, 1000);

    const closePopup = () => { popup.classList.remove('show'); };

    closePopupBtn.addEventListener('click', closePopup);
    exploreBtn.addEventListener('click', closePopup);

    chatPopupBtn.addEventListener('click', () => {
        closePopup(); 
        chatbotWindow.classList.remove('hidden');
        setTimeout(() => chatbotWindow.classList.remove('scale-0'), 10);
    });

    setTimeout(() => { closePopup(); }, 11000);

    // Mobile Menu Toggles
    btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
    mobileLinks.forEach(link => { link.addEventListener('click', () => { menu.classList.add('hidden'); }); });

    // Date Form Logic
    const dateSelect = document.getElementById('date-select');
    const customDateInput = document.getElementById('custom-date');

    dateSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customDateInput.classList.remove('hidden');
            customDateInput.setAttribute('required', 'true');
        } else {
            customDateInput.classList.add('hidden');
            customDateInput.removeAttribute('required');
            customDateInput.value = ''; 
        }
    });

    // Navbar Scroll Logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm', 'bg-white/95');
            navbar.classList.remove('bg-white/95');
        } else {
            navbar.classList.remove('shadow-sm', 'bg-white/95');
            navbar.classList.add('bg-white/95');
        }
    });

    // Appointment Form
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Processing...';
        
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            statusMsg.classList.remove('hidden');
            setTimeout(() => { statusMsg.classList.add('hidden'); }, 5000);
        }, 1500);
    });
});