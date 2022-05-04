const{Schema,model}= require('mongoose')

const Course = new Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    img: {type:String, default: 0},
    lessons: [{type: Object, ref:'Lesson'}],
})

module.exports= model('Course', Course)