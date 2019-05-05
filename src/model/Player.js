export default class Player {
  constructor (name) {
    this.name = name

    this.score = {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      bonus: null,
      higherTotal: 0,
      threeOfAKind: null,
      fourOfAKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yatzy: null,
      chance: null,
      total: 0
    }
  }
}
