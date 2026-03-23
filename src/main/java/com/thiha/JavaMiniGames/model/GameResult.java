package com.thiha.JavaMiniGames.model;

public class GameResult {
    private String player;
    private String computer;
    private String result;

    public GameResult(String player, String computer, String result) {
        this.player = player;
        this.computer = computer;
        this.result = result;
    }

    //getter
    public String getPlayer() { return player; }
    public String getComputer() { return computer; }
    public String getResult() { return result; }
}