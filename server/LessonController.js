const Lesson = require('./models/Lesson')
const { unlink } = require('node:fs/promises')
const { error } = require('node:console')

class LessonController {
    async createLesson(req, res){
        try {
            const lesson = new Lesson({
                usernameCreate: req.body.usernameCreate,
                lessonName: req.body.lessonName,
                text:  req.body.text,
                img: req.files , 
            })
            const findDableLessonName = req.body.lessonName
            const findDableLesson = await Lesson.findOne({lessonName: findDableLessonName})
            const imgdel = req.files
            if(findDableLesson != null){
                const ArraySize = imgdel.length
                for(let i=0; i < ArraySize; i++){
                    unlink(`${imgdel[i].path}`)
                }
                return res.status(400).json({message:"Ошибка урок с таким названием уже есть"})
             }
            await lesson.save()
            return res.status(200).json(lesson)
        } catch (error) {
            return res.status(400).json({message:"Ошибка добавления"})
        }
    }
    async addComment(req, res){
        try {
            const {lessonID,username,text} = req.body
            const addcoment = await Lesson.findByIdAndUpdate({_id: lessonID},{$push: {comments:[{username, text}]} })
            return res.status(200).json({message:"Успешно добавлено"})
        } catch (error) {
            return res.status(400).json({message:"Ошибка добавления"})
        }
    }
    async delComment(req, res){
        try {
            const {lessonID,commentID} = req.body
            const delcoment = await Lesson.findByIdAndUpdate({_id: lessonID}, {$pull: {comments: {_id: commentID}}})
            return res.status(200).json({message:"Успешно удалено"})
        } catch (error) {
            return res.status(400).json({message:"Ошибка удаления"})
        }
    }
    async delLesson(req, res){
        try {
            const {id} = req.body
            const delLessonID = await Lesson.findByIdAndDelete({_id: id})
            if(delLessonID == null){
                return res.status(200).json({message:"Ошибка, нет такого урока"})
            }
            return res.status(200).json({message:"Успешно удалено"})
        } catch (error) {
            return res.status(400).json({message:"Ошибка удаления"})
        }
    }
    async getLesson(req, res){
        try {
            const getlessons = await Lesson.find()
            return res.status(200).json(getlessons)
        } catch (error) {
            return res.status(400).json({message:"Ошибка получения"})
        }
    }
}

module.exports = new LessonController()