const express = require('express' );
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Conexion a mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carreras'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

db.query(`
    CREATE TABLE IF NOT EXISTS mensajes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        texto VARCHAR(255)
    )
`)

app.get ('/api/data', (req, res) => {
    db.query('SELECT * FROM carreras', (err, resultados) => {
        if (err) return res.status(500).json(err);
        res.json(resultados);
    });
});

// Crear nuevo mensaje
app.post('/api/data', (req, res) => {
    const { texto } = req.body;
    db.query('INSERT INTO carreras (texto) VALUES (?)', [texto], (err, resultado) => {
        if (err) return res.status(500).json(err);
        res.json({ id: resultado.insertId, texto });
    });
});

app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
});