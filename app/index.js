const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Examen DAW Despliegue inicial\n');
});
server.listen(5343, () => {
    console.log('Servidor corriendo en puerto 3000');
});