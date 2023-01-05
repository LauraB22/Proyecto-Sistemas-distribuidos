const express = require('express');
const mongoose = require('mongoose');
const lenguasRoutes = require("./rutas/lenguas");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api',lenguasRoutes);
//rutas
app.get('/', (req, res) => { //Se declaran las rutas que se van a mandar llamar 
  res.send('Hello Express app!')
});

//conexión con mongodb ATLAS
mongoose.connect(
  "mongodb+srv://Fer:12345@cluster0.qth936z.mongodb.net/?retryWrites=true&w=majority");
  //esta es la ruta en donde se va a escribir el usuario y la contraseña de la cuenta de cada persona que quiera entrar a la base de datos

app.listen(3000, () => { //escucha el puerto 3000 
  console.log('server started om port', 3000);
});
