﻿const express = require('express');
const app = express();
const PORT = 3000;

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡API de Halcon funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});