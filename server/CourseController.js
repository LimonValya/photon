const Course = require('./models/Course')

class CourseController {
    async addCourse(req, res){
        try {
            const {name, text, img} = req.body
            const Course = new Course({name, description, img, lessons})
            await Course.save()
            return res.status(200).json({message:"Успешно"})
        } catch (error) {
            return res.status(400).json({message:"Ошибка добавления"}, error)
        }
    }
    async delCourse(req, res){
        try {
            const {name} = req.body
            const findCourse = await Course.findOne({name})
            if(!findCourse){
                return res.status(404).json({message:"Такой урок не найден"})
            }
            const delCourse = await Course.findOneAndDelete({name})
            return res.status(200).json({message:"Успешно"})
        } catch (error) {
            return res.status(400).json({message:"Ошибка удаления"}, error)
        }
    }
    async getCourse(req,res){
        try {
            const allCourse = await Course.find()
            return res.status(200).json(allCourse)
        } catch (error) {
            return res.status(400).json({message:"Ошибка получения"}, error)
        }
    }
}

module.exports = new CourseController()