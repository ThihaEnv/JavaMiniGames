package com.thiha.JavaMiniGames.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    @GetMapping("/")
    public String mainMenu() {
        return "index";
    }

    @GetMapping("/rock-paper-scissors")
    public String showRpsGame() {
        return "rps";
    }
    @GetMapping("/random-wheel")
    public String showWheelGame() {
        return "wheel";
    }
    @GetMapping("/tic-tac-toe")
    public String showTicTacToe() {
        return "tictactoe";
    }
}