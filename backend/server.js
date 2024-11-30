import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


// Import Routes
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT ;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/contact", contactRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);



});
