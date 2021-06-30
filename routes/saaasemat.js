const express = require('express');
const router = express.Router();
const havaintoasemacontroller = require('../controllers/havaintoasemacontroller');

// Haetaan kaikki säähavaintoasemat
router.get('/', havaintoasemacontroller.haeKaikki);

// Haetaan tietty säähavaintoasema id:llä
router.get('/:id', havaintoasemacontroller.haeAsemaIDlla);

// Haetaan tietyn säähavaintoaseman säätiedot 10 minuuttia
router.get('/saanyt/:fmisid', havaintoasemacontroller.haeHavaintoasemanSaa);

// Haetaan tietyn säähavaintoaseman sääennuste paikan nimellä
router.get(
  '/saaennuste/latlon/:latlon',
  havaintoasemacontroller.haeAsemaSaaEnnuste
);

module.exports = router;
