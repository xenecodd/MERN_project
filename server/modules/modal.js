import { mongoose } from 'mongoose';

const ModalSchema = new mongoose.Schema({
        user:{
                type: String,
                required:true,
                trim:true

        },
        title:{
                type: String,
                required:true,
                trim:true

        },
        description:{
                type: String,
                required:true,
                trim:true

        },
        date:{
                type: Date,
                default: new Date()

        }
})

const ModalModel = mongoose.model('Modal', ModalSchema);

export default ModalModel
