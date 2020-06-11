'use strict'

const store = require('./../store')
const config = require('./../config')

const gameIndex = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    method: 'GET',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameCreate = function () {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameShow = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/:id',
    method: 'GET',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/:id',
    method: 'PATCH',
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        }
      },
      over: false
    }
  })
}

module.exports = {
  gameIndex,
  gameCreate,
  gameShow,
  gameUpdate
}
