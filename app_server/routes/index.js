const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/mekanlar');
const ctrlDigerleri = require('../controllers/digerleri');

/* GET home page. */
router.get('/', ctrlMain.anaSayfa);
router.get('/mekan', ctrlMain.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMain.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);



module.exports = router;
