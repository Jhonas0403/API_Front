const express = require('express')

const controller = require('../controllers/color.js')

const router = express.Router()

const path = 'colors'

router.get(
    `/${path}`,
    controller.getData


)

router.post(
    `/${path}`,
    controller.insertData
)

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
)

router.put(
    `/${path}/:id`,
    controller.updateSingle
)

module.exports = router