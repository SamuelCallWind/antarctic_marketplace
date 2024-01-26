const express = require('express');
const app = express();
const port = 5454;

app.get('/', (req, res) => {
    res.send('This is the home controller');
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
})
