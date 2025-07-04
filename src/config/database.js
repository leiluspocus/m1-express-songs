const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

// Fonction pour tester la connexion
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Connexion à la base de données établie avec succès');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error);
    process.exit(1);
  }
}

// Fonction pour fermer la connexion proprement
async function disconnect() {
  await prisma.$disconnect();
}

module.exports = {
  prisma,
  testConnection,
  disconnect
};
