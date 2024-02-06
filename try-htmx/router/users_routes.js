import express from "express";

const userRoutes = express();

userRoutes.get("/api", async (req, res) => {

    setTimeout( async () => {
        const limit = +req.query.limit || 10;

        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
        const users = await response.json();

        res.send(`
            <h1 class="text-2l font-bold my-4">Users</h1>
            <ul>
                ${users.map((user) => `<li>${user.name}</li>`).join('')}
            </ul>
        `);
    }, 2000);
});

export default userRoutes;