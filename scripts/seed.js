const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Insertion de données de test...');
  
  const songs = [
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: 'Imagine', artist: 'John Lennon' },
    { title: 'Hotel California', artist: 'Eagles' },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
    { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' }
  ];

  for (const song of songs) {
    const createdSong = await prisma.song.create({
      data: song
    });
    console.log(`✅ Chanson créée: ${createdSong.title} - ${createdSong.artist}`);
  }
  
  console.log('✨ Données de test insérées avec succès!');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors de l\'insertion des données:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
