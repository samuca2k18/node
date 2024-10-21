const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Página Inicial</title></head>
            <body>
                <h1>Bem-vindo à Página Inicial</h1>
                <p>Esta é a primeira rota!</p>
            </body>
        </html>
    `);
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
    res.send(`
        <html>
            <head><title>Sobre</title></head>
            <body>
                <h1>Sobre Nós</h1>
                <p>Informações sobre a aplicação.</p>
            </body>
        </html>
    `);
});

// Rota 3: Contato
app.get('/contato', (req, res) => {
    res.send(`
        <html>
            <head><title>Contato</title></head>
            <body>
                <h1>Contato</h1>
                <p>Envie-nos uma mensagem!</p>
            </body>
        </html>
    `);
});

// Servidor ouvindo na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
