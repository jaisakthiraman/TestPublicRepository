const express = require('express');
const {join} = require('path');
const app = express();

app.set("view engine", "pug");
app.use("/assets",express.static(join(__dirname, "public")));

app.get("/home", (req,res) => res.send("<h1>Tech Blog</h1>"));

app
    .get("/purchase/login", (req,res) => {
        res.render("login");
    })
    .post("/purchase/login", (req, res) => {
        res.redirect("/purchase/dashboard");
        
    })


app.get("/purchase/dashboard", (req,res) => {
    res.render("dashboard");
})


app.get("/purchase/logout", (req,res) => {
    res.redirect("/purchase/login")
})

app.get("/purchase/home", (req, res) => res.render("home"));

app.get("/purchase/register", (req, res) => res.render("register"));

app.listen(8080, () => console.log("The server started in port 8080"));