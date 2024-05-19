import express from "express";

const router = express.Router();

import debug from 'debug';

const logger = debug('testing_express:main');


router.get('/', (req, res) => {
    debugger;
    console.log("Ini adalahh permintaan request untuk '/'")
    console.log("Selamat Datang di Gamelab Indonesia!")
    res.send('Selamat Datang di Gamelab Indonesia!')
})

router.get('/kelas', (req, res) => {
    console.log("Ini adalahh permintaan request untuk '/kelas'")
    res.send('Ini adalah halaman kelas')
})

router.get('/about', (req, res) => {
    console.log("Ini adalahh permintaan request untuk '/about'")
    res.send('Ini adalah halaman about')
})

router.get('/kelas/:id', (req, res) => {
    logger(req.params.id);
    console.log(`Ini adalah halaman untuk kelas ${req.params.id}`)
    res.send(`Ini adalah halaman untuk kelas ${req.params.id}`)
})

router.get('/kelas/:jurusan/:id/:pilihan?', (req, res) => {

    let jurusan = req.params.jurusan
    let id = req.params.id
    let pilihan = req.params.pilihan

    rest.send(`Ini adalah halaman untuk kelas ${jurusan} ${pilihan} tingkat ${id}`)
})

export default router;