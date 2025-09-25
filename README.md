# 🌸 JapanPlacesAPI - Parcial 1

Repositorio del **Parcial 1** de Aplicaciones Híbridas.

---

## 👩 Alumna
**Bauer, Lisa**

## 📚 Materia
**Aplicaciones Híbridas**

## 👨‍🏫 Docente
**Cruz, Jonathan Emanuel**

## 🏫 Comisión
**4AV**

---

## 🚀 Descripción del Proyecto
JapanPlacesAPI es una **API RESTful** que permite consultar, crear, actualizar y eliminar información sobre **lugares turísticos en Japón** y **usuarios registrados**.  
Incluye una interfaz web básica para probar los endpoints directamente desde el navegador.

---

## 🛠 Tecnologías Implementadas
- **Node.js** ⚡
- **Express.js** 🌐
- **MongoDB** 🍃
- **Mongoose** 📦
- **Body-parser** un middleware de Node.js/Express que se utiliza para procesar los datos enviados en el body 📝
- **CORS** 🌍
- **HTML/CSS/JS** para la interfaz web 💻

---

## 📂 Estructura del Proyecto
.
├── controllers/
│ ├── placeController.js
│ └── userController.js
├── models/
│ ├── Place.js
│ └── User.js
├── routers/
│ ├── placeRoutes.js
│ └── userRoutes.js
├── seeds/
│ └── initialData.js
├── public/
│ └── index.html
├── index.js
├── .env
└── package.json


## ⚡ Comandos Principales
```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start


📌 Endpoints Disponibles
Usuarios

GET /api/v1/users/ → Listar todos los usuarios

GET /api/v1/users/:id → Ver usuario por ID

POST /api/v1/users/ → Crear usuario

PUT /api/v1/users/:id → Actualizar usuario

DELETE /api/v1/users/:id → Eliminar usuario

Lugares de Japón

GET /api/v1/places/ → Listar todos los lugares

GET /api/v1/places/:id → Ver lugar por ID

POST /api/v1/places/ → Crear lugar

PUT /api/v1/places/:id → Actualizar lugar

DELETE /api/v1/places/:id → Eliminar lugar

Alumna: Bauer, Lisa
Nombre de Materia: Aplicaciones Híbridas
Nombre del docente: CRUZ, Jonathan Emanuel
Comisión: 4AV