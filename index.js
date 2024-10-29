let express = require('express');
let app = express();

app.get('/abc', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");
});

//retornar todos os usuários
app.get('/users', (req, res) => {
    res.send("Usuários do sistema");
});

app.get('/user:id', (req, res) => {
    console.log(req);
});

app.listen(3000, () => {
    console.log("Servidor aguardando requisições");
});

app.get('/', (req, res) => {
    res.send("Chamada ao recurso get realizada");
});

app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso post realizada");
});