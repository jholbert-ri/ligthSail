const express = require("express");
const app = express();
const port = 80;

app.get("/status", (req, res) => {
  res.send(`Hola desde Lightsail ***2*** - ${new Date()}`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
