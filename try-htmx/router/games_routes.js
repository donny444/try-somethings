import express from "express";
import games from "../data/games_data.js";

const gamesRoutes = express();

gamesRoutes.get("/genres", (req, res) => {
    const selectedGenre = req.query.genre;

    const selectedResults = games.filter((game) => {
        return game.genres.includes(selectedGenre);
    });
    console.log(selectedResults);

    setTimeout(() => {
        const selectedResultsHtml = selectedResults.map((game) => `
            <h3>${game.name}</h3>
            <p>${game.genres}</p>
            <br>
        `).join("");

        res.send(selectedResultsHtml);
    }, 1000);
});

export default gamesRoutes;