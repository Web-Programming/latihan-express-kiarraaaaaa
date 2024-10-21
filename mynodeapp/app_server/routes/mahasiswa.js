const express = require('express');
const router = express.Router();
const mhsController = require('../controllers/mhsController'); // Pastikan path ke controller benar

router.post('/', mhsController.index); // /mahasiswa
router.post('/insert', mhsController.insert); // /mahasiswa/insert
router.patch('/:id', mhsController.update); // /mahasiswa/:id
router.get('/:id', mhsController.show); // /mahasiswa/:id
router.delete('/:id', mhsController.destroy); // /mahasiswa/:id

module.exports = router;