import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import sql from "./config/db.js";

import productsRoute from "./routes/productRoute.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    console.log("decicion", decision);
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit) {
        return res
          .status(429)
          .json({ success: false, message: "Rate Limit Exceeded" });
      } else if (decision.reason.isBot) {
        return res
          .status(403)
          .json({ success: false, message: "No Bot Allowed" });
      } else {
        return res.status(403).json({ success: false, message: "Forbidden" });
      }
    }
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      return res
        .status(403)
        .json({ success: false, message: "Spoofed bot found" });
    }
    next();
  } catch (error) {
    console.log("error in arcjet configuration", error);
  }
});

app.use(express.json());
app.use(cors());
app.use(helmet()); // secure our app by providing various headers
app.use(morgan("dev")); // log the request to us

app.use("/api/products", productsRoute);

async function initDb() {
  try {
    await sql`
  CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
  )`;
  } catch (error) {
    console.log("error in intializing the db");
    console.log(error);
  }
}

//running the server
initDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at PORT ", PORT);
  });
});
