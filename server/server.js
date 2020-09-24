const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next) => {
    res.send('Hello from express');
});

app.listen(PORT, () => {
    console.log(`Listenning on ${PORT}`);
});