'use strict'
const store = require('./../store')

const addSuccess = function (response) {
  console.log(response)
  $('#message').text('Welcome!')
  $('form').trigger('reset')
}

const addFailure = function (response) {
  console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const signUserInSuccess = function (response) {
  console.log(response)
  $('#message').text('Welcome!')
  $('form').trigger('reset')
  store.user = response.user

  $('#change-password').show()

  $('#signup').hide()
  $('#sign-in').hide()
  $('#sign-up-message').hide()
}

const signUserInFailure = function (response) {
  console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  console.log(response)
  $('#message').text('Password Changed!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (response) {
  console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const signOutSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed Out!')
  $('form').trigger('reset')

  $('#game-board').hide()
  $('#change-password').hide()

  $('#sign-in').show()
  $('#sign-up-message').show()
  $('#signup').show()
}

const signOutFailure = function (response) {
  console.log(response)
  $('#message').text('Try again')
  $('#form').trigger('reset')
}

module.exports = {
  addSuccess,
  addFailure,
  signUserInSuccess,
  signUserInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  store,
  signOutSuccess,
  signOutFailure
}
