const express = require ('express');
const routerApi = require ('./routes/index.js');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Corriendo en ', port);
});



app.get('/', (req, res) =>{
  res.send('Hola mi server esta vivo');
});

routerApi(app);
