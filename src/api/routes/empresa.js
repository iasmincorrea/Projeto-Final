const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Empresa = require('../models/Empresa')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if(req.query.nome) filter.nome = req.query.nome

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        
        let empresas = []

        empresas = await Empresa.find(filter).limit(limit).skip(skip).populate()

        if(!empresas.length){
            res.statusCode = 204
            throw new Error()
        }

        res.json(empresas) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let empresa = await Empresa.findById(id)
        if(!empresa){
            res.statusCode = 404
            throw new Error ("Nenhum empresa com este id encontrado")
        }
        res.json(empresa)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const empresa =  new Empresa(req.body)
        const resultado = await empresa.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const empresa = req.body
        const resultado = await Empresa.findByIdAndUpdate(id,empresa)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Empresa.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route