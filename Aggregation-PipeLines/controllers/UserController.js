const User = require('../models/Data');
// Fetches all Users
const users = (req, res, next) => {
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}
//Fetches a Single User
const one_user = (req, res, next) => {
    let userID = req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}
// Saves user to the database
const store = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    user.save()
    .then(response => {
        res.json({
            message: 'User added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    }) 
}

// Updates user
const update = (req, res, next) => {
    let userID = req.body.userID
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    User.findByIdAndUpdate(userID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'User updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}
// Deletes a user
const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findByIdAndRemove(userID)
    .then(() => {
        req.json({
            message: 'User deleted Successfully!'
        })
    })
    .catch(error => {
        req.json({
            message: 'An error occured!'
        })
    })
}
module.exports = {
    users, one_user, store, update, destroy
}