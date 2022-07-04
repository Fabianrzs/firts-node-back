import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || "",
  APPLICATION_NAME: process.env.APPLICATION_NAME || "BACK",
};
