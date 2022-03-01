const express = require('express')
const Routes = require('./Routes/routes')
app = express()

Routes(app);


app.listen(5000, () => {
    console.log('node backend running')
})


