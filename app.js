const express = require('express');

const app = express();

const { skins } = require('./data/skins.json');

app.get('/', (req, res) => {
    res.send('Primer servidor APP SKINS')
})

app.get('/skins', (req, res) => {
    res.send(JSON.stringify(skins));
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
