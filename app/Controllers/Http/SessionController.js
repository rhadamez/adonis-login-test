'use strict'

class SessionController {

  async store({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.withRefreshToken().attempt(email, password)

    return token
  }

  async newRefreshToken({ request, auth }) {
    const oldToken = request.header('refreshToken')
    const newToken = await auth.newRefreshToken().generateForRefreshToken(oldToken)
    return { newToken }
  }

}

module.exports = SessionController
