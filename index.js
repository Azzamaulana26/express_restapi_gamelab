const express = require('express');
const debug = require('debug')('testing_express:main')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    debugger
    console.log('Ini adalah permintaan request untuk "/"');
    console.log('Selamat datang di Gamelab Indonesia');
    res.send('Selamat datang di Gamelab Indonesia');
});

app.get('/kelas', (req, res) => {
    console.log('Ini adalah permintaan request untuk "/kelas"');
    res.send('Ini adalah halaman kelas');
});

app.get('/kelas:/id', (req, res) => {
    debug(req.params.id)
    console.log(`Ini adalah permintaan request untuk "/kelas/ ${req.params.id}"`);
    res.send(`Ini adalah halaman ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server ini berjalan di port ${port}`);
});

module.exports = app;