const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');
const mongoose = require('mongoose');
const { Agendamiento } = require('./models');

// Define la carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
  // Inicia el servidor después de conectar a la base de datos
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});


app.use(express.json());
// Resto de la configuración del servidor y rutas aquí...

//Define una ruta POST ("/agendar") que maneja la solicitud 
//de agendamiento. La función asíncrona maneja la creación de
//un nuevo agendamiento en la base de datos MongoDB y responde 
// con un mensaje JSON.
app.post('/agendar', async (req, res) => {
  try {
    // Recibe los datos del formulario
    const { nombre, correo, } = req.body;

    // Crea un nuevo agendamiento
    const nuevoAgendamiento = new Agendamiento({
      nombre,
      correo,
    });

    // Guarda el agendamiento en la base de datos
    const resultado = await nuevoAgendamiento.save();

    // Puedes enviar una respuesta al cliente, por ejemplo, un JSON con el resultado
    res.json({ mensaje: 'Agendamiento exitoso', agendamiento: resultado });
  } catch (error) {
    console.error('Error al agendar:', error);
    res.status(500).json({ mensaje: 'Error al agendar', error });
  }
});


