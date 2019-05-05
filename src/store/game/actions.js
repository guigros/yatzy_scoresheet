export function newGame ({ commit, state }, players) {
  console.log('store - action { newGame }', players)
  commit('players', players)
}
