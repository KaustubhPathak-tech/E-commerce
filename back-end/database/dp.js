
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
// mongodb+srv://1ashishchauhan2002:<password>@cluster0.1nn0u4h.mongodb.net/?retryWrites=true&w=majority
export const Connection = async () =>{
    const URL =process.env.CONNECTION_URL;
try{

   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('datbase hass been connected succesfully');
}catch(error){
    console.log('Error while connecting with the database',error.message);
}


}

export default Connection;