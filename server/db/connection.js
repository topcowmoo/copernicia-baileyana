import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (error) {
  console.error(error);
}

let db = client.db("empolyees");

export default db;
