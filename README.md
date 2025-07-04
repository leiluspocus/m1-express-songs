# API Express avec Prisma et Supabase

Cette API REST démontre l'utilisation d'un ORM (Prisma) avec Express et Supabase dans une architecture MVC.

## 🏗️ Architecture

```
src/
├── controllers/     # Logique métier
├── routes/         # Définition des routes
├── middleware/     # Middlewares personnalisés
├── config/         # Configuration de la base de données
└── app.js          # Point d'entrée de l'application
```

## 🚀 Installation et démarrage

1. **Configuration de la base de données**
   Modifiez le fichier `.env` avec vos informations Supabase :
   ```
   DATABASE_URL="postgresql://postgres:VOTRE_MOT_DE_PASSE@db.ivnkmqgdqhnvwokudiap.supabase.co:5432/postgres"
   ```

2. **Installation des dépendances**
   ```bash
   npm install
   ```

3. **Configuration de Prisma**
   ```bash
   npm run setup
   ```

4. **Démarrage en mode développement**
   ```bash
   npm run dev
   ```

## 📊 Base de données

Table `songs` :
- `id` (Int, Primary Key, Auto-increment)
- `created_at` (DateTime, Default: now())
- `title` (String)
- `artist` (String)

## 🛠️ Scripts disponibles

- `npm run dev` - Démarrage en mode développement
- `npm run start` - Démarrage en production
- `npm run db:generate` - Génération du client Prisma
- `npm run db:push` - Synchronisation du schéma
- `npm run db:seed` - Insertion de données de test
- `npm run db:studio` - Interface graphique Prisma

## 📡 Endpoints API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/songs` | Récupérer toutes les chansons |
| GET | `/api/songs/:id` | Récupérer une chanson par ID |
| POST | `/api/songs` | Créer une nouvelle chanson |
| PUT | `/api/songs/:id` | Mettre à jour une chanson |
| DELETE | `/api/songs/:id` | Supprimer une chanson |
 