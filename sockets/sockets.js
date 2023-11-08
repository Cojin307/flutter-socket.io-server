const {io} = require('../index');

// Manejar eventos de conexión en Socket.io
io.on('connection', client => {
    // Cuando un cliente se conecta, imprimir un mensaje en la consola del servidor
    console.log('Cliente conectado');

    // Manejar el evento de desconexión del cliente
    client.on('disconnect', () => {
        console.log("Cliente desconectado");
    });

    // Manejar el evento 'mensaje' del cliente
    client.on('mensaje', (payload) => {
        console.log('Mensaje',payload);

        io.emit('mensaje',{admin: 'Nuevo Mensaje'});
    });
});
