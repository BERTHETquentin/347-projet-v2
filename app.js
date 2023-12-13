const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Serveur backend pour le projet 347 v2');
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
