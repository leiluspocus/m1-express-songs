const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const songRoutes = require('./routes/songRoutes');
const { testConnection } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de sécurité et logging
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de base pour tester l'API
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Express avec Prisma et Supabase',
    version: '1.0.0',
    endpoints: {
      songs: {
        getAll: 'GET /api/songs',
        getById: 'GET /api/songs/:id',
        create: 'POST /api/songs',
        update: 'PUT /api/songs/:id',
        delete: 'DELETE /api/songs/:id'
      }
    }
  });
});

// Routes de l'API
app.use('/api/songs', songRoutes);

// Middleware pour les routes non trouvées
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route non trouvée'
  });
});

// Middleware de gestion d'erreurs global
app.use((error, req, res, next) => {
  console.error('Erreur non gérée:', error);
  res.status(500).json({
    success: false,
    error: 'Erreur serveur interne'
  });
});

// Démarrage du serveur
async function startServer() {
  try {
    // Tester la connexion à la base de données
    await testConnection();
    
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`📱 API disponible sur http://localhost:${PORT}`);
      console.log(`📚 Documentation: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erreur lors du démarrage du serveur:', error);
    process.exit(1);
  }
}

startServer();

module.exports = app;
