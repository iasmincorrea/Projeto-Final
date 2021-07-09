const mongoose = require('../data/index.js')

let empregadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    nascimento: Date,
    salario:  Number,

}, {timestamps : true})

let Empregado = mongoose.model('Empregado', empregadoSchema)

module.exports = Empregado