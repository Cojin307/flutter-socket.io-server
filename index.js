// Importar la librería Express
const express = require('express');

// Configurar las variables de entorno del archivo .env
require('dotenv').config();

// Importar el módulo path para manejar rutas de archivos
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// Crear un servidor de Node.js utilizando el módulo http y pasando la instancia de la aplicación como argumento
const server = require('http').createServer(app);

// Configurar Socket.io para usar el servidor de Node.js
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');
// Definir la ruta de la carpeta pública utilizando el módulo path para resolver la ruta
const publicPath = path.resolve(__dirname, 'public');

// Configurar Express para servir archivos estáticos desde la carpeta pública
app.use(express.static(publicPath));

// Hacer que el servidor escuche en el puerto especificado en las variables de entorno
server.listen(process.env.PORT, (err) => {
    // Manejar errores de inicio del servidor
    if (err) throw new Error(err);
    // Imprimir un mensaje en la consola cuando el servidor se inicia correctamente
    console.log('Servidor corriendo en puerto: ', process.env.PORT);
});
