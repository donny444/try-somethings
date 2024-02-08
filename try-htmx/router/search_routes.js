import express from "express";
import contacts from "../data/contacts_data.js";

const searchRoutes = express();

searchRoutes.post("/", (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if(!searchTerm) {
        return res.send("<tr></tr>");
    }

    const searchResults = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });

    setTimeout(() => {
        const searchResultHtml = searchResults.map((contact) => `
            <tr>
                <td><div class="my-4 p-2">${contact.name}</div></td>
                <td><div class="my-4 p-2">${contact.email}</div></td>
            </tr>
        `).join("");

        res.send(searchResultHtml);
    }, 1000);
});

searchRoutes.post("/api", async (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if(!searchTerm) {
        return res.send("<tr></tr>");
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const contacts = await response.json();
    
    const searchResults = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });
    console.log(searchResults);

    setTimeout(() => {
        const searchResultsHtml = searchResults.map((contact) => `
            <tr>
                <td><div class="my-4 p-2">${contact.name}</div></td>
                <td><div class="my-4 p-2">${contact.email}</div></td>
            </tr>
        `).join("");

        res.send(searchResultsHtml);
    }, 1000);
});

export default searchRoutes;