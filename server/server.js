import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI);



const app = express();

app.use(cors());
app.use(express.json());

// Check MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// Sample route
app.get('/', (req, res) => {
  res.send('Flood Alert Platform API is working');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
