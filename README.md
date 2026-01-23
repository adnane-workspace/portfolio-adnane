# Portfolio React Professionnel

Portfolio moderne et responsive créé avec React, Vite, et Framer Motion.

## 🚀 Fonctionnalités

- ✨ Design moderne et minimaliste
- 🌓 Mode Dark/Light avec persistance
- 📱 Entièrement responsive (mobile, tablette, desktop)
- 🎨 Animations fluides avec Framer Motion
- 🎯 Navigation smooth scroll
- 📧 Formulaire de contact fonctionnel
- 🧩 Composants réutilisables
- 🎭 CSS Modules pour styles scopés

## 📦 Technologies Utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool rapide
- **Framer Motion** - Animations
- **React Icons** - Icônes
- **CSS Modules** - Styles scopés
- **EmailJS** - Envoi d'emails (optionnel)

## 🛠️ Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes

1. **Cloner le projet** (ou vous êtes déjà dans le dossier)

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## 📝 Personnalisation

### 1. Modifier vos informations

Éditez le fichier `src/data/portfolioData.js` pour personnaliser :
- Informations personnelles (nom, rôle, email, etc.)
- Compétences techniques
- Projets
- Expériences professionnelles
- Formation
- Liens réseaux sociaux

### 2. Ajouter vos images

Placez vos images dans le dossier `public/images/` :
- Photo de profil : `public/images/avatar.jpg`
- Images de projets : `public/images/project1.jpg`, etc.

### 3. Personnaliser les couleurs

Modifiez les variables CSS dans `src/index.css` :
```css
:root {
  --color-primary: #6366f1;
  --color-accent: #8b5cf6;
  /* ... autres couleurs */
}
```

### 4. Configurer EmailJS (optionnel)

Pour activer l'envoi d'emails via le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template d'email
4. Installez EmailJS :
```bash
npm install @emailjs/browser
```
5. Modifiez `src/components/Contact/Contact.jsx` pour utiliser EmailJS

## 📂 Structure du Projet

```
portfolio/
├── public/
│   └── images/          # Images du portfolio
├── src/
│   ├── components/      # Composants React
│   │   ├── About/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── Section/
│   │   ├── Skills/
│   │   └── ThemeToggle/
│   ├── context/         # Context API (Theme)
│   ├── data/            # Données du portfolio
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Sections du Portfolio

1. **Hero** - Introduction avec nom, rôle et CTA
2. **About** - Présentation, statistiques et centres d'intérêt
3. **Skills** - Compétences techniques avec barres de progression
4. **Projects** - Galerie de projets avec liens GitHub/Demo
5. **Experience** - Timeline d'expériences et formation
6. **Contact** - Formulaire de contact fonctionnel
7. **Footer** - Liens réseaux sociaux

## 🚀 Build de Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

Les fichiers de production seront dans le dossier `dist/`.

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 968px
- **Desktop** : > 968px

## 🎯 Bonnes Pratiques Implémentées

- ✅ Composants réutilisables
- ✅ Code commenté et structuré
- ✅ SEO-friendly (meta tags)
- ✅ Performance optimisée
- ✅ Accessibilité (aria-labels)
- ✅ Animations performantes
- ✅ Dark mode avec localStorage

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Contribution

N'hésitez pas à personnaliser ce portfolio selon vos besoins !

---

**Fait avec ❤️ et React**
