if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
  console.log("not in production, setting dotenv...");
  require("dotenv").config();
}
