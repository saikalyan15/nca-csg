const express = require('express')
const cors = require('cors')

const app = express()


require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello World')
}) //home page

const server = () =>{

    app.listen(PORT, () => { 
        console.log ('Server running on port:', PORT)


    })

}

server()