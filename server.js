const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static('client/build'));

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.get('/api/youtube', (_, res) => {
    res.send({
        msg: 'Hello les hardcoders'
    })
})

app.listen(PORT, () => {
    console.log('listening on port : ' + PORT)
});