import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.listen(PORT, () => {
  console.log("Server is running at PORT ", PORT);
});
