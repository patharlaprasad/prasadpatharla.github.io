// Professional Skills array
const professionalSkills = [
  { skill: "Effective Communication", desc: "Clearly articulating ideas and actively listening to foster productive collaboration." },
  { skill: "Problem-Solving", desc: "Analyzing challenges and implementing efficient, innovative solutions." },
  { skill: "Time Management", desc: "Prioritizing tasks effectively to consistently meet deadlines." },
  { skill: "Adaptability", desc: "Quickly learning new tools and adjusting to dynamic work environments." },
  { skill: "Teamwork & Collaboration", desc: "Contributing positively to teams and achieving shared goals efficiently." }
];

// Technical Skills array with proficiency levels (percentage)
const technicalSkills = [
  { skill: "Python", level: 82 },
  { skill: "R Language", level: 81 },
  { skill: "MySQL", level: 75 },
  { skill: "DBMS fundamentals", level: 69 },
  { skill: "MS Excel", level: 84 },
  { skill: "Power BI", level: 85 },
  { skill: "Probability & Statistics", level: 79 },
  { skill: "Data Structures & Algorithms", level: 70 },
  { skill: "Operating Systems", level: 66 },
  { skill: "Supervised & Unsupervised Learning algorithms", level: 77 },
  { skill: "Regression, Classification, Clustering, Ensemble Methods", level: 80 },
  { skill: "Neural Networks, CNNs, RNNs", level: 77 }
];

// Skill descriptions for tooltips
const skillDescriptions = {
  "Python": "Experienced in Python scripting, automation, and data analysis.",
  "R Language": "Proficient in statistical computing and graphics.",
  "MySQL": "Skilled in relational database design and query optimization.",
  "DBMS fundamentals": "Understanding of database management systems concepts.",
  "MS Excel": "Proficient with data organization and analysis using Excel.",
  "Power BI": "Experienced with business intelligence and visualization.",
  "Probability & Statistics": "Strong foundation in statistical methods.",
  "Data Structures & Algorithms": "Good grasp of fundamental algorithms and data structures.",
  "Operating Systems": "Knowledge of OS concepts and management.",
  "Supervised & Unsupervised Learning algorithms": "Familiar with various machine learning techniques.",
  "Regression, Classification, Clustering, Ensemble Methods": "Applied predictive modeling and clustering.",
  "Neural Networks, CNNs, RNNs": "Experience with deep learning architectures."
};

// Skill badges for floating badge display
const skillBadges = {
  "Python": "Intermediate",
  "R Language": "Intermediate",
  "MySQL": "Advanced",
  "DBMS fundamentals": "Beginner",
  "Power BI": "Intermediate"
};

// Projects with categories for filtering and flip effect with images
const projects = [
  {
    name: "EduMentor AI – Student Performance Prediction & Personalized Recommendation System",
    desc: `An intelligent education analytics platform predicting student performance using machine learning. Built for Hyderabad Institute of Technology and Management with Python, Streamlit, Scikit-learn, and MongoDB.
    Features dynamic role-based dashboards for Admins, Faculty, and Students/Parents, real-time analytics, downloadable PDF reports, SHAP-based explainability, and multilingual support (English, Hindi, Telugu).
    Successfully reduced faculty workload by over 60% and enhanced personalized learning.`,
    github: "https://github.com/YOUR_GITHUB/edumentor-ai",
    category: "ml",
    image: "assests/project-1.png"
  },
  {
    name: "Diabetes Risk Prediction Web Application",
    desc: `A health diagnostic tool that predicts diabetes risk using Logistic Regression with SHAP explainability.
    Collects medical inputs (glucose, BMI, age, lifestyle), offers multilingual support, provides visual explanations, and generates PDF reports.
    Designed for patients and medical professionals even in rural clinics, aiding early diagnosis and lifestyle intervention.`,
    github: "https://github.com/YOUR_GITHUB/diabetes-risk-prediction",
    category: "web",
    image: "assests/project-2.png"
  },
  {
    name: "Lung Cancer Detection Using CNN-Based Deep Learning",
    desc: `Developed a deep learning model with CNNs to detect lung cancer from chest X-rays using TensorFlow, Keras, and OpenCV.
    Achieved over 92% accuracy with real-time data augmentation, dropout, and batch normalization.  
    Built a Streamlit interface for instant predictions and confidence scores, enabling rapid and cost-effective early cancer detection in low-resource settings.`,
    github: "https://github.com/YOUR_GITHUB/lung-cancer-detection",
    category: "data",
    image: "assests/project-3.png"
  }
];

