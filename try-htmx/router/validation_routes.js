import express from "express";

const validationRoutes = express();

validationRoutes.post("/email", (req, res) => {
    const submittedEmail = req.body.email;
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const isValid = {
        message: "That email is valid",
        class: "text-green-700"
    };

    const isInvalid = {
        message: "Please enter a valid email address",
        class: "text-red-700"
    };

    if(!emailRegex.test(submittedEmail)) {
        return res.send(
            `
            <div class="mb-4" hx-target="this" hx-swap="outerHTML">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
            <input
                name="email"
                hx-post="/validation/email"
                class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                value="${submittedEmail}"
                required
            />
            <div class="${isInvalid.class}">${isInvalid.message}</div>
            `
        )
    } else {
        return res.send(
            `
            <div class="mb-4" hx-target="this" hx-swap="outerHTML">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
            <input
                name="email"
                hx-post="/validation/email"
                class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                value="${submittedEmail}"
                required
            />
            <div class="${isValid.class}">${isValid.message}</div>
            `
        )
    }
});

export default validationRoutes;