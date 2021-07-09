Rest API com dois recursos: empregados e empresas

Endpoints
1) /empregados
2) /empresas

Schema
1) Models > Empregado.js
    ```
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
    
2) Models > Empresa.js
    ```
    let empresaSchema = new mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        endereco: String,
        cep: String,
        filial: Boolean
    }, {timestamps : true})

Métodos
1) GET(objeto)
2) GET(coleção)
3) POST
4) PUT
5) DELETE

Bibliotecas
1) Express
2) Mongoose
