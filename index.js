import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola mi server esta vivo');
})

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola mi server esta vivo');
})

app.get('/products', (req, res) =>{
  res.json({
    name: 'Prod1',
    price: 3000
  });
})




app.listen(port, () => {
  console.log('Corriendo en ', port);
});
