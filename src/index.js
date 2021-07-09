const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const rotasEmpresa =  require('./api/routes/empresa')
const rotasEmpregado =  require('./api/routes/empregado')

app.use('/empresas', rotasEmpresa)
app.use('/empregados', rotasEmpregado)

app.use((err,req,res,next) => {
    if(res.statusCode == 200){
        res.statusCode = 500
        res.json({erro: err.message})
    }
    else {
        res.send()
    }
})

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta '+ PORT)
})