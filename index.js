require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const placeRoutes = require('./routers/placeRoutes');
const userRoutes = require('./routers/userRoutes');
const seedDatabase = require('./seeds/initialData'); 

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// rutas
app.use('/api/v1/places', placeRoutes);
app.use('/api/v1/users', userRoutes);
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

async function startServer() {
  try {
    await mongoose.connect(process.env.URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado a MongoDB');

    // ejecuto  el seeder
    await seedDatabase();

    // se inicia el servidor
    app.listen(PORT, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err);
  }
}

startServer();
