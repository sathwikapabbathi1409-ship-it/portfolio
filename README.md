# Pabbathi Sathwika - Professional AI/ML Portfolio

A sleek, responsive, and recruiter-friendly personal portfolio website built for **Pabbathi Sathwika**, a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at CMR Engineering College. 

This portfolio is designed with a premium, high-contrast **Black & Red OLED theme** (eco-friendly user view) and features interactive smooth scrolling, dark/light theme switching, and custom AI-inspired mockups.

---

## 🚀 Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (CSS Variables, Flexbox, Grid, Keyframe Animations), and Vanilla JavaScript.
- **Backend (Dev Server)**: Python, FastAPI (static files serving, routing).
- **Icons**: Lucide Icons (CDN delivery).
- **Typography**: Google Fonts (Outfit & Plus Jakarta Sans).
- **Document Generation**: Python (`reportlab` for compile-to-PDF resume).

---

## ✨ Features

- **Eco-Friendly Dark Theme**: True black background (`#000000`) optimized for OLED/AMOLED screens to reduce energy consumption, highlighted by soft crimson glows and accents.
- **Light Theme Switcher**: Toggle between Dark and Light mode via a custom header switch (persisted in `localStorage`).
- **Recruiter-Focused Layout**: Direct access to your official greyscale headshot, education metrics (CGPA: 8.48), active learning timeline, and hackathon wins.
- **Interactive Project Showcase**: Highlights "Projects In Progress" with problem statements, technology tags, and repository/deployment links.
- **Integrated Profiles**: One-click social and coding connections:
  - [LinkedIn Profile](https://www.linkedin.com/in/sathwika-pabbathi-2429ab2b3?utm_source=share_via&utm_content=profile&utm_medium=member_android)
  - [GitHub Profile](https://github.com/sathwikapabbathi1409-ship-it)
  - [LeetCode Profile](https://leetcode.com/u/8PHT51FGFY/)
- **Contact Channels**: Interactive contact form with mock network submission feedback (loading spinner transitions, success messages) and mail redirection.
- **Resume Downloader**: Downloads a synthesized professional PDF resume (`Pabbathi_Sathwika_Resume.pdf`).

---

## 📁 Repository Structure

```text
portfolio/
│
├── assets/                          # Custom images and downloadables
│   ├── sathwika_placeholder.png     # Classy greyscale official headshot
│   ├── project_chatbot.png          # AI Career Guidance Chatbot mockup
│   ├── project_resume.png           # AI Resume Analyzer mockup
│   ├── project_interview.png        # AI Interview Prep Assistant mockup
│   ├── Pabbathi_Sathwika_Resume.pdf # Auto-generated PDF Resume
│   └── Pabbathi_Sathwika_Resume.txt # Auto-generated Text Resume
│
├── index.html                       # Semantic HTML structure & metadata
├── style.css                        # Modern CSS design system & media queries
├── script.js                        # Theme switcher, scroll animation observers, forms
├── main.py                          # FastAPI server for local serving & static hosting
└── README.md                        # Documentation (this file)
```

---

## 🛠️ How to Run Locally

### Option A: Using the FastAPI Server (Recommended)
This approach serves the site under a local server environment and supports automatic reloading during file modifications.

1. Ensure **Python 3** is installed.
2. Install the lightweight server dependencies:
   ```bash
   pip install fastapi uvicorn
   ```
3. Run the reload server:
   ```bash
   python -m uvicorn main:app --reload
   ```
4. Open your web browser and navigate to:
   [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Option B: Directly opening HTML
You can also view the website offline without running a server:
1. Double-click the `index.html` file in your file explorer to open it in your preferred web browser.

---

## 🎨 Customizations

- **Replacing Profile Photo**: Replace the file at `assets/sathwika_placeholder.png` with a new square image of your choice.
- **Modifying Resume Details**: To update the generated PDF resume, edit the text inside your local resume generation configurations or edit the PDF directly, then save it as `assets/Pabbathi_Sathwika_Resume.pdf`.
