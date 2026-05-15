const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("powerofAI");

async function run() {
  await client.connect();
 console.log("Successfully connected to MongoDB");
}

module.exports = { run, db};
