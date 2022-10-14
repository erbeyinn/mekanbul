var express = require('express');
var router = express.Router();


const anaSayfa = function(req, res, next) {
        res.render('anaSayfa', { title: 'Anasayfa' });
};


const mekanBilgisi = function(req, res, next) {
        res.render('mekanBilgisi', { title: 'Mekan Bilgisi' });
};

const yorumEkle = function(req, res, next) {
        res.render('yorumEkle', { title: 'Yorum Ekle' });
};

module.exports={
        anaSayfa,
        mekanBilgisi,
        yorumEkle
}
