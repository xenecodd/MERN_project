import mongoose from "mongoose";

const database = ()=>{

        mongoose.connect(MONGO_URI, ()=> {
                useNewUrlParser : true,
                useUnifiedTopology : true
        }).then(()=>{
                console.log("mongodb connected")
        }).catch((err)=>{
                console.log(err);
        })

}

export default database;