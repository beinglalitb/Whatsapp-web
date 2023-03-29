import mongoose from 'mongoose';
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async (username, password) => {
    const URL = `mongodb://LRB:Lalit2001@ac-kcc7hkk-shard-00-00.qrcvi9i.mongodb.net:27017,ac-kcc7hkk-shard-00-01.qrcvi9i.mongodb.net:27017,ac-kcc7hkk-shard-00-02.qrcvi9i.mongodb.net:27017/?ssl=true&replicaSet=atlas-jmd6kr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;