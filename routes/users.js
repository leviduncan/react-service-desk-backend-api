const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', async(req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post('/', async(req, res) => {
    const users = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        issueType: req.body.issueType,
        issueDesc: req.body.issueDesc,
        priority: req.body.priority
    })

    try{
        const a1 = await users.save()
        res.json(a1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const users = await User.findById(req.params.id)
        users.firstName = req.body.firstName,
        users.lastName = req.body.lastName,
        users.issueType = req.body.issueType,
        users.issueDesc = req.body.issueDesc,
        users.priority = req.body.priority
        const a1 = await users.save()
        res.json(a1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const users = await User.findById(req.params.id)
        const a1 = await users.remove()
        res.json(a1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

module.exports = router