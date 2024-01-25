const express = require("express");
const app = express();
app.use(express.static("static"));

// app.get("/", (req, res) => {
//     res.send("<h1>Home page</h1><a href='/about'>dfg</a>");
// });
//
// app.get("/about", (req, res) => {
//     res.send("<h1>About page</h1>");
// });

app.listen(3000);