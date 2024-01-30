import { ObjectId, Collection, Document } from "mongodb";
import dbConnect from "../../dbclient";
import { dbCollection } from "../../constants.js";

async function saveRiderToMongoDB(riderInfo) {
  try {
    const mongoClient = await dbConnect();
    const database = mongoClient.db("database");
    const ridersCollection = database.collection(dbCollection.rider);

    // Add ObjectId to the riderInfo
    const riderDocument = {
      _id: new ObjectId(),
      ...riderInfo,
    };

    // Insert the rider information into the MongoDB collection
    const result = await ridersCollection.insertOne(riderDocument);

    console.log(`Rider saved to MongoDB with _id: ${result.insertedId}`);

    // return result.insertedId;
  } catch (error) {
    console.error("Error saving rider to MongoDB", error);
    throw error;
  } finally {
    await mongoClient.close();
  }
}

export default saveRiderToMongoDB;
