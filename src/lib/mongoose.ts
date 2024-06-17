"use server";

import mongoose from "mongoose";

// singleton connection
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not set");
  }
  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }
  try {
    let res_connect = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("Using new database connection");
    // console.log("connected to database",res_connect);
  } catch (error) {
    console.log("Error while connecting to database");
  }
};