const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server port ${port}`);
});