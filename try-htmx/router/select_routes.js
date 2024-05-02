import express from "express";

const selectRoutes = express();

// selectRoutes.get("/color", (req, res) => {
//     const selectedColor = req.body.color;

//     return res
// })

selectRoutes.get("/", (req, res) => {
    res.send(`
        <p id="random1">Mog</p>
        <p id="random2">Edge</p>
        <p id="random3">Looksmaxxing</p>
        <p id="random4">Mew</p>
    `)
})

export default selectRoutes;