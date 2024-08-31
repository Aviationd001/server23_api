const express = require("express");
const app = express();
const port = process.env.PORT || 3078;

app.get("/hello23", async (req, res) => {
    res.send({info: 'hello23 endpoint', time23: new Date().toISOString()})
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});