import { mongoose } from 'mongoose';

const AuthSchema = new mongoose.Schema({
        username:{
                type: String,
                required:true,
                trim:true

        },
        email:{
                type: String,
                required:true,
                unique:true

        },
        password:{
                type: String,
                required:true

        },
        date:{
                type: Date,
                default: new Date()

        }
})

const AuthModel = mongoose.model('Auth', AuthSchema);

// AuthModel'ı doğrudan dışa aktar
export default AuthModel