// Hackathons data
const hackathons = [
  { name: "Smart India Hackathon 2024", achievement: "Internal Finalist" },
  { name: "Novothon 2024", achievement: "3rd Runner Up" },
  { name: "Hack Your Path 3.0 2023", achievement: "3rd Runner Up" }
];

// Certifications data
const certifications = [
  { title: "42 hours workshop on Data Analysis, Art of Data Transforming and MySQL", issuer: "The Library Organization", year: "2025" },
  { title: "Artificial Intelligence for All", issuer: "IUCEE", year: "2024" },
  { title: "Python Essentials", issuer: "Telangana Academy for Skill & Knowledge (TASK)", year: "2024" },
  { title: "Machine Learning and Deep Learning Fundamentals", issuer: "Udemy", year: "2025" }
];

// Fill Professional Skills
const profSkillsContainer = document.getElementById('professional-skills');
profSkillsContainer.innerHTML = "";
professionalSkills.forEach(({ skill, desc }) => {
  const card = document.createElement('div');
  card.className = 'prof-skill-card';
  card.innerHTML = `
    <div class="bullet">✓</div>
    <div>
      <strong>${skill}</strong>
      <p>${desc}</p>
    </div>`;
  profSkillsContainer.appendChild(card);
});

// Fill Technical Skills badges with floating badges
const techSkillsContainer = document.getElementById('technical-skills');
techSkillsContainer.innerHTML = "";
technicalSkills.forEach(({ skill }) => {
  const span = document.createElement('span');
  span.className = "skill";
  span.textContent = skill;

  if (skillBadges[skill]) {
    const badge = document.createElement('span');
    badge.className = "floating-badge";
    badge.textContent = skillBadges[skill];
    span.appendChild(badge);
  }

  techSkillsContainer.appendChild(span);
});

// Fill Technical Skill Bars with tooltips
const techSkillBars = document.getElementById('technical-skill-bars');
techSkillBars.innerHTML = "";
technicalSkills.forEach(({ skill, level }) => {
  const tooltipText = skillDescriptions.hasOwnProperty(skill) ? skillDescriptions[skill] : "Skill details coming soon.";
  
  const wrapper = document.createElement('div');
  wrapper.className = 'skill-bar-wrapper';
  wrapper.innerHTML = `
    <div><span>${skill} <span class="skill-percentage" data-level="${level}">0%</span></span>
      <div class="skill-bar"><div class="skill-bar-inner" data-level="${level}"></div></div>
    </div>
    <div class="tooltip">${tooltipText}</div>
  `;
  techSkillBars.appendChild(wrapper);
});

// Populate Projects with flip cards, images & filtering
const projectsList = document.querySelector('.projects-list');

