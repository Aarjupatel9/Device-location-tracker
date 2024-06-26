const mongoose = require("mongoose");

const HOST = process.env.MONGODB_URI;

// Connect to the database using async/await
(async () => {
    try {
        await mongoose.connect(HOST, {
            dbName: "device_tracker_db",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        });
        console.log(`Connected to device tracker db --> host : ${HOST}`);
    } catch (error) {
        console.error(error);
    }
})();

const conn = mongoose.connection;

module.exports = conn;
