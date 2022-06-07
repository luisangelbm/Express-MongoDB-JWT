import "dotenv/config";
import "./database/mongodb.js"; // requiere la extension
import express from "express";
import authRoute from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())

// routes
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
