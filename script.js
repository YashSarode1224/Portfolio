const container = document.getElementById('canvas-container');

// --- Background Visuals (Matrix + Three.js) ---
if (container) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Outer Sphere
    const geometryOuter = new THREE.IcosahedronGeometry(2.2, 1);
    const materialOuter = new THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphereOuter = new THREE.Mesh(geometryOuter, materialOuter);
    scene.add(sphereOuter);

    // Inner Sphere
    const geometryInner = new THREE.OctahedronGeometry(1.2, 0);
    const materialInner = new THREE.MeshBasicMaterial({ 
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4
    });
    const sphereInner = new THREE.Mesh(geometryInner, materialInner);
    scene.add(sphereInner);

    // Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Matrix Vars
    const fontSize = 14;
    const fontFamily = 'JetBrains Mono, monospace'; 
    let columns = 0;
    let drops = [];
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) { drops[i] = 1; }
        
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "01010101"; 

    function animate() {
        ctx.fillStyle = "rgba(13, 17, 23, 0.05)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#238636"; 
        ctx.font = `${fontSize}px ${fontFamily}`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        const time = Date.now() * 0.001;
        sphereOuter.rotation.y = (time * 0.2) + (mouseX * 0.001);
        sphereOuter.rotation.x = (time * 0.1) + (mouseY * 0.001);
        sphereInner.rotation.y = (time * -0.5) + (mouseX * 0.001);
        sphereInner.rotation.x = (time * -0.2) + (mouseY * 0.001);
        particlesMesh.rotation.y = (time * 0.05) + (mouseX * 0.0005);
        particlesMesh.rotation.x = (mouseY * 0.0005);
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

// --- Project Data ---
const projectData = {
    "collab": {
        title: "VIT Collab Hub", 
        tech: ["HTML", "CSS", "JS", "Firebase"],
        fullDesc: "VIT Collab Hub connects students through emails, offering a comprehensive suite for project collaboration. Users can create detailed profiles, recruit team members, and manage workflows using a drag-and-drop Taskboard. The platform features real-time chat for seamless communication and a project discovery section to explore and join public projects, fostering a collaborative environment for students to innovate together. The website is live with use of firebase hosting.",
        links: { live: "#", repo: "#" },
        images: [
            { src: "main(vitcollabhub).png", title: "Main Page", desc: "Home Page,Where you have option like features ,how the apllication works,contact" },
            { src: "login(vitcollabhub).png", title: "Login page", desc: "Sign up or Login into our website" },
            { src: "profilesetup(vitcollabhub).png", title: "Profile set up", desc: "When you login first time you have to set up your profile for further use,It includes your Name,Registration number,Block,bio and also show case your project through github links" },
            { src: "dashboard(1-vitcollabhub).png", title: "Dashboard", desc: "Here you can start to create the project,Have option to browse members,edit/view your profile,logout,view your recent message conversations chatbox" },
            { src: "dashboard(2-vitcollabhub).png", title: "Dashboard", desc: "Under create your project you can see your created project,Enrolled project,Public/available projects" },
            { src: "yourproject.png", title: "Your project", desc: "When you create your project you can view the option like join request where you can accept the external requests,Delete project,view members" },
            { src: "teamchat(vitcollabhub).png", title: "Teamchat", desc: "Here you can chat with your teammembers" },
            { src: "Taskmanager(vitcollabhub).png", title: "Taskmanager", desc: "You can add your task,add to in progress and done box,but when you add the task to done box you have to add your github link for the same task" },
            { src: "publicproject(vitcollabhub).png", title: "Public project", desc: "You can send request to the creator to contribute also you can see the team members" },
            { src: "lockedchat(vitcollabhub).png", title: "Locked Groupchat", desc: "When you are not the part of the project you can't access the teamchat option" },
            { src: "Browsemembers(vitcollabhub).png", title: "Browse members", desc: "You can browse the members where you can access their profiles" },
            { src: "otherprofile(vitcollabhub).png", title: "Other's profile", desc: "Access other's profile , you can also send Dm to their chatbox" },
            { src: "dm(vitcollabhub).png", title: "Direct message", desc: "Setup your conversation with one to one chat feature" }
        ]
    },
    "weather": {
        title: "Weather App",
        tech: ["Python", "PyQt5", "API"],
        fullDesc: "A desktop application that fetches real-time weather data. Built with Python and PyQt5 for a native OS feel.",
        links: { live: "#", repo: "#" },
        images: [
            { src: "Weather(weather).png", title: "Main Interface", desc: "Clean UI showing temperature and conditions." },
            { src: "error(weather).png", title: "Error handling", desc: "Shows error when city is not found,similarly every possible error is handled" }
        ]
    }
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const track = document.getElementById('sliderTrack');

    if (projectId && projectData[projectId] && track) {
        showSkeletonLoader();
        setTimeout(() => {
            loadProjectDetails(projectId);
        }, 1500); 
    }

    initInteractions();
    initTerminal();
});

function showSkeletonLoader() {
    const titleEl = document.getElementById('project-title');
    if(titleEl) titleEl.innerHTML = '<span class="skeleton skeleton-title"></span>';

    const techContainer = document.getElementById('project-tech');
    if(techContainer) techContainer.innerHTML = `<span class="skeleton skeleton-chip"></span><span class="skeleton skeleton-chip"></span><span class="skeleton skeleton-chip"></span>`;

    const descEl = document.getElementById('project-full-desc');
    if(descEl) descEl.innerHTML = `<span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text" style="width: 80%"></span>`;

    const track = document.getElementById('sliderTrack');
    if(track) track.innerHTML = '<div class="skeleton skeleton-box"></div>';
}

