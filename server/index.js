const express = require('express')
const mongoose = require('mongoose')
const app = express()

const authRouter = require('./authRouter')


app.use(express.json())
app.use(express.urlencoded())
app.use('/auth', authRouter)
// app.use('/storage', storageRouter)
// app.use('/prodacc', prodAccRouter)

//Порт сервера
const port = process.env.port||3001

//Запуск сервера
const start = async () => {
try{
await mongoose.connect('mongodb://node:nindzya.13@cluster0-shard-00-00.fral0.mongodb.net:27017,cluster0-shard-00-01.fral0.mongodb.net:27017,cluster0-shard-00-02.fral0.mongodb.net:27017/PHOTON?ssl=true&replicaSet=atlas-1zb0kr-shard-0&authSource=admin&retryWrites=true&w=majority')
app.listen(port, () => console.log(`Приложение запустилось и слушает порт ${port}!`))
} catch(e){
console.log(e)
}
}

start()

//Все для сайта
const path = __dirname + '/dist/'
const webport = process.env.port||3002

//Подключение сайта к серверу
