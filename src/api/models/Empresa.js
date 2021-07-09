const mongoose = require('../data/index.js')

let empresaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: String,
    cep: String,
    filial: Boolean
 
}, {timestamps : true})

let Empresa = mongoose.model('Empresa', empresaSchema)

module.exports = Empresa