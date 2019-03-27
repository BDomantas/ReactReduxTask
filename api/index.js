const express = require('express');
const app = express();
var cors = require('cors')

const port = 3001;
app.use(cors());
app.use(express.json());

app.get('/person/:input', (req, res) => {
    return res.json({ "val1" : randomNumber(), "val2" : randomNumber() });
});

app.get('/facility/:val1', (req, res) => {
    return res.json({ "val3" : randomNumber(), "val4" : randomNumber() });
});

app.get('/exposure/:val2', (req, res) => {
    return res.json({ "val5" : randomNumber() });
});

app.listen(port, () => console.log(`Mock api listening on port ${port}!`))


//returns random interger between 1-10
const randomNumber = () => {
    return Math.floor(Math.random()*10)+1;
}