---

# 🎮 Java Mini Games Hub

A modern, full-stack web application featuring a collection of interactive mini-games. Built with **Spring Boot 3.x** for the backend and a sleek, **Glassmorphism-inspired UI** for the frontend.



## 🌟 Featured Games
* **Rock Paper Scissors:** Challenge the computer in a classic battle of wits.
* **Random Wheel:** A customizable spinning wheel for giveaways or decision-making. Add names dynamically and watch it spin!
* **Tic Tac Toe:** A classic two-player strategy game with a clean, responsive grid.

## 🛠️ Tech Stack
* **Backend:** Java 17+, Spring Boot 3.4.x (MVC & REST)
* **Frontend:** HTML5, CSS3 (Custom Glassmorphism), JavaScript (ES6+)
* **Security:** Spring Security (Configured for open access to game routes)
* **Styling:** Bootstrap 5 & Font Awesome Icons
* **Template Engine:** Thymeleaf

## 📂 Project Structure
```text
src/main/java/com/thiha/JavaMiniGames/
├── config/             # Security Configuration (CORS, CSRF, Route Permits)
├── controller/         # GameController (Thymeleaf) & GameApiController (REST)
├── model/              # Data Models (e.g., GameResult.java)
└── JavaMiniGamesApplication.java

src/main/resources/
├── static/
│   ├── css/style.css   # Modern Glassmorphism UI styles
│   └── js/script.js    # Integrated Game Logic & DOM Manipulation
└── templates/          # Responsive HTML5 Templates (index, rps, wheel, tictactoe)
```

## 🚀 Getting Started

### Prerequisites
* JDK 17 or higher
* Maven 3.6+
* Your favorite IDE (IntelliJ IDEA recommended)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/JavaMiniGames.git
    ```
2.  **Build the project:**
    Open the project in your IDE and let Maven download the dependencies.
3.  **Run the Application:**
    Execute the `JavaMiniGamesApplication.java` file.
4.  **Access the Games:**
    Open your browser and go to `http://localhost:8080`

## 🕹️ How to Play
1.  **Main Menu:** Use the central hub to navigate between different games.
2.  **Logic:** * **Rock Paper Scissors** uses a REST API to fetch results from the Java backend.
    * **Random Wheel** uses HTML5 Canvas to render a dynamic wheel based on your input.
    * **Tic Tac Toe** features a local 2-player mode with automatic win detection.


## 📝 Key Highlights
* **Professional Packaging:** Follows standard Java package naming conventions.
* **Clean Code:** Separates concerns by using Models, Controllers, and Static Resources.
* **UI/UX:** Focuses on a dark-themed, futuristic aesthetic with smooth transitions.

---
**Developed by Thiha

---