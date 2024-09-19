const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(() => {
        console.log('conexão realizada com sucesso')
    })
    .catch(err => console.log(err))

mongoose.Promise = global.Promise

module.exports = mongoose