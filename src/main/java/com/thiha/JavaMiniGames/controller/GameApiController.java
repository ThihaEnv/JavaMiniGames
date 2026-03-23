package com.thiha.JavaMiniGames.controller;

import com.thiha.JavaMiniGames.model.GameResult;
import org.springframework.web.bind.annotation.*;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class GameApiController {

    @GetMapping("/play")
    public GameResult play(@RequestParam String playerMove) {
        String[] moves = {"rock", "paper", "scissors"};
        String computerMove = moves[new Random().nextInt(3)];
        String outcome;

        //game logic
        if (playerMove.equalsIgnoreCase(computerMove)) {
            outcome = "Draw!";
        } else if ((playerMove.equalsIgnoreCase("rock") && computerMove.equalsIgnoreCase("scissors")) ||
                (playerMove.equalsIgnoreCase("paper") && computerMove.equalsIgnoreCase("rock")) ||
                (playerMove.equalsIgnoreCase("scissors") && computerMove.equalsIgnoreCase("paper"))) {
            outcome = "You Win!";
        } else {
            outcome = "You Lose!";
        }
        return new GameResult(playerMove, computerMove, outcome);
    }
}