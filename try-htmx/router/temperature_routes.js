import express from "express";

const temperatureRoutes = express();

temperatureRoutes.post("/convert", (req, res) => {
    setTimeout(() => {
        const fahrenheit = parseFloat(req.body.fahrenheit);
        const celsius = (fahrenheit - 32) * (5/9);

        res.send(`
            <p>
                ${fahrenheit} degrees Fahrenheit is equal to  ${celsius.toFixed(2)} degrees Celsius
            </p>
        `);
    }, 2000);
});

export default temperatureRoutes;