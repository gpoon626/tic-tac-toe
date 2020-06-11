'use strict'

const api = require('./api-games.js')
const ui = require('./ui-games.js')

let player = 'X'
const onBoxClick = function (event) {
  event.preventDefault()

  if ($(event.target).text() === '') {
    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  }
}

const playerWins = function (event) {
  $(event.target).text(player)
  if (player === 'X') {
    player = [
      [$('#one'), $('#two'), $('three')],
      [$('#four'), $('#five'), $('six')],
      [$('#seven'), $('eight'), $('nine')],
      [$('#one'), $('#four'), $('seven')],
      [$('#two'), $('#five'), $('eight')],
      [$('three'), $('#six'), $('nine')],
      [$('one'), $('five'), $('#nine')],
      [$('three'), $('five'), $('#seven')]
    ]
  }
  console.log('X Wins!')
  if (player === 'O') {
    player = [
      [$('#one'), $('#two'), $('three')],
      [$('#four'), $('#five'), $('six')],
      [$('#seven'), $('eight'), $('nine')],
      [$('#one'), $('#four'), $('seven')],
      [$('#two'), $('#five'), $('eight')],
      [$('three'), $('#six'), $('nine')],
      [$('one'), $('five'), $('#nine')],
      [$('three'), $('five'), $('#seven')]
    ]
  }
  console.log('O wins')
}

const onGameCreate = function () {
  event.preventDefault()
  api.gameCreate()

    .then(ui.gameCreateTest)
    .catch(ui.gameCreateFail)
}

const onGameShow = function (events) {
  console.log(events)
  event.preventDefault()
  api.gameShow()

    .then(ui.gameShowSuccess)
    .catch(ui.gameShowFail)
}

module.exports = {
  onBoxClick,
  playerWins,
  onGameCreate,
  onGameShow
}
