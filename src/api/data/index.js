const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://iasmincr:7f9Uthn5VMIWSxIQ@cluster0.vzep3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', function(){
    console.log("Conectado ao banco de dados!")
})

module.exports = mongoose