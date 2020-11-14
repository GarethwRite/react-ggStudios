
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'louis', lastName:'lane', email:'supermansGF@gmail.com'},
        {id: 2, firstName: 'bruce', lastName:'wyane', email:'notbatman@gmail.com'},
        {id: 3, firstName: 'clark', lastName:'kent', email:'notsuperman@gmail.com'},
      ])
    })
}
