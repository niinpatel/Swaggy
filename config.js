module.exports = {
  databaseUrl: process.env.MONGO_URI || "mongodb://localhost:27017/swaggy",
  secret: process.env.SECRET || "secret"
};
