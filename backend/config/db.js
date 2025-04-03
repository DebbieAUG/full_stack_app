const mongoose = require("mongoose");
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log ("Mongo Connected");
    }
    catch(error) {
        console.error("Error");
        process.exit(1);
    }
};

export default connectDB;