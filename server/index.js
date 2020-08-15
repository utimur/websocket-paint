const app = require('express')()
const WSExpress = require('express-ws')(app)
const mongoose = require('mongoose')


const PORT = process.env.PORT || 5000

function start() {
    try {

        app.listen(PORT, () => console.log('Server started on PORT', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()
