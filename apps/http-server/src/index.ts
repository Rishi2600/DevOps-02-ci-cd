import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("initialized the the express server")
})

app.listen(3000)