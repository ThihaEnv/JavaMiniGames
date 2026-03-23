
-----

# 🎮 Java Mini-Games Hub

> A sleek, interactive collection of classic games built with **Spring Boot** and **Modern Web Technologies**.

\<div align="center"\>
\<img src="[https://img.shields.io/badge/Java-17+-orange?style=for-the-badge\&logo=java](https://www.google.com/search?q=https://img.shields.io/badge/Java-17%2B-orange%3Fstyle%3Dfor-the-badge%26logo%3Djava)" /\>
\<img src="[https://img.shields.io/badge/Spring\_Boot-3.4.x-green?style=for-the-badge\&logo=springboot](https://www.google.com/search?q=https://img.shields.io/badge/Spring_Boot-3.4.x-green%3Fstyle%3Dfor-the-badge%26logo%3Dspringboot)" /\>
\<img src="[https://img.shields.io/badge/Frontend-HTML5\_CSS3\_JS-blue?style=for-the-badge\&logo=javascript](https://www.google.com/search?q=https://img.shields.io/badge/Frontend-HTML5_CSS3_JS-blue%3Fstyle%3Dfor-the-badge%26logo%3Djavascript)" /\>
\<img src="[https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge](https://www.google.com/search?q=https://img.shields.io/badge/License-MIT-yellow%3Fstyle%3Dfor-the-badge)" /\>
\</div\>

-----

## 🌌 Overview

This project is a **Full-Stack Web Application** that hosts multiple mini-games. It demonstrates the seamless integration between a **Java Backend (REST API)** and a **Responsive Frontend (Glassmorphism UI)**.

### 🕹️ Included Games

* **🪨 Rock Paper Scissors:** Features a custom API integration where the backend calculates the win/loss logic.
* **🎡 Random Wheel:** A dynamic HTML5 Canvas wheel. Add names, spin, and let fate decide\!
* **❌ Tic Tac Toe:** A polished 2-player strategy game with automated win-detection and a reset system.

-----

## 🎨 UI Design (Glassmorphism)

The project utilizes a futuristic **Glassmorphism** aesthetic:

* **Translucent Cards:** Using `backdrop-filter: blur()`.
* **Glowing Accents:** Neon borders and shadows for a gaming "vibe".
* **Fully Responsive:** Designed to look great on both Desktop and Mobile.

-----

## 🛠️ Technical Architecture

### **Backend (The Brain)**

* **Spring Boot MVC:** Handles routing between the menu and game pages.
* **REST Controllers:** Provides API endpoints for game logic (e.g., `/api/play`).
* **Spring Security:** Configured to allow public access to game routes while maintaining a secure foundation.

### **Frontend (The Face)**

* **JavaScript (ES6+):** Manages game states, DOM updates, and Canvas animations.
* **Thymeleaf:** Serves as the template engine to link Java data with HTML.

-----

## 📂 Directory Structure

```bash
src/main/java/com/thiha/JavaMiniGames/
├── ⚙️ config/       # Security & App Settings
├── 🎮 controller/   # Web & API Mappings
├── 📦 model/        # Data Transfer Objects (GameResult)
└── 🚀 Application.java

src/main/resources/
├── 📁 static/       # CSS & Integrated JS Logic
└── 📁 templates/    # HTML5 Thymeleaf Templates
```

-----

## 🚀 Quick Start

1.  **Clone the repo**
    ```bash
    git clone https://github.com/ThihaEnv/JavaMiniGames.git
    ```
2.  **Run with Maven**
    ```bash
    mvn spring-boot:run
    ```
3.  **Play\!**
    Open `http://localhost:8080` in your favorite browser.

-----

## 🔮 Future Roadmap

- [ ] **Global Leaderboard:** Save high scores to a MySQL database.
- [ ] **Multiplayer Mode:** Real-time Tic Tac Toe using WebSockets.
- [ ] **User Accounts:** Secure login and profile customization.

-----

\<div align="center"\>
\<p\>Developed with ❤️ by \<b\>Thiha\</b\>\</p\>
\<a href="[https://github.com/ThihaEnv](https://www.google.com/search?q=https://github.com/ThihaEnv)"\>
\<img src="[https://img.shields.io/badge/Follow\_Me-GitHub-black?style=flat-square\&logo=github](https://www.google.com/search?q=https://img.shields.io/badge/Follow_Me-GitHub-black%3Fstyle%3Dflat-square%26logo%3Dgithub)" /\>
\</a\>
\</div\>

-----

### How to use this:

1.  Copy the code above.
2.  In your project root, create a file named `README.md`.
3.  Paste the code and replace `ThihaEnv` with your actual GitHub username.

**Important Tip:** To avoid that **YAML Error** you mentioned, make sure you don't use `*` as the very first character in a line inside the metadata header (the part between `---`). In the body of the README (like above), it is perfectly safe\!

Would you like me to show you how to add **Screenshots** of your games into this README to make it look even better?