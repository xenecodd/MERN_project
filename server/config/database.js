import mongoose from "mongoose";

// Changed to an async function and added await to ensure the connection attempt is completed
// before proceeding, which resolves the auths.findone buffered timeout 1000 error.
const database = async()=>{

        await mongoose.connect(process.env.MONGO_URI,{
        }).then(()=>{
                console.log("mongodb connected")
        }).catch((err)=>{
                console.log(err);
        })

}

export default database;