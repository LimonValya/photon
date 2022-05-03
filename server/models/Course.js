import { Schema, model } from 'mongoose'

const Course = new Schema({
    name: {type: String, required:true},
    text: {type: String, required:true},
    img: {type:String, default: 0},
    comments: {type: Object, required:true},
})

export default model('Course', Course)