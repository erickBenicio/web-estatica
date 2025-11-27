import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { skinsRouter } from './src/routes/skins-routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/skins', skinsRouter);

const PUERTO = 4000;

app.listen(4000, () => {
    console.log(`El servidor esta escuchando en el puerto http://localhost:${PUERTO}`);
});