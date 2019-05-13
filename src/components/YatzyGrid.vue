<template>
    <div class="grid-wrapper">
      <div class="cell grid-row-1 grid-col-1">Players</div>
      <div class="cell grid-row-2 grid-col-1">1's</div>
      <div class="cell grid-row-3 grid-col-1">2's</div>
      <div class="cell grid-row-4 grid-col-1">3's</div>
      <div class="cell grid-row-5 grid-col-1">4's</div>
      <div class="cell grid-row-6 grid-col-1">5's</div>
      <div class="cell grid-row-7 grid-col-1">6's</div>
      <div class="cell grid-row-8 grid-col-1">Total</div>
      <div class="cell grid-row-9 grid-col-1">Bonus</div>
      <div class="cell grid-row-10 grid-col-1">Three of a kind</div>
      <div class="cell grid-row-11 grid-col-1">Four of a kind</div>
      <div class="cell grid-row-12 grid-col-1">Full House</div>
      <div class="cell grid-row-13 grid-col-1">Small Straight</div>
      <div class="cell grid-row-14 grid-col-1">Large Straight</div>
      <div class="cell grid-row-15 grid-col-1">Yatzy</div>
      <div class="cell grid-row-16 grid-col-1">Chance</div>
      <div class="cell grid-row-17 grid-col-1">Total</div>
<!--       <template v-for="(player, index) in players">
        <div :class="['cell', 'row-1', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-1'" @click="cellClicked(index)">{{ player.name }}</div>
        <div :class="['cell', 'row-2', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-2'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-3', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-3'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-4', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-4'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-5', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-5'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-6', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-6'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-7', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-7'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-8', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-8'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-9', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-9'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-10', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-10'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-11', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-11'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-12', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-12'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-13', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-13'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-14', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-14'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-15', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-15'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-16', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-16'" @click="cellClicked(index)">0</div>
        <div :class="['cell', 'row-17', 'col-' + (index + 2)]" :key="index + '-' + player.name + '-17'" @click="cellClicked(index)">0</div>
      </template> -->
      <template v-for="(player, index) in players">
        <div :class="['cell playerName', 'grid-row-1', 'grid-col-' + (index + 2), 'text-color-' + index]" :key="index + '-' + player.name + '-1'">{{ player.name }}</div>
        <q-input :class="['cell', 'grid-row-2', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.ONE)" placeholder="0" v-model="players[index].score.one" :key="index + '-' + player.name + '-2'"/>
        <q-input :class="['cell', 'grid-row-3', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.TWO)" placeholder="0" v-model="players[index].score.two" :key="index + '-' + player.name + '-3'"/>
        <q-input :class="['cell', 'grid-row-4', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.THREE)" placeholder="0" v-model="players[index].score.three" :key="index + '-' + player.name + '-4'"/>
        <q-input :class="['cell', 'grid-row-5', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.FOUR)" placeholder="0" v-model="players[index].score.four" :key="index + '-' + player.name + '-5'"/>
        <q-input :class="['cell', 'grid-row-6', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.FIVE)" placeholder="0" v-model="players[index].score.five" :key="index + '-' + player.name + '-6'"/>
        <q-input :class="['cell', 'grid-row-7', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.SIX)" placeholder="0" v-model="players[index].score.six" :key="index + '-' + player.name + '-7'"/>
        <q-input :class="['cell', 'grid-row-8', 'grid-col-' + (index + 2), 'text-color-' + index]" disable hide-underline :value="getHigherTotal(index)  + ' (' + getBonusRange(index) + ')'" :key="index + '-' + player.name + '-8'"/>
        <q-input :class="['cell', 'grid-row-9', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" disable hide-underline :value="getBonus(index)" :placeholder="$store.getters['game/bonus'].toString()" :key="index + '-' + player.name + '-9'"/>
        <q-input :class="['cell', 'grid-row-10', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.THREE_OF_A_KIND)" placeholder="0" v-model="players[index].score.threeOfAKind" :key="index + '-' + player.name + '-10'"/>
        <q-input :class="['cell', 'grid-row-11', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.FOUR_OF_A_KIND)" placeholder="0" v-model="players[index].score.fourOfAKind" :key="index + '-' + player.name + '-11'"/>
        <q-input :class="['cell', 'grid-row-12', 'grid-col-' + (index + 2), 'text-color-' + index]" readonly type="number" hide-underline @click="updateScore(index, inputType.FULL_HOUSE)" placeholder="25" v-model="players[index].score.fullHouse" :key="index + '-' + player.name + '-12'"/>
        <q-input :class="['cell', 'grid-row-13', 'grid-col-' + (index + 2), 'text-color-' + index]" readonly type="number" hide-underline @click="updateScore(index, inputType.SMALL_STRAIGHT)" placeholder="30" v-model="players[index].score.smallStraight" :key="index + '-' + player.name + '-13'"/>
        <q-input :class="['cell', 'grid-row-14', 'grid-col-' + (index + 2), 'text-color-' + index]" readonly type="number" hide-underline @click="updateScore(index, inputType.LARGE_STRAIGHT)" placeholder="40" v-model="players[index].score.largeStraight" :key="index + '-' + player.name + '-14'"/>
        <q-input :class="['cell', 'grid-row-15', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.YATZY)" placeholder="0" v-model="players[index].score.yatzy" :key="index + '-' + player.name + '-15'"/>
        <q-input :class="['cell', 'grid-row-16', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" hide-underline @input="updateScore(index, inputType.CHANCE)" placeholder="0" v-model="players[index].score.chance" :key="index + '-' + player.name + '-16'"/>
        <q-input :class="['cell', 'grid-row-17', 'grid-col-' + (index + 2), 'text-color-' + index]" type="number" disable hide-underline v-model="players[index].score.total" :key="index + '-' + player.name + '-17'"/>
      </template>
    </div>
