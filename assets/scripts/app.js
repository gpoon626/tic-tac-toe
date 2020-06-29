'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
const userAction = require('./auth/events')
const gameAction = require('./games/events-games')

$(() => {
  $('#signup-form').on('submit', userAction.onSignUp)
  $('#sign-in-form').on('submit', userAction.onSignIn)
  $('#change-password-form').on('submit', userAction.onChangePassword)
  $('#sign-out').on('click', userAction.onSignOut)

  $('#change-password').hide()
  $('#game-board').hide()

  $('#play-game').on('click', gameAction.onGameCreate)

  $('#zero').on('click', gameAction.onGameUpdate)
  $('#one').on('click', gameAction.onGameUpdate)
  $('#two').on('click', gameAction.onGameUpdate)
  $('#three').on('click', gameAction.onGameUpdate)
  $('#four').on('click', gameAction.onGameUpdate)
  $('#five').on('click', gameAction.onGameUpdate)
  $('#six').on('click', gameAction.onGameUpdate)
  $('#seven').on('click', gameAction.onGameUpdate)
  $('#eight').on('click', gameAction.onGameUpdate)
})
