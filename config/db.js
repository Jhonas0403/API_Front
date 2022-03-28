const mongoose = require('mongoose')

const mongoURL = "mongodb+srv://admin:admin@cluster0.tdpso.mongodb.net/colors?retryWrites=true&w=majority"


module.exports = () => {
    const connect = () => {
        mongoose.connect(
            mongoURL, {
            keepAlive: true,
            useNewUrlParser: true, useUnifiedTopology: true
        },
            (err) => {
                if(err){
                    console.log ('DB: ERROR')
                }else{
                    console.log('Conexion Exitosa!!')
                }

            }
        )
    }

    connect();
}
