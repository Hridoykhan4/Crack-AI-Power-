const { MongoClient, ServerApiVersion } = require("mongodb");


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


const db = client.db("powerofAI");
const imageCollection = db.collection('images');
const commentCollection = db.collection('comments')


const connectDB = async => client.connect()


module.exports = {connectDB, imageCollection, commentCollection}

// async function run() {
//   try {
//     const db = client.db
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);