function populateProjects(filter = "all") {
  projectsList.innerHTML = "";
  projects.forEach((proj, idx) => {
    if (filter === "all" || proj.category === filter) {
      const card = document.createElement("div");
      card.className = "project-card fade-in";
      card.innerHTML = `
        <div class="project-inner">
          <div class="project-front">
            <img src="${proj.image}" alt="${proj.name}" class="project-image" />
            <h3>${proj.name}</h3>
            <p>${proj.desc.substring(0, 120)}...</p>
          </div>
          <div class="project-back">
            <p>${proj.desc}</p>
            <a href="${proj.github}" target="_blank" style="margin-right: 12px;">View on GitHub</a>
            <a href="${proj.github}" target="_blank">View Code</a>
          </div>
        </div>
      `;
      projectsList.appendChild(card);
    }
  });

  const allCards = Array.from(document.querySelectorAll('.project-card'));
  allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      allCards.forEach(c => {
        if (c !== card) c.classList.add('dimmed');
        else c.classList.remove('dimmed');
      });
    });
    card.addEventListener('mouseleave', () => {
      allCards.forEach(c => c.classList.remove('dimmed'));
    });
  });
}

// Setup project filter buttons
window.addEventListener('DOMContentLoaded', () => {
  populateProjects();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      populateProjects(btn.dataset.filter);
    });
  });
});

// Fill Hackathons dynamically with fade-in
const hackathonsList = document.getElementById('hackathons-list');
function loadHackathons() {
  hackathonsList.innerHTML = "";
  hackathons.forEach(h => {
    const hackDiv = document.createElement('div');
    hackDiv.className = "hackathon-card fade-in";
    hackDiv.innerHTML = `
      <h4>${h.name}</h4>
      ${h.achievement ? `<p>Achievement: ${h.achievement}</p>` : ''}
    `;
    hackathonsList.appendChild(hackDiv);
  });
}

// Fill Certifications dynamically with fade-in
const certificationsList = document.getElementById('certifications-list');
function loadCertifications() {
  certificationsList.innerHTML = "";
  certifications.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.className = "certification-card fade-in";
    certDiv.innerHTML = `
      <h4>${cert.title}</h4>
      <p>Issuer: ${cert.issuer}${cert.year ? ', Year: ' + cert.year : ''}</p>
    `;
    certificationsList.appendChild(certDiv);
  });
}

// Animate Skill Bars
function animateSkillCounters() {
  const counters = document.querySelectorAll('.skill-percentage');
  counters.forEach((counter) => {
    const target = +counter.dataset.level;
    let count = 0;
    const increment = target / 30;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.textContent = target + '%';
        clearInterval(interval);
      } else {
        counter.textContent = Math.round(count) + '%';
      }
    }, 30);
  });
}

// Animate Counters for Projects & Skills
function animateCounter(id, target) {
  const elem = document.getElementById(id);
  let count = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      elem.textContent = target;
      clearInterval(interval);
    } else {
      elem.textContent = count;
    }
  }, 15);
}

const totalProjects = projects.length;
const totalSkills = technicalSkills.length + professionalSkills.length;

const statsSection = document.getElementById('stats');
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter('project-count', totalProjects);
      animateCounter('skill-count', totalSkills);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar-inner').forEach((bar, idx) => {
    setTimeout(() => {
      bar.style.width = bar.dataset.level + "%";
      if (idx === 0) animateSkillCounters();
    }, 200 + idx * 200);
  });

  // Scroll animations on .container sections
  const sections = document.querySelectorAll('.container');
  const observerOptions = { root: null, threshold: 0.1 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));

  // Typing effect in About section
  const text = [
    "a passionate Software developer.",
    "an AI enthusiast.",
    "a Continuous learner.",
    "excited to build creative projects."
  ];

  let index = 0;
  let charIndex = 0;
  const typedElement = document.getElementById('typed');

  function type() {
    if (charIndex < text[index].length) {
      typedElement.textContent += text[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedElement.textContent = text[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 70);
    } else {
      index = (index + 1) % text.length;
      setTimeout(type, 500);
    }
  }

  setTimeout(type, 1000);

  // Load hackathons and certifications lists
  loadHackathons();
  loadCertifications();

  // Dynamic footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll to Top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

// Contact form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();

    if (name && email) {
      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();
    } else {
      alert('Please fill in both your name and email.');
    }
  });
}
