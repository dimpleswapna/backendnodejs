const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Fetch MongoDB URI from environment variable
        const mongoUri = process.env.MONGO_URI || "mongodb://mongo:27017/todoapp";  // Default Mongo URI if not set

        await mongoose.connect(mongoUri, connectionParams);
        console.log("Our Backend API is successfully connected to Mongo database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
