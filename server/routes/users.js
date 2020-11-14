const express = require('express')
const { getUsers, getUser, addUser } = require('../db/users')
const router = express.Router()

//Read (Collection of users)
router.get('/', (req,res) => {
  getUsers()
  .then(users => {
    res.json(users)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'you fucked up on serverside'})
  })
})


//Read (single user)
router.get('/:id', (req,res) => {
  const id = req.params.id
  getUser(id)
  .then(user => {
    res.json(user)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'you fucked up on serverside'})
  })
})

// Add a new user
router.post('/', (req,res) => {
  const newUser = req.body
  addUser(newUser)
  .then(id => {
    res.json({ id: id})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'you fucked up on serverside'})
  })
})


module.exports = router