import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/db";

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection("crud-data");

    // Fetch data from the collection
    const data = await collection.find().toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function POST(request) {
  const { title, desc, isComplete } = await request.json();
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection("crud-data");

    // Fetch data from the collection
    const data = await collection.insertOne({ title, desc, isComplete });
    return NextResponse.json({ success: true, insertedId: data.insertedId });
  } catch (error) {
    console.error("Error inserting data:", error.message);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection("crud-data");

    // Fetch data from the collection
    const data = await collection.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true, deletedId: data.deletedId });
  } catch (error) {
    console.error("Error deteting data:", error.message);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
