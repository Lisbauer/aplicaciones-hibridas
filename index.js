require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const placeRoutes = require('./routers/placeRoutes');
const userRoutes = require('./routers/userRoutes');

const Place = require('./models/Place');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas
app.use('/api/v1/places', placeRoutes);
app.use('/api/v1/users', userRoutes);

async function startServer() {
  try {
    await mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado a MongoDB');


    const placeCount = await Place.countDocuments();
    if (placeCount === 0) {
      const initialPlaces = [
        { name: "Templo Senso-ji", location: "Tokio", description: "Templo budista famoso en Asakusa, Tokio.", image: "/images/templosensoji.jpg", category: "templo" },
        { name: "Parque de Nara", location: "Nara", description: "Parque famoso por sus ciervos que deambulan libremente.", image: "/images/parquenara.jpg", category: "parque" },
        { name: "Monte Fuji", location: "Honshu", description: "La montaña más alta de Japón y símbolo nacional.", image: "/images/fuji.jpg", category: "montaña" },
        { name: "Castillo de Himeji", location: "Himeji", description: "Castillo japonés clásico, Patrimonio de la Humanidad.", image: "/images/himeji.jpg", category: "castillo" },
        { name: "Gion", location: "Kioto", description: "Barrio tradicional famoso por las geishas.", image: "/images/gion.jpeg", category: "barrio" }
      ];
      await Place.insertMany(initialPlaces);
      console.log("Lugares precargados en la base de datos");
    } else {
      console.log("La colección de lugares ya tiene datos");
    }

    // precargar usuarios si la colección esta vacía
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const initialUsers = [
        { name: "Lis Bauer", email: "lis@example.com", role: "admin" },
        { name: "Juan Perez", email: "juan@example.com", role: "user" },
        { name: "Ana Lopez", email: "ana@example.com", role: "user" }
      ];
      await User.insertMany(initialUsers);
      console.log("Usuarios precargados en la base de datos");
    } else {
      console.log("La colección de usuarios ya tiene datos");
    }

    // Página principal
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });

    // Iniciar servidor
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
  }
}

startServer();
