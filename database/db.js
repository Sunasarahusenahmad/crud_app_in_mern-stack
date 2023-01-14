import mongoose from "mongoose";

const Connection = async (username, password) => {

  const URL = `mongodb://${username}:${password}@ac-oisth2m-shard-00-00.ual8o3e.mongodb.net:27017,ac-oisth2m-shard-00-01.ual8o3e.mongodb.net:27017,ac-oisth2m-shard-00-02.ual8o3e.mongodb.net:27017/?ssl=true&replicaSet=atlas-n3tbyj-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connection Successfully ! ");
  } catch (error) {
    console.log("Error while Connecting with the database", error);
  }
};

export default Connection;
