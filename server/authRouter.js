const Router= require('express')
const router = new Router()
const controller= require('./authController')
const{check}= require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')



router.post('/registration',[
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password',"Пароль должен быть больше 4 и меньше 12 символов").isLength({min:4, max:12})
], controller.registration )
router.post('/login', controller.login )
router.get ( '/users', roleMiddleware(["ADMIN"]), controller.getUsers)



const upload = require('./middlewaree/upload')
const LessonController = require('./LessonController')

router.post('/createlesson', roleMiddleware(["ADMIN"]),upload.array('img', 10), LessonController.createLesson )
router.post('/dellesson', roleMiddleware(["ADMIN"]), LessonController.delLesson )
router.post('/addcoment', roleMiddleware(["ADMIN","USER"]), LessonController.addComment)
router.post('/delcoment', roleMiddleware(["ADMIN","USER"]), LessonController.delComment)

router.get('/getlessons', roleMiddleware(["ADMIN","USER"]), LessonController.getLesson)

module.exports = router