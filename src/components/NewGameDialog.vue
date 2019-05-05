<template>
  <q-dialog
    v-model="newGameDialogModel"
    prevent-close
    @cancel="onCancel"
    @ok="onOk"
    @show="onShow"
    @hide="onHide"
  >
    <!-- This or use "title" prop on <q-dialog> -->
    <span slot="title">New game setup</span>

    <!-- This or use "message" prop on <q-dialog> -->
    <span slot="message">Add or remove player for the game</span>

    <div slot="body">
      <q-field
          icon="account_circle"
          label="Player name"
          class="player-name"
        >
        <q-input ref="inputPlayerName" v-model="currentName" :after="[{icon: 'add', content: true, handler () { addPlayer()}}]"/>
      </q-field>
      <q-list>
        <q-list-header>Current players</q-list-header>
        <q-item v-for="(player, index) in playerList" :key="index">
          <q-item-side icon="account_circle" />
          <q-item-main :label="player.name" />
          <q-item-side>
            <q-btn size="sm" icon="remove" @click="removePlayer(index)"/>
          </q-item-side>
        </q-item>
      </q-list>
    </div>

    <template slot="buttons" slot-scope="props">
      <q-btn color="primary" label="Ok" @click="props.ok" />
      <q-btn flat label="Cancel" @click="props.cancel" />
    </template>
  </q-dialog>
</template>

<script>
import Player from '../model/Player.js'

export default {
  name: 'NewGame',

  props: {
    openDialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data () {
    return {
      newGameDialogModel: false,
      currentName: '',
      playerList: []
    }
  },

  methods: {
    onOk () {
      console.log('ok')
      this.$emit('new-game', this.playerList)
    },
    onCancel () {
      console.log('cancel')
      this.$emit('close')
    },
    onShow () {
      this.$nextTick(() => { this.$refs.inputPlayerName.focus() })
    },
    onHide () {
      console.log('hide')
    },
    addPlayer () {
      this.playerList.push(new Player(this.currentName))
      this.currentName = ''
    },
    removePlayer (index) {
      this.playerList.splice(index, 1)
    }
  },

  watch: {
    // Watch openDialog property in order to open the dialog
    openDialog: function (val) {
      this.newGameDialogModel = val
      this.playerList = []
    }
  }
}
</script>

<style lang="stylus">
.player-name
  margin-bottom 1em
</style>
