import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.emih4.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    // assumption: no errors
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Added" });
  }
}

export default handler;
