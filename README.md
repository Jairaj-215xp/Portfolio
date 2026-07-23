# 🚀 Jairaj Sapkal - Personal Portfolio

Welcome to my personal portfolio! This is a modern, fast, and responsive web application built to showcase my projects, skills, and continuous learning journey as an Information Technology student and developer.

**🌐 Live Demo:** [https://jairajsapkal.netlify.app/](https://jairajsapkal.netlify.app/)

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**: Semantic structure with advanced CSS features (Grid, Flexbox, Custom Properties, Backdrop-Filter).
- **Vanilla JavaScript (ES6)**: No heavy frameworks. Pure, fast, and lightweight JavaScript for DOM manipulation and animations.
- **JSON**: Centralized data management for easy content updates.
- **FontAwesome**: Modern icons for social links, tech tags, and UI elements.
- **Web3Forms**: Backend-less email forwarding for the contact section.
- **Hosted on Netlify**: Fast, continuous deployment.

---

## 📂 Project Structure

```text
📁 portfolio/
├── 📄 index.html          # Main HTML structure
├── 📄 README.md           # Project documentation
├── 📁 css/                # Modular CSS stylesheets
│   ├── style.css          # Global variables and typography
│   ├── hero.css           # Hero/Header styling
│   ├── about.css          # About me section
│   ├── timeline.css       # My Journey vertical timeline
│   ├── projects.css       # Featured projects grid
│   ├── contact.css        # Contact form and info
│   └── footer.css         # Footer styling
├── 📁 js/                 # Modular JavaScript
│   ├── dataLoader.js      # Fetches portfolio.json and kicks off rendering
│   ├── script.js          # Global scripts, Intersection Observer, smooth scrolling
│   ├── hero.js            # Injects Hero/About data & calculates CGPA
│   ├── journey.js         # Renders the vertical timeline
│   ├── projects.js        # Renders the projects grid
│   └── contact.js         # Handles Web3Forms submission & validation
├── 📁 data/
│   └── portfolio.json     # 🧠 The brain of the site - update this to change content!
└── 📁 assets/             # Images, resume, and project covers
```

---

## 🚀 How to Run Locally

If you'd like to run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jairaj-215xp/portfolio.git
   ```
2. **Open the folder:**
   ```bash
   cd portfolio
   ```
3. **Start a local server:**
   Because the site fetches data from a local JSON file (`dataLoader.js` uses `fetch()`), you need to run it through a local web server (opening the HTML file directly in the browser will cause a CORS error).
   
   If you have Python installed, run:
   ```bash
   python -m http.server 8000
   ```
   *Alternatively, use the "Live Server" extension in VS Code.*

4. **View the site:** Open `http://localhost:8000` in your browser.

---

## 📬 Contact

- **Email**: [sapkaljairaj215sm@gmail.com](mailto:sapkaljairaj215sm@gmail.com)
- **LinkedIn**: [Jairaj Sapkal](https://www.linkedin.com/in/jairaj-sapkal-5b8291385/)
- **X (Twitter)**: [@Jairaj_215xp](https://x.com/Jairaj_215xp)

---
*Designed & Built by Jairaj Sapkal* ⚡
