import Player from '../../model/Player.js'

export function newGame ({ commit }, players) {
  commit('players', players)
}

export function resetScore ({ commit, state }) {
  var newPlayerList = []
  state.players.forEach(function (player) {
    newPlayerList.push(new Player(player.name))
  })
  commit('players', newPlayerList)
}
