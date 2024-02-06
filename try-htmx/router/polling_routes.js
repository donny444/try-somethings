import express from "express";

const pollingRoutes = express();

pollingRoutes.get('/random', (req, res) => {
    let currentTemperature = 20;
    currentTemperature += Math.random() * 2 - 1;
    res.send(currentTemperature.toFixed(1) + "C");
})

export default pollingRoutes;