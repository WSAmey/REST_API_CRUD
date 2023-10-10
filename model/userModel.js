import mongoose, {mongo} from "mongoose" ;

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

export default mongoose.model("user",userSchema); // The export default statement in JavaScript is used to export a single value from a module.