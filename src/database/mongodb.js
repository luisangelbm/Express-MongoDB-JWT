import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.DB_URI);
  console.log("Connect DB ok ✅");
} catch (error) {
  console.error("Error de conexion a mongodb ❌" + error);
}
