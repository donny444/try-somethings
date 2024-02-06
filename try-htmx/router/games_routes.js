import express from "express";
import games from "../data/games_data.js";

const gamesRoutes = express();

gamesRoutes.post("/categories", (req, res) => {
    const selectedCategory = req.body
})