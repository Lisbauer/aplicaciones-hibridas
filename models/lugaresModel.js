const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/lugares.json");

function leerLugares() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function guardarLugares(lugares) {
  fs.writeFileSync(filePath, JSON.stringify(lugares, null, 2));
}

module.exports = { leerLugares, guardarLugares };
