import express from "express";
import userRoutes from "./router/users_routes.js";
import temperatureRoutes from "./router/temperature_routes.js";
import searchRoutes from "./router/search_routes.js";
import pollingRoutes from "./router/polling_routes.js";
import validationRoutes from "./router/validation_routes.js";
import gamesRoutes from "./router/games_routes.js";
import secretRoutes from "./router/secret_routes.js";
import selectRoutes from "./router/select_routes.js";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/temperature", temperatureRoutes);
app.use("/search", searchRoutes);
app.use("/polling", pollingRoutes);
app.use("/validation", validationRoutes);
app.use("/games", gamesRoutes);
app.use("/secret", secretRoutes);
app.use("/select", selectRoutes);

// app.get("/select", (req, res) => {
//     res.send(`
//         <p id="not-selected">Not Selected This</p>
//         <p id="selected">Selected Element</p>`
//     );
// });

app.listen(5000, () => console.log("Server is running on port 5000"));