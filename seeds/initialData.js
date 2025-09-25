const Place = require('../models/Place');
const User = require('../models/User');

async function seedDatabase() {
  // Lugares
  const placeCount = await Place.countDocuments();
  if (placeCount === 0) {
    await Place.insertMany([
      { name: "Templo Senso-ji", location: "Tokio", description: "Templo budista famoso en Asakusa, Tokio.", image: "/images/templosensoji.jpg", category: "templo" },
      { name: "Parque de Nara", location: "Nara", description: "Parque famoso por sus ciervos que deambulan libremente.", image: "/images/parquenara.jpg", category: "parque" },
      { name: "Monte Fuji", location: "Honshu", description: "La montaña más alta de Japón y símbolo nacional.", image: "/images/fuji.jpg", category: "montaña" },
      { name: "Castillo de Himeji", location: "Himeji", description: "Castillo japonés clásico, Patrimonio de la Humanidad.", image: "/images/himeji.jpg", category: "castillo" },
      { name: "Gion", location: "Kioto", description: "Barrio tradicional famoso por las geishas.", image: "/images/gion.jpeg", category: "barrio" }
    ]);
    console.log("✅ Lugares precargados en la base de datos");
  } else {
    console.log("ℹ️ La colección de lugares ya tenía datos");
  }

  // Usuarios
  const userCount = await User.countDocuments();
  if (userCount === 0) {
    await User.insertMany([
      { name: "Lis Bauer", email: "lis@example.com", role: "admin" },
      { name: "Juan Perez", email: "juan@example.com", role: "user" },
      { name: "Ana Lopez", email: "ana@example.com", role: "user" }
    ]);
    console.log("✅ Usuarios precargados en la base de datos");
  } else {
    console.log("ℹ️ La colección de usuarios ya tenía datos");
  }
}

module.exports = seedDatabase;
