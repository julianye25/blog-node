import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import conn from './database/connection.js';
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, () => {
  conn();
  console.log(`server on port ${PORT}`);
});
