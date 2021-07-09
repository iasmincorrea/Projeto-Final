const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Empregado = require('../models/Empregado')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if(req.query.nome) filter.nome = req.query.nome

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        
        let empregados = []

        empregados = await Empregado.find(filter).limit(limit).skip(skip).populate("empresa")

        if(!empregados.length){
            res.statusCode = 204
            throw new Error()
        }

        res.json(empregados) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let empregado = await Empregado.findById(id)
        if(!empregado){
            res.statusCode = 404
            throw new Error ("Nenhum empregado com este id encontrado").populate("empresa")
        }
        res.json(empregado)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const empregado =  new Empregado(req.body)
        const resultado = await empregado.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const empregado = req.body
        const resultado = await Empregado.findByIdAndUpdate(id,empregado)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})
 
route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Empregado.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route