
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const dbConnect=async ()=>{

    mongoose.connect(process.env.mongo_connection).then(()=>{
        console.log("CONNECTED TO THE DATABASE");
    }).catch((err)=>{
        console.log("ERROR CONNECTING TO THE DATABASE"+err.message);
    });
 
}



export {dbConnect};

