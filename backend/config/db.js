const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect(
      "mongodb+srv://Abhishek2006:Abhishek2006@cluster0.bjnrj1z.mongodb.net/taskdb?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected");

  } catch (error) {

    console.log(error);

  }
};

module.exports = connectDB;