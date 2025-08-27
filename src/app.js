import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Mount routes
app.use(router);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: 'Internal Server Error'
  });
});

export default app;