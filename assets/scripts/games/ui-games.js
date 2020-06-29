'use strict'
const store = require('./../store')

const gameCreateSuccess = function (response) {
  console.log(response, 'new game!')
  $('#game-board').show()

  store.game = response.game
}

const gameCreateFail = function () {
  console.log('Failed')
}

const gameShowSuccess = function (data) {
  console.log(data)
}

const gameShowFail = function () {
  console.log('Failed')
}

const gameUpdateSuccess = function (response) {
  console.log(response)
  store.game = response.game
  if (store.value === 'X') {
    store.value = 'O'
  } else {
    store.value = 'X'
  }
}

const gameUpdateFail = function () {
  console.log('Failed')
}

module.exports = {
  gameCreateSuccess,
  gameCreateFail,
  gameShowSuccess,
  gameShowFail,
  gameUpdateSuccess,
  gameUpdateFail
}
