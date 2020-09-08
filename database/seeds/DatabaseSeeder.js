'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      username: 'rhadamez',
      email: 'rhadamez@gmail.com',
      password: '123321'
    })
  }
}

module.exports = DatabaseSeeder
