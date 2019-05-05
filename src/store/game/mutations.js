export function players (state, players) {
  console.log('store - mutation { players }', players)
  state.players = players
}

export function updateScore (state, { playerIndex, score }) {
  state.players[playerIndex].score = score
}
