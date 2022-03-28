const mongoose = require('mongoose')
const mongoosePaginate=require('mongoose-paginate-v2')

const colorSchema = mongoose.Schema({
    id: {
        type: String
    },
    name: { type: String },
    year: { type: Number },
    color: { type: String },
    pantone_value: { type: String }
}, {
    versionKey: false,
})

colorSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('colors', colorSchema)