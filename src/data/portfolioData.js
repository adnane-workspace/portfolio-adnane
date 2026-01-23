// Données du portfolio - Personnalisé avec votre CV

export const personalInfo = {
    name: "EL MENOUAR Adnane",
    role: "Futur Ingénieur d'État en Informatique",
    tagline: "Étudiant motivé, passionné par le développement et les technologies",
    description: "Étudiant motivé, passionné par le développement et les technologies, cherchant à renforcer ses compétences à travers des projets et expériences pratiques.",
    email: "adnaneelmenouar7@gmail.com",
    phone: "06 65 21 95 24",
    location: "Lotissement Mamounia, Route de Setrou - Fès",
    avatar: "/images/avatar.jpg",
    resume: "/documents/cv.pdf"
};

export const socialLinks = {
    github: "https://github.com/adnaneelmenouar",
    linkedin: "https://www.linkedin.com/in/adnane-el-menouar",
    twitter: "https://twitter.com/adnaneelmenouar",
    email: "mailto:adnaneelmenouar7@gmail.com"
};

export const skills = [
    {
        id: 1,
        name: "Laravel",
        category: "Backend",
        level: 85,
        icon: "FaReact"
    },
    {
        id: 2,
        name: "React",
        category: "Frontend",
        level: 80,
        icon: "FaReact"
    },
    {
        id: 3,
        name: "MySQL",
        category: "Database",
        level: 85,
        icon: "SiJavascript"
    },
    {
        id: 4,
        name: "Python",
        category: "Language",
        level: 75,
        icon: "SiTypescript"
    },
    {
        id: 5,
        name: "Java",
        category: "Language",
        level: 70,
        icon: "FaNodeJs"
    },
    {
        id: 6,
        name: "Docker",
        category: "DevOps",
        level: 70,
        icon: "FaGitAlt"
    },
    {
        id: 7,
        name: "PHP",
        category: "Backend",
        level: 85,
        icon: "FaCss3Alt"
    },
    {
        id: 8,
        name: "GitHub",
        category: "Tools",
        level: 80,
        icon: "FaGitAlt"
    },
    {
        id: 9,
        name: "JavaScript",
        category: "Language",
        level: 80,
        icon: "SiJavascript"
    },
    {
        id: 10,
        name: "Keycloak",
        category: "Security",
        level: 70,
        icon: "FaNodeJs"
    }
];

export const projects = [
    {
        id: 1,
        title: "Gestion des Ressources Humaines",
        description: "Application web de gestion des ressources humaines avec Laravel, React et Keycloak. Gestion des employés, absences, présences et retards.",
        image: "/images/project1.jpg",
        tags: ["Laravel", "React", "Keycloak"],
        github: "https://github.com/adnaneelmenouar/rh-management",
        demo: "https://demo-rh.example.com",
        featured: true
    },
    {
        id: 2,
        title: "Gestion d'Hébergement",
        description: "Application web de gestion d'hébergement développée avec Laravel et MySQL. Automatisation des réservations, factures et suivi de disponibilité des chambres.",
        image: "/images/project2.jpg",
        tags: ["Laravel", "MySQL"],
        github: "https://github.com/adnaneelmenouar/hebergement",
        demo: "https://demo-hebergement.example.com",
        featured: true
    },
    {
        id: 3,
        title: "Site École Polytechnique",
        description: "Participation à l'évolution du site principal de l'école en utilisant PHP, JavaScript, HTML et CSS.",
        image: "/images/project3.jpg",
        tags: ["PHP", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/adnaneelmenouar/ecole-site",
        demo: "https://www.polymtl.ca",
        featured: false
    }
];

export const experiences = [
    {
        id: 1,
        type: "work",
        title: "Stagiaire en développement Full-Stack",
        company: "Nelogix",
        location: "Fès",
        period: "01/07/2025 - 31/08/2025",
        description: "Réalisation d'un projet de gestion des ressources humaines avec Laravel, React et Keycloak.",
        achievements: [
            "Gestion des employés",
            "Gestion des absences",
            "Gestion des présences et des retards"
        ]
    },
    {
        id: 2,
        type: "work",
        title: "Stagiaire en développement Full-Stack",
        company: "COS ONEE",
        location: "Fès-Meknès",
        period: "01/03/2025 - 31/03/2025",
        description: "Réalisation d'une application web de gestion d'hébergement avec Laravel et MySQL.",
        achievements: [
            "Automatisation des réservations et factures",
            "Suivi de la disponibilité des chambres"
        ]
    },
    {
        id: 3,
        type: "work",
        title: "Stagiaire en développement web",
        company: "École polytechnique des Génies-Fès",
        location: "Fès",
        period: "08/08/2024 - 08/09/2024",
        description: "Participation à l'évolution du site principal de l'école en utilisant PHP, JavaScript, HTML et CSS.",
        achievements: []
    },
    {
        id: 4,
        type: "education",
        title: "Cycle d'ingénieur en Génie Informatique",
        company: "UPF - Université Privée de Fès",
        location: "Fès",
        period: "Depuis 2025",
        description: "Formation d'ingénieur en génie informatique (1ère année cycle d'ingénieur).",
        achievements: []
    },
    {
        id: 5,
        type: "education",
        title: "DTS Développement Digital Full stack",
        company: "OFPPT - Office de la formation professionnelle",
        location: "Fès",
        period: "2023 - 2025",
        description: "Formation en développement digital full stack avec spécialisation Laravel, React et technologies web modernes.",
        achievements: []
    }
];

export const about = {
    bio: "Étudiant en génie informatique, passionné par le développement full-stack et les nouvelles technologies. Je maîtrise plusieurs technologies dont Laravel, React, MySQL, Python et Java. Mon objectif est de renforcer mes compétences à travers des projets concrets et des expériences pratiques enrichissantes.",
    interests: [
        "Développement Full-Stack",
        "Technologies Web",
        "Méthodes Agiles",
        "Analyse et Initiative",
        "Apprentissage Rapide",
        "Travail d'Équipe"
    ],
    stats: [
        { label: "Années d'études", value: "3+" },
        { label: "Projets réalisés", value: "10+" },
        { label: "Stages complétés", value: "3" },
        { label: "Technologies", value: "10+" }
    ]
};