</template>

<style lang="stylus">
@import '~variables'
max-player = 10
max-color-index = max-player - 1
nb-rows = 17
colors = $red, $indigo, $green, $amber, $deep-orange, $brown, $grey, $light-blue, $pink, $teal

grid-row-position(row)
  grid-row-start: row
  grid-row-end: row+1

grid-col-position(col)
  grid-column-start: col
  grid-column-end: col+1

for index in (1..nb-rows)
  .grid-row-{index}
    grid-row-position(index)

for index in (1..max-player)
  .grid-col-{index}
    grid-col-position(index)

for index in (0..max-color-index)
  .text-color-{index}
    input, &.playerName
      color colors[index]

.grid-wrapper
  display grid
  padding-top 0.5em
  height: calc(100vh - 50px);

.cell
  display flex
  align-items center
  justify-content center
  min-width: 3em
  border-bottom 1px dashed grey
  input, &.playerName
    font-weight bold
    text-align center
    cursor: pointer
  &.playerName
    cursor: none
  &.grid-col-1
    justify-content left
    padding-left 0.25em
    min-width: 7em
    cursor: none
</style>

<script>
export default {
  name: 'YatzyGrid',

  props: {
    players: {
      type: Array,
      required: true
    }
  },

  mounted () {
  },

  data: () => ({
    inputType: {
      ONE: 'one',
      TWO: 'two',
      THREE: 'three',
      FOUR: 'four',
      FIVE: 'five',
      SIX: 'six',
      THREE_OF_A_KIND: 'threeOfAKind',
      FOUR_OF_A_KIND: 'fourOfAKind',
      FULL_HOUSE: 'fullHouse',
      SMALL_STRAIGHT: 'smallStraight',
      LARGE_STRAIGHT: 'largeStraight',
      YATZY: 'yatzy',
      CHANCE: 'chance'
    },
    maxPlayer: 10
  }),

  methods: {
    updateScore (playerIndex, inputType) {
      if (Array.isArray(this.players) && playerIndex >= 0 && playerIndex < this.players.length) {
        console.log('Update score for player : ' + this.players[playerIndex].name, inputType)

        if (inputType === this.inputType.SMALL_STRAIGHT || inputType === this.inputType.LARGE_STRAIGHT || inputType === this.inputType.FULL_HOUSE) {
          var val = 0

          switch (inputType) {
            case this.inputType.FULL_HOUSE:
              val = 25
              break
            case this.inputType.SMALL_STRAIGHT:
              val = 30
              break
            case this.inputType.LARGE_STRAIGHT:
              val = 40
              break
          }

          if (this.players[playerIndex].score[inputType] === null) {
            this.players[playerIndex].score[inputType] = val
          } else if (this.players[playerIndex].score[inputType] === val) {
            this.players[playerIndex].score[inputType] = 0
          } else {
            this.players[playerIndex].score[inputType] = null
          }
        }

        this.players[playerIndex].score.higherTotal = this.players[playerIndex].score.one +
          this.players[playerIndex].score.two +
          this.players[playerIndex].score.three +
          this.players[playerIndex].score.four +
          this.players[playerIndex].score.five +
          this.players[playerIndex].score.six

        this.players[playerIndex].score.total = this.players[playerIndex].score.higherTotal +
          this.players[playerIndex].score.threeOfAKind +
          this.players[playerIndex].score.fourOfAKind +
          this.players[playerIndex].score.fullHouse +
          this.players[playerIndex].score.smallStraight +
          this.players[playerIndex].score.largeStraight +
          this.players[playerIndex].score.yatzy +
          this.players[playerIndex].score.chance

        if (this.players[playerIndex].score.higherTotal >= this.$store.getters['game/bonusThreshold']) {
          this.players[playerIndex].score.total += this.$store.getters['game/bonus']
        }

        this.$store.commit('game/updateScore', { playerIndex: playerIndex, score: this.players[playerIndex].score })
      }
    },

    getHigherTotal (playerIndex) {
      return this.players[playerIndex].score.higherTotal + '/' + this.$store.getters['game/bonusThreshold']
    },

    getBonus (playerIndex) {
      if (this.players[playerIndex].score.higherTotal >= this.$store.getters['game/bonusThreshold']) {
        return this.$store.getters['game/bonus']
      } else return null
    },

    getBonusRange (playerIndex) {
      var bonusRange = this.getScoreRange(1, this.players[playerIndex].score.one) +
                          this.getScoreRange(2, this.players[playerIndex].score.two) +
                            this.getScoreRange(3, this.players[playerIndex].score.three) +
                              this.getScoreRange(4, this.players[playerIndex].score.four) +
                                this.getScoreRange(5, this.players[playerIndex].score.five) +
                                  this.getScoreRange(6, this.players[playerIndex].score.six)

      if (bonusRange > 0) {
        bonusRange = '+' + bonusRange
      }

      return bonusRange
    },

    getScoreRange (score, currentVal) {
      var range = 0

      if (!Number.isNaN(currentVal) && currentVal !== null) {
        if (currentVal / 3 < 1) {
          range = ((1 - (currentVal / (score * 3))) * (score * 3)) * -1
        } else {
          range = ((currentVal / (score * 3)) - 1) * (score * 3)
        }
      }

      return Math.round(range)
    }
  }
}
</script>
