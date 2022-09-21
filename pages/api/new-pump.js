import { MongoClient } from "mongodb";
// api/new-pump

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://DarGrz:Anakonda22@cluster0.ek4gwl7.mongodb.net/pompy?retryWrites=true&w=majority"
    );
    const db = client.db();
    const pumpsCollection = db.collection("pompy");
    const result = await pumpsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Pump inserted" });
  }
}

export default handler;
