require("dotenv").config();

const config = {
  PORT: Number(process.env.PORT),
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
};

module.exports = config;
