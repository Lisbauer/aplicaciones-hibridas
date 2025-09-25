import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import lugaresRoutes from "./routers/placeRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "public")));

// Rutas
app.use("/api/lugares", lugaresRoutes);

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(path.resolve(), "public", "index.html"));
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  });
})
.catch((err) => console.error("Error MongoDB:", err));
