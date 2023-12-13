const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vérification de la connexion
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
  // Ajoutez ici le code pour interagir avec votre base de données
});

// Fermeture de la connexion à la fin de l'exécution
process.on('exit', () => {
  mongoose.connection.close();
});
