'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
const userAction = require('./auth/events')

const boxClick = require('./games/events-games')
const gameAction = require('./games/events-games')

$(() => {
  $('#signup-form').on('submit', userAction.onSignUp)
  $('#sign-in-form').on('submit', userAction.onSignIn)
  $('#change-password-form').on('submit', userAction.onChangePassword)
  $('#sign-out').on('click', userAction.onSignOut)

  $('#change-password').hide()
  $('#game-board').hide()

  $('#play-game').on('click', gameAction.onGameCreate)

  $('#one').on('click', boxClick.onBoxClick)
  $('#two').on('click', boxClick.onBoxClick)
  $('#three').on('click', boxClick.onBoxClick)
  $('#four').on('click', boxClick.onBoxClick)
  $('#five').on('click', boxClick.onBoxClick)
  $('#six').on('click', boxClick.onBoxClick)
  $('#seven').on('click', boxClick.onBoxClick)
  $('#eight').on('click', boxClick.onBoxClick)
  $('#nine').on('click', boxClick.onBoxClick)
})
