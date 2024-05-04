import AuthSchema from "../modules/auth";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



const register = async(req, res ) => {
        try {
                const {username, email, password} = req.body;
                const user = AuthSchema.findOne(email);
                if(user){
                        return res.status(500).json({msg: "This email already registered !"})
                }
                if(password.length < 6){
                        return res.status(500).json({msg: " Password must be longer than 6 chars!"})
                }
                const passwordHash = await bcrypt.hash(password, 12);
                
                if(!isEmail){
                        return res.status(500).json({msg: "Not an email format!"})
                }

                const newUser = await AuthSchema.create(username, email, password = passwordHash)

                const token = jwt.sign({id:newUser._id}, "SECRET_KEY", {expiresIn : '1h'})

                res.status(201).json({
                        status :"OK",
                        newUser,
                        token
                })

        } catch (error) {
                return res.status(500).json({msg: error.message})
        }
}


const login = async((req, res ) => {
        try {
                const {email,password} = req.body
                const user = AuthSchema.findOne(email)

                if(!user){
                        return res.status(500).json({msg: "No user with this email"})
                }

                const passwordCompare = bcrypt.compare(password, user.password)

                if(!passwordCompare){
                        return res.status(500).json({"Wrong password"})
                }

                const token = jwt.sign({id:user._id}, "SECRET_KEY", {expiresIn:'1h'})
                
                res.status(201).json({
                        status :"OK",
                        user,
                        token
                })




        } catch (error) {
                return res.status(500).json({msg: error.message})
        }
})

function isEmail(email){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
      if (email.match(regex)) 
        return true; 
    
       else 
        return false; 
}

export default {register, login};