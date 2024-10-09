import mongoose from "mongoose";

export const db = async() => {
    try{
        const link = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Db connected Succesfuly ${link.connection.host}`);
        
    }catch(err){
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}