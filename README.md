
## 🌌 Project Overview

This project is a **Full-Stack Web Application** designed to host multiple interactive mini-games. It highlights the integration between a **Java Backend (Spring Boot)** and a **Responsive Frontend** using a modern **Glassmorphism** design language.

### 🕹️ Included Games

* **🪨 Rock Paper Scissors:** Features backend logic to handle game results via a REST API.
* **🎡 Random Wheel:** A dynamic HTML5 Canvas wheel where players can add custom names and spin for a winner.
* **❌ Tic Tac Toe:** A polished 2-player strategy game with automated win-detection and state management.

-----

## 🎨 UI & Design Features

The application features a futuristic aesthetic using **Glassmorphism**:

* **Backdrop Blur:** Transparent, frosted-glass effect for game cards.
* **Responsive Layout:** Fully compatible with Desktop, Tablet, and Mobile screens.
* **Animated Transitions:** Smooth UI updates using CSS3 and JavaScript.

-----

## 🛠️ Technical Stack

### **Backend (Core Logic)**

* **Spring Boot MVC:** Manages routing and serves Thymeleaf templates.
* **REST Controllers:** Provides API endpoints for game mechanics.
* **Spring Security:** Configured to secure the application while allowing public access to game routes.

### **Frontend (Interactive UI)**

* **JavaScript (ES6+):** Handles game state, DOM manipulation, and Canvas animations.
* **Thymeleaf:** Integrated as the template engine to bind Java data to the UI.
* **Bootstrap 5:** Used for the underlying grid system and layout components.

-----

## 📂 Directory Structure

```text
src/main/java/com/thiha/JavaMiniGames/
├── config/       # Security & App Configurations
├── controller/   # Web Mappings & API Endpoints
├── model/        # Data Transfer Objects (DTOs)
└── JavaMiniGamesApplication.java

src/main/resources/
├── static/       # CSS (Glassmorphism) & JS (Game Logic)
└── templates/    # HTML5 Thymeleaf Templates
```

-----

## 🚀 Quick Start

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/JavaMiniGames.git
```

### 2\. Run the Application

Open the project in your IDE and run the main class, or use the terminal:

```bash
mvn spring-boot:run
```

### 3\. Access in Browser

Go to [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080) to start playing.

-----

## 🔮 Future Roadmap

* [ ] **Database Integration:** Save player high scores using MySQL/H2.
* [ ] **Global Leaderboard:** Display top players across all games.
* [ ] **Multiplayer Mode:** Real-time matches using WebSockets.

-----
Developed by Thiha.
-----