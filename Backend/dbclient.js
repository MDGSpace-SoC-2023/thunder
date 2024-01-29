const MongoClient = require("mongodb").MongoClient;

const uri = process.env.SECRET_KEY;
let db;

const dbConnect = async () => {
  try {
    if (db) {
      return db;
    }
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to db");
    db = client;
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

module.exports = dbConnect;
