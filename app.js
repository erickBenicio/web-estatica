/********************************************************************************
1. Cree un servidor básico que retorne “Mi Primer Servidor Web!” en texto plano.
    a. El mismo debe correr en el puerto 4000
    b. Pruebe el servidor en un navegador accediendo a http://localhost:4000

*********************************************************************************/
/*
const http = require('http');

const puerto = 4000;

const server = http.createServer((req, res) => {
    res.end('Mi Primer Servidor Web!');
})

server.listen(puerto, () => {
    console.log(`Ser    vidor corriendo en http://localhost:${puerto}`);
})
*/

/********************************************************************************
2. Cree un servidor básico que dependiendo de la URL devuelva diferentes cosas
    a. http://localhost:4000/laboratorio debe devolver “Laboratorio es una materia increible”
    b. http://localhost:4000/servidores debe devolver “NodeJS es genial”

*********************************************************************************/

/*
const http = require('http');

const puerto = 4000;

const server = http.createServer((req, res) => {

    if (req.url === '/laboratorio') {
        res.end('Laboratorio es una materia increible');
    } else if (req.url === '/servidores') {
        res.end('NodeJS es genial');
    } else if (req.url === '/') {
        res.end('Mi Primer Servidor Web!');
    }
})

server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
})

*/

/********************************************************************************

3. Cree un servidor NodeJS que retorne una pagina HTML con un titulo h1 de color rojo al acceder a http://localhost:4000/paginaPrincipal.html

*********************************************************************************/

/*
const http = require('http');

const puerto = 4000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Mi Primer Servidor Web');
    } else if (req.url === '/paginaPrincipal.html') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>paginaPrincipal</title>
                    <style>
                        h1 { color: red; }
                    </style>
                </head>
                <body>
                    <h1>HTML SERVIDOR</h1>
                </body>
            </html>
            `);
    }
});

server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
*/


/********************************************************************************

4. Cree un servidor NodeJS que lea un archivo HTML del disco (utilizando el modulo “fs”) y lo retorne

*********************************************************************************/

/*
const http = require('http');

const fs = require('fs');

const path = require('path');

const puerto = 4000;

const rutaHtml = path.join(__dirname, 'public', 'index.html');

const server = http.createServer((req, res) => {
    fs.readFile(rutaHtml, 'utf-8', (err, dataHtml) => {
        if (err) {
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.end('Error interno del servidor');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(dataHtml);
    });
});

server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

*/
/*******************************************************************************

5. Instale express en un proyecto y cree un servidor que haga lo mismo que el punto 2)
    a. http://localhost:4000/laboratorio debe devolver “Laboratorio es una materia increible”
    b. http://localhost:4000/servidores debe devolver “NodeJS es genial”

*********************************************************************************/

const express = require('express');

const app = express();

const fs = require('fs');

app.use(express.static('public'));

app.use(express.json());

app.get('/api/v1/skins', (req, res) => {
    fs.readFile('./data/skins.json', 'utf8', (err, data) => {
        try {
            const skins = JSON.parse(data); 
            res.json(skins);
        } catch (err) {
            res.status(500).send('Error al leer el archivo de skins');
        }
    });
});

app.get('/api/v1/')

app.listen(4000, () => {
    console.log(`El servidor esta escuchando en el puerto 4000`);

})

/********************************************************************************
6. Cree un servidor Express que:
    a. http://localhost:4000/usuarios devuelva un json con una lista de usuarios
    b. http://localhost:4000/usuarios/{id} devuelva un json con un usuario cuyo id coincida con uno existente.

****************************************************************************************************************************/

/*
const express = require('express');

const app = express();

const { skins } = require('./data/skins.json');

app.get('/', (req, res) => {
    res.send('Primer servidor APP SKINS')
})

app.get('/skins', (req, res) => {
    res.send(JSON.stringify(skins));
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
*/
