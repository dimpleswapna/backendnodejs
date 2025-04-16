const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        const useDBAuth = process.env.USE_DB_AUTH || false;

        // If DB authentication is enabled, add credentials to connection parameters
        if (useDBAuth) {
            if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD) {
                throw new Error("DB_USERNAME and DB_PASSWORD must be set when USE_DB_AUTH is true.");
            }
            connectionParams.user = process.env.DB_USERNAME;
            connectionParams.pass = process.env.DB_PASSWORD;
        }

        const mongoURI = process.env.DB_CONN_STR;
        
        if (!mongoURI) {
            throw new Error("DB_CONN_STR is not defined. Please set the database connection string.");
        }

        await mongoose.connect(mongoURI, connectionParams);
        console.log("Our Backend API is successfully connected to the Mongo database.");
    } catch (error) {
        console.error("Could not connect to the database.", error);
        process.exit(1);  // Exit the app if the DB connection fails
    }
};
