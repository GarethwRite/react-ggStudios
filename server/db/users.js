const connection = require('./connection')

// Read (collection of users)
function getUsers(db = connection){
  return db('users').select()
}

// Read (single user)
function getUser(id, db = connection){
  return db('users').select().where('id', id).first()
}

function addUser(newUser, db = connection){
  return db('users').insert(newUser)
  .then(ids => ids[0])
}

module.exports = {
  getUsers,
  getUser,
  addUser,
}