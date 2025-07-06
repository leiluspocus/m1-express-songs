// @todo - Utiliser ORM Prisma ici ...

// GET /api/songs - Récupérer toutes les chansons
const getAllSongs = async (req, res) => {
  try {
    const songs = [] // @todo - Utiliser ORM Prisma ici ...
    
    res.json({
      success: true,
      data: songs,
      count: songs.length
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des chansons:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur lors de la récupération des chansons'
    });
  }
};

// GET /api/songs/:id - Récupérer une chanson par ID
const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = [] // @todo - Utiliser ORM Prisma ici ...

    if (!song) {
      return res.status(404).json({
        success: false,
        error: 'Chanson non trouvée'
      });
    }

    res.json({
      success: true,
      data: song
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la chanson:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur lors de la récupération de la chanson'
    });
  }
};

// POST /api/songs - Créer une nouvelle chanson
const createSong = async (req, res) => {
  try {
    const { title, artist } = req.body;

    // Validation des données
    if (!title || !artist) {
      return res.status(400).json({
        success: false,
        error: 'Le titre et l\'artiste sont requis'
      });
    }

    const song = [] // @todo - Utiliser ORM Prisma ici ...

    res.status(201).json({
      success: true,
      data: song,
      message: 'Chanson créée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la création de la chanson:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur lors de la création de la chanson'
    });
  }
};

// PUT /api/songs/:id - Mettre à jour une chanson
const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist } = req.body;

    // Vérifier si la chanson existe
    const existingSong = [] // @todo - Utiliser ORM Prisma ici ...

    if (!existingSong) {
      return res.status(404).json({
        success: false,
        error: 'Chanson non trouvée'
      });
    }

    const updatedSong = [] // @todo - Utiliser ORM Prisma ici pour mettre à jour la chanson ...

    res.json({
      success: true,
      data: updatedSong,
      message: 'Chanson mise à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la chanson:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur lors de la mise à jour de la chanson'
    });
  }
};

// DELETE /api/songs/:id - Supprimer une chanson
const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si la chanson existe
    const existingSong = [] // @todo - Utiliser ORM Prisma ici pour chercher si la chanson existe ...

    if (!existingSong) {
      return res.status(404).json({
        success: false,
        error: 'Chanson non trouvée'
      });
    }

     // @todo - Utiliser ORM Prisma ici pour supprimer une ligne ...

    res.json({
      success: true,
      message: 'Chanson supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de la chanson:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur lors de la suppression de la chanson'
    });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
};
