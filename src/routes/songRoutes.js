const express = require('express');
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
} = require('../controllers/songController');

// Routes pour les chansons
router.get('/', getAllSongs);           // GET /api/songs
router.get('/:id', getSongById);        // GET /api/songs/:id
router.post('/', createSong);           // POST /api/songs
router.put('/:id', updateSong);         // PUT /api/songs/:id
router.delete('/:id', deleteSong);      // DELETE /api/songs/:id

module.exports = router;
