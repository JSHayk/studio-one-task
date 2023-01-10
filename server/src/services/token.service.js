import jwt from "jsonwebtoken";
import config from "../config/config.js";

const {
  tokensConfig: { expires_time, secret_token },
} = config;

const tokenService = {
  generateToken(data) {
    const generatedToken = jwt.sign(data, secret_token, {
      expiresIn: expires_time,
    });
    return generatedToken;
  },
};

export default Object.freeze(tokenService);
