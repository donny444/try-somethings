import express from "express";

const secretRoutes = express();

var secret = "I Love You";

secretRoutes.get("/iloveyou", (req, res) => {
    res.send(`
        <p>${secret}</p>
    `)
})

secretRoutes.put("/update", (req, res) => {
    secret = "I Love HTMX";

    res.send("Secret text updated")
})

export default secretRoutes;