const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB -> Connection successfully');
  } catch (e) {
    console.log(e);
    throw new Error("Mongo Connection Error");
  }
};


module.exports = {
    connectDB
}
