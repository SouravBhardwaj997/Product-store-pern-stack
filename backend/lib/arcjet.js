import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import "dotenv/config";
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE"] }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      capacity: 10,
      interval: 10,
    }),
  ],
});
