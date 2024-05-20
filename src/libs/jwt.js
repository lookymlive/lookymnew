import { TOKEN_SECRET } from "../configs.js";
import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}