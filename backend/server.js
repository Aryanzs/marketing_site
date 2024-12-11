import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from './config/db.js'; // Added .js extension

dotenv.config();

// Import Routes
import contactRoutes from "./routes/contactRoutes.js"; // Added .js extension
import blogRoutes from './routes/blogRoutes.js';       // Added .js extension
import adminRoutes from './routes/adminRoutes.js'
const app = express();
const PORT = process.env.PORT;

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve Static Files for Uploaded Images
const __dirname = path.resolve(); // Get the current directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/contact", contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/admin', adminRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
