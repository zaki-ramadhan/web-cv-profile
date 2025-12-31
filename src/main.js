// CV Profile Data & Logic

// --- 1. Data Structure (Synced with Form Builder Inputs) ---
const cvData = {
    personal: {
        image: "./assets/images/portfolio/profile.webp",
        goals: "Open for Leadership Roles", // Input: Goals saat ini
        name: "Pelita", // Input: Full Name
        email: "pelita@upscale.id", // Input: Email
        phone: "+62 812 3456 7890", // Input: Phone
        address: "Jl. Merdeka No. 10", // Input: Address
        country: "Indonesia", // Input: Country
        cityState: "Bandung, Jawa Barat", // Input: City / State
        linkedin: "linkedin.com/in/pelita-dev", // Input: Linkedin
        linkedinUrl: "https://linkedin.com/in/pelita", 
        links: [ // Input: Links (Dynamic)
            { label: "github.com/pelita", url: "https://github.com/pelita" },
            { label: "pelita.dev", url: "https://pelita.dev" }
        ]
    },
    // Input: Summary (Text Area)
    summary: "Highly motivated Senior Fullstack Engineer with over 8 years of experience in building scalable web applications and microservices. Expert in the Laravel and Vue.js ecosystem with a strong focus on system performance, clean architecture, and team mentorship.",
    
    // Input: Experience (Title, Company, Type, Checkbox Present, Dates, City, Desc)
    experience: [
        {
            role: "Senior Fullstack Engineer",
            company: "Unicorn Tech Indonesia",
            type: "Full-time",
            location: "Jakarta", // Input: City
            startDate: "Jan 2021",
            endDate: "Present", // Logic: If checkbox true -> "Present"
            description: "Leading the checkout team to optimize transaction flow and payment gateway integrations. Migrated monolithic services to microservices architecture.", // Input: Description
            achievements: [ // Optional sub-field if supported, otherwise part of description
                "Reduced API response time by 60% through Redis caching strategies."
            ]
        },
        {
            role: "Fullstack Developer",
            company: "PT Sumroch Karya Indonesia",
            type: "Full-time",
            location: "Bandung",
            startDate: "Jan 2018",
            endDate: "Dec 2020",
            description: "Spearheaded the development of core ERP products using Laravel and Vue.js. Managed database architecture for high-traffic modules."
        }
    ],

    // Input: Education (School, Degree, Dates, City, Desc)
    education: [
        {
            school: "Institut Teknologi Bandung (ITB)",
            degree: "Master of Computer Science",
            location: "Bandung",
            startDate: "2021",
            endDate: "2023",
            description: "Thesis: 'Optimizing High-Concurrency Database Transactions in Distributed Systems'. Graduated Cum Laude."
        },
        {
            school: "Widyatama University",
            degree: "Bachelor's Degree in Informatics",
            location: "Bandung",
            startDate: "2016",
            endDate: "2020"
        }
    ],

    // Input: Skills (Skill, Level)
    skills: [
        { name: "PHP & Laravel", level: "Expert", percentage: 95 }, // percentage is optional/visual logic
        { name: "JavaScript / TypeScript", level: "Advanced", percentage: 88 },
        { name: "Vue.js & Nuxt", level: "Advanced", percentage: 85 },
        { name: "MySQL & PostgreSQL", level: "Advanced", percentage: 85 }
    ],

    // Input: Project (Name, Role, Year, Tools, Link, Desc)
    projects: [
        {
            title: "SaaS HR Management System",
            role: "Tech Lead",
            year: "2023",
            link: "https://example.com/hrms",
            description: "A comprehensive HR platform for managing 500+ employees, payroll, and attendance. Built with Multi-tenancy architecture.",
            tools: ["Laravel", "Tenancy", "Vue 3", "PostgreSQL"]
        },
        {
            title: "Smart Logistics Tracking",
            role: "Backend Engineer",
            year: "2022",
            link: "#",
            description: "IoT-based fleet tracking system processing 1000+ data points per second. Implemented real-time mapping and geofencing alerts.",
            tools: ["Node.js", "Express", "MongoDB", "MQTT"]
        }
    ],

    // Input: Courses (Course, Institution, Start & End Date)
    courses: [
        {
            name: "Clean Code Architecture",
            institution: "Uncle Bob",
            startDate: "Feb 2023",
            endDate: "Mar 2023"
        },
        {
            name: "Advanced Vue Design Patterns",
            institution: "Vue Mastery",
            startDate: "Jan 2022",
            endDate: "Feb 2022"
        }
    ],

    // Input: Certifications (Title, Institution, Date, Link)
    certifications: [
        {
            name: "AWS Certified Solutions Architect",
            institution: "Amazon Web Services",
            date: "2024",
            link: "#"
        },
        {
            name: "Laravel Certified Developer",
            institution: "Laravel",
            date: "2022"
        }
    ],

    // Input: Languages (Language, Level)
    languages: [
        { name: "Bahasa Indonesia", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Sundanese", level: "Native" }
    ],

    // Input: References (Name, Company, Phone, Email)
    references: [
        {
            name: "Budi Santoso",
            company: "Unicorn Tech", // Mapped to 'position' or displayed with name
            email: "budi.s@unicorn.tech",
            phone: "+62 811 9999 888"
        },
        {
            name: "Sarah Wijaya",
            company: "PT Sumroch Karya",
            email: "sarah.w@sumroch.com",
            phone: "+62 812 5555 444"
        }
    ],

    // Input: Organization (Title, Employer, Dates, Desc)
    organizations: [
        {
            role: "Community Lead",
            employer: "Laravel Bandung Community",
            startDate: "2021",
            endDate: "Present",
            description: "Organizing monthly meetups, workshops, and managing a community of 500+ developers."
        },
        {
            role: "Core Member",
            employer: "Google Developer Student Clubs - ITB",
            startDate: "2021",
            endDate: "2022",
            description: "Spearheaded the mobile development wing and organized multiple Cloud Computing workshops for students."
        },
        {
            role: "Volunteer Contributor",
            employer: "Open Source Indonesia",
            startDate: "2019",
            endDate: "2021",
            description: "Contributed to local government digital transformation projects and translated technical documentation for popular libraries."
        }
    ],

    // Input: Hobbies (Text Area - "What do you like")
    hobbies: "I have a deep passion for System Design and Cloud Architecture, often spending my weekends experimenting with new infrastructure tools. Outside of tech, I enjoy Hiking in the mountains of West Java to disconnect and recharge. I'm also an avid enthusiast of Mechanical Keyboards and enjoy Street Photography.",

    // Input: Additional (Activity Name, Title/Role, Start & End Date, Description)
    additional: [
        {
            activity: "Tech Book Club",
            title: "Member",
            startDate: "2020",
            endDate: "Present",
            description: "Monthly discussion on software engineering books."
        },
        {
            activity: "Hackathon Merdeka",
            title: "Participant",
            startDate: "Aug 2019",
            endDate: "Aug 2019",
            description: "Built a disaster relief app in 24 hours."
        }
    ]
};


// --- 2. Rendering Logic ---

function renderPersonal(data) {
    const header = document.getElementById('profile-header');
    header.innerHTML = `
        <div class="relative inline-block cursor-pointer group">
            <div class="w-32 h-32 bg-white rounded-full mx-auto mb-4 p-1 border-4 border-emerald-500 overflow-hidden shadow-2xl ring-4 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <img src="${data.image}" alt="${data.name}" class="w-full h-full object-cover rounded-full">
            </div>
        </div>
        <h1 class="text-2xl font-bold font-outfit mb-1 tracking-tight">${data.name}</h1>
        <!-- Role is not in input list provided, assumed derived from experience or goals, keeping generic if missing -->
        ${data.role ? `<p class="text-blue-100/80 text-sm font-medium mb-4">${data.role}</p>` : ''}
        
        ${data.goals ? `
        <div class="bg-white/10 backdrop-blur-sm py-3 px-4 rounded-xl border border-white/10 shadow-inner">
            <p class="text-[9px] text-blue-100/60 uppercase tracking-[0.2em] font-bold mb-0.5">Current Focus</p>
            <p class="text-xs font-bold text-white">${data.goals}</p>
        </div>` : ''}
    `;

    const contact = document.getElementById('contact-info');
    
    // Combine Address, City/State, Country
    const fullAddress = [data.address, data.cityState, data.country].filter(Boolean).join(', ');

    let linksHtml = '';
    if (data.links && data.links.length > 0) {
        linksHtml = `
        <div class="flex flex-col gap-3 mt-4">
            ${data.links.map(l => `
            <div class="flex items-start gap-3 text-blue-50">
                <svg class="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                <a href="${l.url}" target="_blank" class="hover:text-white transition-colors">${l.label}</a>
            </div>
            `).join('')}
        </div>`;
    }

    contact.innerHTML = `
        ${data.email ? `
        <div class="flex items-start gap-3 text-blue-50">
            <svg class="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <a href="mailto:${data.email}" class="hover:text-white transition-colors break-all">${data.email}</a>
        </div>` : ''}
        
        ${data.phone ? `
        <div class="flex items-start gap-3 text-blue-50">
            <svg class="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <a href="tel:${data.phone}" class="hover:text-white transition-colors">${data.phone}</a>
        </div>` : ''}

        ${fullAddress ? `
        <div class="flex items-start gap-3 text-blue-50">
            <svg class="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>${fullAddress}</span>
        </div>` : ''}

        ${data.linkedin ? `
        <div class="flex items-start gap-3 text-blue-50">
            <svg class="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <a href="${data.linkedinUrl}" target="_blank" class="hover:text-white transition-colors">${data.linkedin}</a>
        </div>
        <div class="mt-6 mb-4 border-t border-white/10"></div>` : ''}

        ${linksHtml}
    `;

    document.getElementById('copyright-text').innerText = `© ${new Date().getFullYear()} ${data.name} CV`;
}

function renderNav() {
    const nav = document.getElementById('nav-menu');
    let html = '';
    
    // STRICT ORDER: Personal(header), Summary, Experience, Education, Skills, Project, Course, Certifications, Languages, References, Organization, Hobbies, Additional
    const items = [
        { id: 'summary', label: 'Summary', check: cvData.summary },
        { id: 'experience', label: 'Experience', check: cvData.experience && cvData.experience.length },
        { id: 'education', label: 'Education', check: cvData.education && cvData.education.length },
        { id: 'skills', label: 'Skills', check: cvData.skills && cvData.skills.length },
        { id: 'projects', label: 'Projects', check: cvData.projects && cvData.projects.length },
        { id: 'courses', label: 'Courses', check: cvData.courses && cvData.courses.length },
        { id: 'certifications', label: 'Certifications', check: cvData.certifications && cvData.certifications.length },
        { id: 'languages', label: 'Languages', check: cvData.languages && cvData.languages.length },
        { id: 'references', label: 'References', check: cvData.references && cvData.references.length },
        { id: 'organizations', label: 'Organizations', check: cvData.organizations && cvData.organizations.length },
        { id: 'hobbies', label: 'Hobbies', check: cvData.hobbies }, // String check
        { id: 'additional', label: 'Additional', check: cvData.additional && cvData.additional.length }
    ];

    items.forEach(item => {
        if (item.check) {
            html += `
            <a href="#${item.id}" class="group flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-all"></span>
                <span class="text-xs font-bold tracking-widest uppercase">${item.label}</span>
            </a>`;
        }
    });
    nav.innerHTML = html;
}

function renderSection(id, data, renderItemFn, isContentId = false) {
    const section = document.getElementById(id);
    const suffix = isContentId ? '-content' : '-list';
    const container = document.getElementById(`${id}${suffix}`);
    
    // Check if data exists (Array > 0 or Truthy string/obj)
    const hasData = Array.isArray(data) ? data.length > 0 : !!data;

    if (hasData && section) {
        section.classList.remove('hidden');
        if (Array.isArray(data)) {
            container.innerHTML = data.map(renderItemFn).join('');
        } else {
            container.innerHTML = renderItemFn(data);
        }
    } else if (section) {
        section.classList.add('hidden');
    }
}

// --- Render Item Functions ---

const renderSummary = (text) => `
    <p class="text-slate-600 leading-relaxed text-sm">${text}</p>
`;

const renderExperience = (item) => `
    <div class="relative pl-8 md:pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-100">
        <div class="absolute left-[-4px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-white"></div>
        <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
            <div class="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                    <h3 class="text-xl font-bold text-slate-900">${item.role}</h3>
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span class="text-blue-600 font-bold text-sm">${item.company}</span>
                        <span class="text-slate-300">•</span>
                        <span class="text-slate-500 text-sm">${item.type}</span>
                        <span class="text-slate-300">•</span>
                        <span class="text-slate-500 text-sm">${item.location}</span>
                    </div>
                </div>
                <span class="shrink-0 max-w-fit text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    ${item.startDate} - ${item.endDate}
                </span>
            </div>
            <div class="text-slate-600 leading-relaxed text-sm space-y-2">
                <p>${item.description}</p>
                ${item.achievements ? `
                <ul class="list-disc list-outside ml-4 marker:text-blue-400">
                    ${item.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>` : ''}
            </div>
        </div>
    </div>
`;

const renderEducation = (item) => `
    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
        <div class="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-slate-900">${item.school}</h3>
                    <p class="text-blue-600 font-semibold text-sm">${item.degree}</p>
                    <p class="text-slate-400 text-xs mt-1">${item.location}</p>
                </div>
            </div>
            <span class="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap ml-16 sm:ml-0 max-w-fit">
                ${item.startDate} - ${item.endDate}
            </span>
        </div>
        ${item.description ? `
        <div class="text-slate-600 text-sm pl-16">
            <p>${item.description}</p>
        </div>` : ''}
    </div>
`;

const renderSkill = (item) => `
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div class="flex justify-between items-end mb-2">
            <h4 class="font-bold text-slate-900">${item.name}</h4>
            <span class="text-xs font-bold text-blue-600">${item.level}</span>
        </div>
        <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 rounded-full" style="width: ${item.percentage || 70}%"></div>
        </div>
    </div>
`;

const renderProject = (item) => `
    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer">
        <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-grow space-y-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">${item.title}</h3>
                        <p class="text-sm font-semibold text-slate-500 mt-1">${item.role} • ${item.year}</p>
                    </div>
                    ${item.link && item.link !== '#' ? `
                    <a href="${item.link}" target="_blank" class="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Project">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>` : ''}
                </div>
                <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tools.map(t => `<span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>
`;

const renderCourse = (item) => `
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
        <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-slate-900">${item.name}</h4>
            <span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">
                ${item.startDate} - ${item.endDate}
            </span>
        </div>
        <p class="text-sm text-blue-600 font-semibold mb-2">${item.institution}</p>
    </div>
`;

const renderCertificate = (item) => `
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
        <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-slate-900">${item.name}</h4>
            <span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">${item.date}</span>
        </div>
        <p class="text-sm text-blue-600 font-semibold mb-2">${item.institution}</p>
        ${item.link ? `
        <a href="${item.link}" target="_blank" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1">
            Show Credential
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>` : ''}
    </div>
`;

const renderLanguage = (item) => `
    <div class="flex justify-between items-center border-b border-slate-50 pb-3 last:border-0 last:pb-0">
        <span class="font-bold text-slate-900">${item.name}</span>
        <span class="text-sm text-slate-500">${item.level}</span>
    </div>
`;

const renderReference = (item) => `
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8"></div>
        <h4 class="font-bold text-slate-900 relative z-10">${item.name}</h4>
        <p class="text-sm text-blue-600 font-semibold mb-4 relative z-10">${item.company}</p>
        <div class="space-y-1 text-sm relative z-10">
            ${item.email ? `<a href="mailto:${item.email}" class="block text-slate-500 hover:text-blue-600 transition-colors">${item.email}</a>` : ''}
            ${item.phone ? `<a href="tel:${item.phone}" class="block text-slate-500 hover:text-blue-600 transition-colors">${item.phone}</a>` : ''}
        </div>
    </div>
`;

const renderOrganization = (item) => `
    <div class="py-4 first:pt-0 last:pb-0">
        <div class="flex justify-between items-start mb-1">
            <h4 class="font-bold text-slate-900">${item.role}</h4>
            <span class="text-xs font-bold text-slate-400">${item.startDate} - ${item.endDate}</span>
        </div>
        <p class="text-sm text-blue-600 font-semibold mb-2">${item.employer}</p>
        ${item.description ? `<p class="text-sm text-slate-600">${item.description}</p>` : ''}
    </div>
`;

// New Renderer for Text Area Hobbies
const renderHobbies = (text) => `
    <p class="text-slate-600 leading-relaxed text-sm">${text}</p>
`;

// New Renderer for Structured Additional Info
const renderAdditional = (item) => `
    <div class="py-4 border-b border-slate-50 last:border-0 last:pb-0 first:pt-0">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
            <div class="flex-grow">
                <h4 class="font-bold text-slate-900">${item.activity}</h4>
                <p class="text-sm text-blue-600 font-medium">${item.title}</p>
            </div>
            <span class="text-xs font-bold text-slate-400 shrink-0 bg-slate-50 px-2 py-1 rounded w-fit sm:mt-0 mt-1">
                ${item.startDate} - ${item.endDate}
            </span>
        </div>
        ${item.description ? `<p class="text-slate-600 text-sm leading-relaxed mt-1">${item.description}</p>` : ''}
    </div>
`;


// --- 3. Main Execution & Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all data
    renderPersonal(cvData.personal);
    renderNav();
    
    // STRICT ORDER EXECUTION
    renderSection('summary', cvData.summary, renderSummary, true);
    renderSection('experience', cvData.experience, renderExperience);
    renderSection('education', cvData.education, renderEducation);
    renderSection('skills', cvData.skills, renderSkill);
    renderSection('projects', cvData.projects, renderProject);
    renderSection('courses', cvData.courses, renderCourse); // Updated
    renderSection('certifications', cvData.certifications, renderCertificate);
    renderSection('languages', cvData.languages, renderLanguage);
    renderSection('references', cvData.references, renderReference);
    renderSection('organizations', cvData.organizations, renderOrganization);
    
    // Hobbies (Interests) - NOW TEXT AREA
    renderSection('hobbies', cvData.hobbies, renderHobbies, true); // true for '-content'
    
    // Additional - NOW STRUCTURED
    renderSection('additional', cvData.additional, renderAdditional);

    // 2. Interactive Logic (Scroll effects, etc)
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.8s ease-out';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }

    // Scroll to Top
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                scrollBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                scrollBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    // Adjusted to trigger only when the section is in the upper middle part of the viewport
    const observerOptions = { root: null, rootMargin: '-30% 0px -70% 0px', threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                // Remove active class from all
                navLinks.forEach(link => {
                    link.classList.remove('nav-active');
                    const dot = link.querySelector('span:first-child');
                    if(dot) dot.classList.add('opacity-0');
                });
                
                // Add active class to current
                let activeLink = document.querySelector(`nav a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('nav-active');
                    const dot = activeLink.querySelector('span:first-child');
                    if(dot) dot.classList.remove('opacity-0');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
