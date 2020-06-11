'use strict'
const store = require('./../store')

const onBoxClickSuccess = function (response) {
  store.games = response.games
}

const onBoxClicksFailure = function () {
}

const gameCreateTest = function (data) {
  console.log(data)
  $('#game-board').show()
}

const gameCreateFail = function () {
  console.log('Failed')
}

const gameShowSuccess = function (data) {
  console.log(data)
}

const gameShowFail = function () {
  console.log(data)
}

module.exports = {
  onBoxClickSuccess,
  onBoxClicksFailure,
  gameCreateTest,
  gameCreateFail,
  gameShowSuccess
}
