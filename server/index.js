const express = require('express')
const WSExpress = require('express-ws')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const config = require('config')
const corsMiddleware = require('cors')

const app = express()
const wsApp = WSExpress(app)

const authRouter = require('./routes/auth.routes')
const holstRouter = require('./routes/holst.routes')
const drawRouter = require('./routes/draw.routes')


const path = require('path')

const PORT = process.env.PORT || config.get('PORT') || 8080


app.use(corsMiddleware())
app.use(fileUpload({}))
app.use(express.static(path.join(__dirname, 'holsts')))
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/holst', holstRouter)
// app.use('/api/draw', drawRouter)

async function start() {
    try {
        await mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT, () => console.log('Server started on PORT', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()

const aWss = wsApp.getWss('/api/draw')

app.ws('/api/draw', (ws, req) => {
    console.log('conect')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        ws.id = msg.id
        aWss.clients.forEach(function each(client) {
            if(client.id === ws.id && client !== ws)
                client.send(JSON.parse(msg));
        });
    })
})
