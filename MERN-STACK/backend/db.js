
const dotenv=require('dotenv');
dotenv.config();

const mongoose=require('mongoose');

const dbConnect=async ()=>{

    mongoose.connect(process.env.mongo_connection).then(()=>{
        console.log("CONNECTED TO THE DATABASE");
    }).catch((err)=>{
        console.log("ERROR CONNECTING TO THE DATABASE"+err.message);
    });

}



module.exports={dbConnect};

