import { Schema, model } from 'mongoose'

const Comments = new Schema({
    username: {type: String, required:true},
    comments: {type: String, required:true},
})

export default model('Comments', Comments)