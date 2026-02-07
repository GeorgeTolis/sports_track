// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('nav-scrolled');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// Mobile Menu Toggle (Simplified)
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
    // In a real app, you'd toggle a mobile menu overlay here
    alert('Mobile menu clicked!');
});

// Populate Features
const features = [
    {
        title: "Real-Time Tracking",
        desc: "Know exactly which game is playing on every TV in every bar, in real-time.",
        icon: "tv",
    },
    {
        title: "Find Your Vibe",
        desc: "Filter by atmosphere: Loud & Rowdy, Family Friendly, or Craft Beer lovers.",
        icon: "map-pin",
    },
    {
        title: "Fan Community",
        desc: "Read reviews from fellow fans so you never end up at the wrong spot.",
        icon: "users",
    },
    {
        title: "Live Occupancy",
        desc: "Check how busy a venue is before you leave the house to secure your seat.",
        icon: "zap",
    }
];

const grid = document.getElementById('features-grid');

features.forEach(f => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
        <div class="mb-6 p-3 bg-slate-950 w-fit rounded-2xl border border-slate-800 group-hover:bg-orange-600/10 transition-colors">
            <i data-lucide="${f.icon}" class="text-orange-500"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">${f.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">${f.desc}</p>
    `;
    grid.appendChild(card);
});

// Re-run Lucide for dynamic elements
lucide.createIcons();