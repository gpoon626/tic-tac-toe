'use strict'

const api = require('./api-games.js')
const ui = require('./ui-games.js')
const store = require('./../store')

const onGameCreate = function () {
  console.log(event.target)
  event.preventDefault()
  api.gameCreate()

    .then(ui.gameCreateSuccess)
    .catch(ui.gameCreateFail)
}

const onGameShow = function (events) {
  console.log(events)
  event.preventDefault()
  api.gameShow()

    .then(ui.gameShowSuccess)
    .catch(ui.gameShowFail)
}

const onGameUpdate = function (events) {
  console.log(event.target)
  event.preventDefault()
  store.index = $(event.target).attr('data-cell-index')
  // this function determines where the user plays on the board
  console.log(store)
  if ($(event.target).text() === '') {
    $(event.target).text(store.value)
    // this function sends the api the player's value&index and game over status
    api.gameUpdate()
      .then(ui.gameUpdateSuccess)
      .catch(ui.gameUpdateFail)
  }

  const testWinner = function () {
    if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
      const winner = store.game.cells[0]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
      const winner = store.game.cells[3]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
      const winner = store.game.cells[6]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
      const winner = store.game.cells[0]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
      const winner = store.game.cells[1]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
      const winner = store.game.cells[2]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
      const winner = store.game.cells[0]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
    if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[0] !== '') {
      const winner = store.game.cells[2]
      $('#message').text(' The winner is: ' + winner)
      store.game.over = true
    }
  }
  setTimeout(testWinner, 1000)
}
// player's value is:
// the game index is:
// the game-board status is:

module.exports = {
  onGameCreate,
  onGameShow,
  onGameUpdate
}
