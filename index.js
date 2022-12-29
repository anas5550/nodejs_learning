const express = require("express");
const app = express();
const PORT = 5000;
const moment = require('moment')


app.get("/", (req, res) => {
    res.send("Hi this is node.js, Homepage")
})



app.get("/api/v1/instagram", (req, res) => {
    const data = {
        username: "anassid5550",
        followers: "165",
        follows: "90",
        data: moment().format('MMMM DD YYYY')
    }
    res.status(200).json({ data });
})


app.get("/api/v1/facebook", (req, res) => {
    const data = {
        username: "anassidsiddiqui",
        followers: "500+",
        follows: "100",
        data: moment().format('MMMM DD YYYY')
    }
    res.status(200).json({ data });
})


app.get("/api/v1/linkedin", (req, res) => {
    const data = {
        username: "anas5550",
        followers: "600+",
        follows: "200",
        data: moment().format('MMMM DD YYYY')
    }
    res.status(200).json({ data });
})


app.get("/api/v1/:token", (req, res) => {
    let token = req.params.token;
    res.status(200).json({ param: token });

})



app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})