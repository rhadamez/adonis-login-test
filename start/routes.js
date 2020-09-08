'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')
Route.post('sessions/refresh', 'SessionController.newRefreshToken')

Route.get('users', 'UserController.index').middleware('auth')
