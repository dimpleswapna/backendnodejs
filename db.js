const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Log to verify if the MONGO_URI environment variable is being passed correctly
        console.log('MONGO_URI:', process.env.MONGO_URI);

        // Check if MONGO_URI exists in environment variables
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }

        // If authentication is required, pass credentials from environment variables
        const useDBAuth = process.env.USE_DB_AUTH || false;
        if (useDBAuth) {
            connectionParams.user = process.env.DB_USERNAME;
            connectionParams.pass = process.env.DB_PASSWORD;
        }

        // Establish the MongoDB connection using the MONGO_URI environment variable
        await mongoose.connect(process.env.MONGO_URI, connectionParams);

        console.log("Our Backend API is successfully connected to the Mongo database.");
    } catch (error) {
        console.error("Could not connect to the database.", error);
    }
};
