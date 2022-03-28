const req = require('express/lib/request')
const { get } = require('express/lib/response')
const model = require('../models/color')



exports.getData = (req, res) => {
    const pageS = Number.parseInt(req.query.page) || 1
    const limitS = Number.parseInt(req.query.limit) || 6

    const options = {
        page: pageS,
        limit: limitS,
    }
    model.paginate({}, options, (err, data) => {
        res.send({
            data,
            info: {
                NextPage: NextPage(data, pageS),
                PrevPage: PrevPage(data, pageS),
            },

        })
    })
}

const NextPage = (data, pages) => {
    if (pages != data.totalPages) {
        return `http://localhost:5500/colors?page=${pages + 1}`
    } else {
        return null
    }
}
const PrevPage = (data, pages) => {
    if (pages != 1) {
        return `http://localhost:5500/colors?page=${pages - 1}`
    } else {
        return null
    }
}

exports.insertData = (req, res) => {
    const data = req.body

    model.create(data, (err, docs) => {
        if (err) {
            res.send({ error: 'ERROR' }, 500)
        } else {
            res.send({ data: docs })
        }
    })
}

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne({ id: id },
        body
        ,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.de({ id: id },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}