import mongoose from 'mongoose';

async function databaseConnector(databaseURL){
await mongoose.connect(databaseURL);
}

export default databaseConnector;