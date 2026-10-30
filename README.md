# 🚀 HE | Portfolio

My personal portfolio website built with **React** and **Vite**.
Explore my projects, skills, and get in touch, all with smooth animations and a responsive design.

🔗 **Live demo:** [hatimelbakkali.web.app](https://hatimelbakkali.web.app/)

## ✨ Features

- Page layout with **Navbar**, **Hero**, **About**, **Skills**, **Projects**, **Contact** and **Footer** sections
- ⏳ Animated **Preloader** on first load
- 🎞️ Smooth animations and scroll effects with **Motion** (`motion/react`)
- 🔁 Scrolling **ticker** of skills in the About section
- 🗂️ Projects showcase with images and links
- 🧠 Skills section
- 🔗 Social media links
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Respects reduced-motion preferences
- ☁️ Deployed on **Firebase Hosting**

## 🛠️ Built With

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,js,html,css,tailwind,firebase,figma,git,github" alt="Tech stack" />
</p>

---

## 📁 Project Structure

```
HatimPortfolio/
├── public/
│   ├── icons/
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   ├── document/        # CV and other documents
│   │   ├── icons/
│   │   ├── images/
│   │   └── projects/        # Project screenshots
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   ├── contactData.js
│   │   ├── linkNav.js       # Navbar links
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── socialLinks.js
│   │   └── tickerItems.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Preload.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/HatimPortfolio.git

# Go to the project folder
cd HatimPortfolio

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## ☁️ Deployment

```bash
# Install Firebase CLI (once)
npm install -g firebase-tools

# Login
firebase login

# Build then deploy
npm run build
firebase deploy
```

## 🛣️ Roadmap

- [x] Hero, About and Contact sections
- [x] Preloader and scroll animations
- [x] Responsive design
- [x] Deploy on Firebase
- [ ] Add more projects
- [ ] Dark / Light theme toggle
- [ ] Multi-language support

## 📬 Connect

If you want to see more of my work or contact me:
All links on Social media: [https://linktr.ee/HatimElbakkali](https://linktr.ee/HatimElbakkali)

---

Thank you! 😊