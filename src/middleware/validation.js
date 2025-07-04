// Middleware de validation pour les chansons
const validateSong = (req, res, next) => {
  const { title, artist } = req.body;
  
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Le titre est requis et doit être une chaîne non vide'
    });
  }
  
  if (!artist || typeof artist !== 'string' || artist.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'L\'artiste est requis et doit être une chaîne non vide'
    });
  }
  
  // Nettoyer les données
  req.body.title = title.trim();
  req.body.artist = artist.trim();
  
  next();
};

module.exports = {
  validateSong
};
