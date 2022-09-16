const Createcollection = require('../model/user.model')

// Get all Data
const getData = async (req, res) => {
    const getUrl = await Createcollection.find()
    res.send(getUrl)
}

// Get Individual Data
const indGetData = async (req, res) => {
    try {
        const _id = req.params.id
        const getData = await Createcollection.findById(_id)
        res.send(getData)
    } catch (err) {
        res.send(err)
    }
}

// Send and Save Data in Database
const postData = async (req, res) => {
    try{
        const dataSend = new Createcollection(req.body)
        const dataSave = await dataSend.save()
        res.send(dataSave)
    }catch (err) {
        res.send('Data is not sended')
    }
}


// Update Data
const updateData = async (req, res) => {
    try{
        const _id = req.params.id
        const patchData = await Createcollection.findByIdAndUpdate(_id, req.body)
        res.send(patchData)
    }catch (err) {
        res.send(err)
    }
}


// Delete Data
const deleteData = async (req, res) => {
    try{
        const _id = req.params.id
        const data = await Createcollection.findByIdAndDelete(_id)
        res.send(data)
    }catch (err) {
        res.send(err)
    }
}



module.exports = { getData, indGetData, postData, updateData, deleteData }