function loadProjectDetails(id) {
    const data = projectData[id];
    
    const titleEl = document.getElementById('project-title');
    const descEl = document.getElementById('project-full-desc');
    
    if(titleEl) titleEl.innerText = data.title;
    if(descEl) descEl.innerText = data.fullDesc;
    
    const liveBtn = document.getElementById('live-link');
    const repoBtn = document.getElementById('repo-link');
    if(liveBtn) {
        if (data.links.live !== "#") liveBtn.href = data.links.live;
        else liveBtn.style.display = 'none';
    }
    if(repoBtn) repoBtn.href = data.links.repo;

    const techContainer = document.getElementById('project-tech');
    if(techContainer) {
        techContainer.innerHTML = '';
        data.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerText = tech;
            techContainer.appendChild(tag);
        });
    }

    const track = document.getElementById('sliderTrack');
    if(track) {
        track.innerHTML = ''; 
        data.images.forEach((imgData, index) => {
            const img = document.createElement('img');
            img.src = imgData.src;
            img.className = 'slide';
            img.setAttribute('data-title', imgData.title);
            img.setAttribute('data-desc', imgData.desc);
            track.appendChild(img);
        });
        initSlider();
    }
}

function initSlider() {
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    const slideTitle = document.getElementById('slide-title');
    const slideDesc = document.getElementById('slide-desc');

    if (!track) return;

    setTimeout(() => {
        const slides = Array.from(track.children);
        if (slides.length === 0) return;

        let currentIndex = 0;

        if(dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }

        function updateText(index) {
            const title = slides[index].getAttribute('data-title');
            const desc = slides[index].getAttribute('data-desc');
            if (slideTitle) slideTitle.innerText = title || "";
            if (slideDesc) slideDesc.innerText = desc || "";
        }

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            if(dotsContainer) {
                const dots = Array.from(dotsContainer.children);
                dots.forEach(dot => dot.classList.remove('active'));
                if(dots[currentIndex]) dots[currentIndex].classList.add('active');
            }
            updateText(currentIndex);
        }

        const newPrev = prevBtn.cloneNode(true);
        const newNext = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        
        newPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
        newNext.addEventListener('click', () => goToSlide(currentIndex + 1));
        updateText(0);
    }, 100);
}

function initInteractions() {
    const sections = document.querySelectorAll('section, .stat-card, .project-card, .info-card, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });
    sections.forEach(sec => {
        sec.classList.add('hidden');
        observer.observe(sec);
    });

    const cards = document.querySelectorAll('.stat-card, .project-card, .info-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    const subtitleElement = document.querySelector('.hero .subtitle');
    if (subtitleElement && subtitleElement.innerText.length === 0) { 
        const textToType = "Full Stack Developer by day. Competitive gamer by night.";
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < textToType.length) {
                subtitleElement.innerHTML += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 30); 
            } else {
                subtitleElement.innerHTML += '<span class="cursor">&nbsp;</span>';
            }
        }
        setTimeout(typeWriter, 500);
    }
}

// --- Terminal Logic ---
function initTerminal() {
    const toggleBtn = document.getElementById('terminal-toggle');
    const termWindow = document.getElementById('terminal-window'); 
    const closeBtn = document.getElementById('close-term');
    const input = document.getElementById('terminal-input');
    const body = document.getElementById('terminal-body');

    // JS Force Positioning
    const wrapper = document.querySelector('.terminal-wrapper');
    if(wrapper) {
        wrapper.style.position = 'fixed';
        wrapper.style.left = '20px';
        wrapper.style.bottom = '20px';
        wrapper.style.zIndex = '10000';
    }

    if(!toggleBtn || !termWindow) return;

    toggleBtn.addEventListener('click', () => {
        termWindow.classList.toggle('hidden-term');
        if (!termWindow.classList.contains('hidden-term')) {
            setTimeout(() => input.focus(), 300);
        }
    });

    closeBtn.addEventListener('click', () => {
        termWindow.classList.add('hidden-term');
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';
            processCommand(cmd);
        }
    });

    function processCommand(cmd) {
        addLine(`➜ ~ ${cmd}`, 'cmd-highlight');
        
        switch(cmd) {
            case 'help':
                addLine("Available commands:");
                addLine("- about: Who am I?");
                addLine("- skills: My tech stack");
                addLine("- projects: View my work");
                addLine("- social: Connect with me");
                addLine("- clear: Clear terminal");
                break;
            case 'about':
                addLine("Yash Nitin Sarode. 1st Year CSE @ VIT Vellore.");
                addLine("I build web apps and grind Valorant.");
                break;
            case 'skills':
                addLine("Front: HTML, CSS, JS, React, Three.js");
                addLine("Back: Python, Firebase");
                addLine("Other: C, DSA");
                break;
            case 'projects':
            case 'project': 
                addLine("redirecting to projects...");
                setTimeout(() => window.location.assign("projects.html"), 1000);
                break;
            case 'social':
                addLine("GitHub: github.com/YashSarode1224");
                addLine("LinkedIn: linkedin.com/in/yashnsarode");
                break;
            case 'clear':
                body.innerHTML = '';
                break;
            case 'sudo':
                addLine("Permission denied: You are not root.", "term-error");
                break;
            default:
                addLine(`Command not found: ${cmd}`, "term-error");
        }
        
        body.scrollTop = body.scrollHeight;
    }

    function addLine(text, className = '') {
        const div = document.createElement('div');
        div.className = `term-line ${className}`;
        div.innerText = text;
        body.appendChild(div);
    }
}
