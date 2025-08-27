import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './db.js';

dotenv.config();

const PORT = process.env.PORT || 9999;
const MONGODB_URI = process.env.MONGODB_URI;

async function startServer() {
  try {
    await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();