const{Schema,model}= require('mongoose')

const Lesson = new Schema({
    usernameCreate: {type: String, required:true},
    lessonName: {type: String, required:true},
    text: [],
    img: [],
    comments: [
        { username: {type: String, required: true}, text: {type: String, required: true} }
    ],
})

module.exports= model( 'Lesson', Lesson)