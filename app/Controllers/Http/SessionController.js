'use strict'

const User = use('App/Models/User')

class SessionController {

  async store({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.withRefreshToken().attempt(email, password)
    const user = await User.query().where('email', email).first()

    return { token, user }
  }

  async newRefreshToken({ request, auth }) {
    const oldToken = request.header('refreshToken')
    const newToken = await auth.newRefreshToken().generateForRefreshToken(oldToken)
    return { newToken }
  }

}

module.exports = SessionController
