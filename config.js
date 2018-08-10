module.exports = {
  databaseUrl: process.env.MONGO_URI || "mongodb://localhost:27017/swaggy",
  secret: process.env.SECRET || "secret",
  url: process.env.DEPLOY_URL || "http://localhost:3000",
  port: process.env.PORT || 1234
};
