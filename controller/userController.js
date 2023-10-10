import User from "../model/userModel.js"

export const fetch= async (req,res)=>{
    try {
        const users  = await User.find()
        if(users.length ===0){
            return res.status(404).json({message:"User not found"})
        }
        else{
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({error: " Internal Server error"})

    }
}

export const create=async (req,res)=>{
    try {

        const UserData=new User(req.body);
        const {email}=UserData; //destructuring email so that using email as unique key, we will be checking before inserting the data that is there same data(email) already exist or not so to prevent duplicate data.  
        
        const userExist=await User.findOne({email});

        if(userExist){ //if above query returns any value that means  if(userExist) will return true else returns false and else block will execute
            return res.status(400).json({message: "User already exist"})
        }
        else{
            const savedUser=await UserData.save();
            res.status(200).json(savedUser)
        }

    } catch (error) {
        res.status(500).json({error: " Internal Server error"})
    }
}

export const update = async (req,res)=>{
    try {
        const id= req.params.id;
        //to check if user exists in database or not
        const userExist=await User.findOne({_id:id}) 
        if(!userExist){
            return res.status(404).json("User not found")
        }

        const updatedUser=await User.findByIdAndUpdate(id,req.body,{new:true})  //{new:true} is used so that we get updated data
        //here req.body will be the data in form of key:value to update the existing data like if we want to modify name 
        //xyz to abc then we have to pass {name:abc} as body on update request which will be obtained req.body  
        res.status(201).json(updatedUser); 
    } catch (error) {
        res.status(500).json({error: " Internal Server error"})

    }
}

export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findOne({_id:id}) 
        if(!userExist){
            return res.status(404).json("User not found")
        }
       await User.findByIdAndDelete(id)
        res.status(201).json("User deleted successfully")
        
    } catch (error) {
        res.status(500).json({error: " Internal Server error"})

    }
}