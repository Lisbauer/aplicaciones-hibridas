const express = require('express');
const router = express.Router();
const PlaceController = require('../controllers/placeController');


router.get('/', PlaceController.all);         // GET todos los lugares
router.get('/:id', PlaceController.findById); // GET lugar por ID
router.post('/', PlaceController.post);       // POST crear nuevo lugar
router.put('/:id', PlaceController.put);      // PUT actualizar lugar
router.delete('/:id', PlaceController.delete); // DELETE eliminar lugar

module.exports = router;
