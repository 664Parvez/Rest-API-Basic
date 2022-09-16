const { getData, indGetData, postData, updateData, deleteData } = require('../controller/user.controller')

const router = require('express').Router()


router.get('/employee', getData)

router.get('/employee/:id', indGetData)

router.post('/employee', postData)

router.patch('/employee/:id', updateData)

router.delete('/employee/:id', deleteData)


module.exports = router