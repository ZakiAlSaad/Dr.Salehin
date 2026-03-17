// 1. DYNAMIC DATA (Using FontAwesome Icons)
const servicesData = [
    {
        icon: '<i class="fa-solid fa-stethoscope"></i>',
        title: 'General Medicine',
        description: 'Comprehensive diagnosis and treatment for acute and chronic adult illnesses, fevers, and infections.'
    },
    {
        icon: '<i class="fa-solid fa-droplet text-red-500"></i>',
        title: 'Diabetes Management',
        description: 'Personalized care plans for Type 1 and Type 2 diabetes, including diet and insulin management.'
    },
    {
        icon: '<i class="fa-solid fa-heart-pulse"></i>',
        title: 'Hypertension Care',
        description: 'Monitoring and treatment of high blood pressure to prevent long-term cardiovascular complications.'
    },
    {
        icon: '<i class="fa-solid fa-lungs"></i>',
        title: 'Respiratory Care',
        description: 'Diagnosis and management of asthma, COPD, chronic cough, and other respiratory tract issues.'
    },
    {
        icon: '<i class="fa-solid fa-viruses"></i>',
        title: 'Infectious Diseases',
        description: 'Expert treatment for Dengue, Typhoid, Malaria, and other common tropical fevers.'
    },
    {
        icon: '<i class="fa-solid fa-stomach"></i>',
        title: 'Gastric & Liver Issues',
        description: 'Management of acidity, IBS, fatty liver, jaundice, and other gastrointestinal conditions.'
    },
    {
        icon: '<i class="fa-solid fa-ribbon text-teal-500"></i>',
        title: 'Thyroid Disorders',
        description: 'Comprehensive evaluation and treatment plans for hypothyroidism, hyperthyroidism, and goiter.'
    },
    {
        icon: '<i class="fa-solid fa-bone"></i>',
        title: 'Arthritis & Joint Pain',
        description: 'Relief and long-term care for osteoarthritis, rheumatoid arthritis, gout, and chronic body aches.'
    },
    {
        icon: '<i class="fa-solid fa-kidneys"></i>',
        title: 'Kidney & Urinary Health',
        description: 'Screening for kidney disease and effective treatment for urinary tract infections (UTIs).'
    }
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
                <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
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
            <div class="flex-shrink-0 mt-1 mr-4 text-emerald-600"><i class="fa-solid fa-user-graduate"></i></div>
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
        <div class="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
            <a href="https://wa.me/8801711000000" target="_blank" rel="noopener noreferrer" 
               class="animate-whatsapp bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative text-3xl">
                <span class="absolute right-16 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-base">WhatsApp Assistant</span>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+8801711000000" class="bg-emerald-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative text-xl">
                <span class="absolute right-16 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-base">Call Chamber</span>
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
// CHATBOT LOGIC (Hardcoded NLP)
// ==========================================
function initChatbot() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // 1. Toggle Chat Window Open/Close
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        // Small delay allows CSS transition to trigger
        setTimeout(() => chatWindow.classList.toggle('scale-0'), 10);
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.add('scale-0');
        setTimeout(() => chatWindow.classList.add('hidden'), 300);
    });

    // 2. Hardcoded Knowledge Base (Bilingual)
    const botKnowledge = [
        // ==========================================
        // BANGLA / BANGLISH QUERIES
        // ==========================================
        { 
            keywords: ['kemon achen', 'kemon asen', 'valo achen', 'bhalo achen', 'ki oposta', 'ki ovosta'], 
            answer: 'আমি ভালো আছি, আলহামদুলিল্লাহ! 🤖 আমি ডা. সালেহীন স্যারের ভার্চুয়াল অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি?' 
        },
        { 
            keywords: ['free achen', 'free asen', 'ajke rogi dekhben', 'ajke ki bosben', 'serial pabo', 'serial diben', 'ajke bosechen', 'ajke ki chamber khola', 'appointment lagbe', 'koytay', 'kokhon', 'somoy'], 
            answer: 'স্যার শনি থেকে বৃহস্পতিবার বিকেল ৫:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত চেম্বারে বসেন। সিরিয়াল নিতে +880 1711-000000 নম্বরে কল বা হোয়াটসঅ্যাপ করুন।' 
        },
        { 
            keywords: ['kothay bosen', 'chamber koi', 'thikana', 'address ta den', 'kothay dekhan', 'kon hospital'], 
            answer: 'স্যার রাজশাহী স্পেশালাইজড হাসপাতালে (লক্ষ্মীপুর মোড়, রাজশাহী) বসেন। আপনি কি সিরিয়াল নিতে চান?' 
        },
        { 
            keywords: ['fee koto', 'koto taka', 'visit koto', 'koto rakhen'], 
            answer: 'ভিজিট বা ফি সম্পর্কে নিশ্চিত জানতে অনুগ্রহ করে চেম্বারের অ্যাসিস্ট্যান্টকে কল করুন: +880 1711-000000।' 
        },
        { 
            keywords: ['sir er number', 'sir er sathe kotha bolbo', 'doctor er number', 'sarasori kotha', 'personal number'], 
            answer: 'দুঃখিত, স্যারের পার্সোনাল নম্বর দেওয়া নিষেধ। তবে আপনি অ্যাসিস্ট্যান্টের নম্বরে (+880 1711-000000) কল করে আপনার সমস্যার কথা জানাতে পারেন।' 
        },
        { 
            keywords: ['tumi ke', 'apni ke', 'tomar nam', 'apnar nam', 'porichoy ki'], 
            answer: 'আমি ডা. সালেহীন স্যারের ভার্চুয়াল ক্লিনিক অ্যাসিস্ট্যান্ট! 🤖 আমি চেম্বারের সময়, ঠিকানা এবং সিরিয়াল বুকিংয়ের বিষয়ে আপনাকে সাহায্য করতে পারি।' 
        },
        { 
            keywords: ['ke tomake toiri koreche', 'tomake ke toiri korese', 'tomake ke baniyeche', 'tomar creator'], 
            answer: 'আমায় তৈরি করেছে <strong>এস,এম, যাকী আল সা\'দ মারজান</strong><br>বিএসসি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং' 
        },
        { 
            // Detects actual Bengali text
            keywords: ['সালাম', 'আসসালামু আলাইকুম', 'আসসালামু', 'আলাইকুম'], 
            answer: 'ওয়ালাইকুম আসসালাম! আজ ডা. সালেহীন স্যারের চেম্বারের বিষয়ে আপনাকে কীভাবে সহায়তা করতে পারি?' 
        },

        // ==========================================
        // ENGLISH QUERIES
        // ==========================================
        { 
            keywords: ['hi', 'hello', 'hey', 'hiya'], 
            answer: 'Hello! How can I assist you with Dr. Salehin\'s chamber details today?' 
        },
        { 
            // Detects English/Banglish text
            keywords: ['salam', 'assalamu alaikum', 'assalam', 'slm', 'salamu'], 
            answer: 'Walaikum Assalam! How can I assist you with Dr. Salehin\'s chamber details today?' 
        },
        { 
            keywords: ['time', 'hour', 'when', 'open', 'schedule', 'visiting'], 
            answer: 'Dr. Salehin is available Saturday to Thursday from 5:00 PM to 9:00 PM.' 
        },
        { 
            keywords: ['where', 'location', 'address', 'chamber', 'hospital'], 
            answer: 'The chamber is located at Rajshahi Specialized Hospital, Laxmipur Moor, Rajshahi.' 
        },
        { 
            keywords: ['whatsapp', 'number', 'phone', 'contact', 'call'], 
            answer: 'You can contact the booking desk via WhatsApp or Call at +880 1711-000000.' 
        },
        { 
            keywords: ['specialty', 'what does', 'surgery', 'doctor', 'treatment', 'degree'], 
            answer: 'Dr. Salehin is a highly qualified Surgery Specialist. He provides accurate diagnosis and effective medical care.' 
        },
        { 
            keywords: ['serial', 'book', 'appointment', 'ticket'], 
            answer: 'You can book a serial easily by filling out the "Request a Serial" form on this website, or by sending a WhatsApp message to +880 1711-000000.' 
        },
        { 
            keywords: ['fee', 'cost', 'money', 'price'], 
            answer: 'For exact consultation fees, please contact the chamber desk directly at +880 1711-000000.' 
        },
        { 
            keywords: ['who are you', 'what are you', 'your name'], 
            answer: 'I am Dr. Salehin\'s virtual clinic assistant! 🤖 I can help you with chamber timing, location, and serial booking.' 
        },
        { 
            keywords: ['who created you', 'who made you', 'developer', 'who programmed you', 'your creator'], 
            answer: 'I was created by <strong>S. M. ZAKI AL SAAD MARJAN</strong><br>BSc in CSE' 
        }
    ];

    // 3. Helper function to print messages to the UI
    function addMessage(text, isUser) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `p-3 rounded-lg text-sm max-w-[85%] shadow-sm ${
            isUser 
            ? 'bg-emerald-600 text-white self-end rounded-tr-none' 
            : 'bg-white text-slate-700 self-start rounded-tl-none border border-slate-100'
        }`;
        msgDiv.innerHTML = text; // allow bolding/formatting in answers
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    // 4. Keyword matching & Smart Fallback logic
    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        
        // Search the knowledge base for a match
        for (const item of botKnowledge) {
            if (item.keywords.some(kw => lowerInput.includes(kw))) {
                return item.answer;
            }
        }
        
        // If no match is found, detect the language to give the correct fallback message
        const isBangla = /[\u0980-\u09FF]/.test(lowerInput) || 
                         ['ki', 'kobe', 'kothay', 'koto', 'ke', 'keno', 'ami', 'tumi', 'apni', 'sir', 'ache', 'nai', 'valo'].some(word => lowerInput.includes(word));
        
        if (isBangla) {
            return "দুঃখিত, আমি ঠিক বুঝতে পারিনি। বিস্তারিত জানতে +880 1711-000000 নম্বরে কল/হোয়াটসঅ্যাপ করুন, অথবা <strong>চেম্বারের সময়</strong> বা <strong>ঠিকানা</strong> সম্পর্কে জিজ্ঞেস করুন!";
        } else {
            return "Sorry, I didn't quite catch that. For details, please call/WhatsApp +880 1711-000000, or ask me about the <strong>visiting hours</strong> or <strong>location</strong>!";
        }
    }

    // 5. Form Submission Event
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userText = chatInput.value.trim();
        if (!userText) return;

        // Print user message
        addMessage(userText, true);
        chatInput.value = '';

        // Simulate a "typing" delay to feel more natural (600ms)
        setTimeout(() => {
            const response = getBotResponse(userText);
            addMessage(response, false);
        }, 600);
    });
}

// 3. EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize UI
    renderServices();
    renderExperience();
    renderFloatingButtons();
    initGlowEffect();
    initChatbot();
    
    // Initialize Scroll Animations
    AOS.init({
        once: true, // Animations happen only once on scroll down
        offset: 100, // Offset (in px) from the original trigger point
        duration: 800, // Animation duration
        easing: 'ease-out-cubic',
    });
    
    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Custom Date Selector Logic
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

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm', 'bg-white/95');
            navbar.classList.remove('bg-white/90');
        } else {
            navbar.classList.remove('shadow-sm', 'bg-white/95');
            navbar.classList.add('bg-white/90');
        }
    });

    // Form Submission
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
            setTimeout(() => {
                statusMsg.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
});