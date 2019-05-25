<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Yatzy score sheet
        </q-toolbar-title>

        <q-btn flat round dense icon="autorenew" @click.native="openResetScoreDialog"/>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item @click.native="openNewGameDialog">
          <q-item-side icon="add" />
          <q-item-main label="New Game"/>
        </q-item>
        <q-item @click.native="openGamePage">
          <q-item-side icon="create" />
          <q-item-main label="Current Game"/>
        </q-item>
        <q-item @click.native="openHistoryPage">
          <q-item-side icon="history"/>
          <q-item-main label="History"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <NewGameDialog :openDialog="newGameDialog" v-on:close="closeNewGameDialog" v-on:new-game="createNewGame"></NewGameDialog>
      <ResetScoreDialog :openDialog="resetScoreDialog" v-on:close="closeResetScoreDialog" v-on:reset-score="restartCurrentGame"></ResetScoreDialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import NewGameDialog from '../components/NewGameDialog'
import ResetScoreDialog from '../components/ResetScoreDialog'

export default {
  name: 'MyLayout',

  components: {
    NewGameDialog,
    ResetScoreDialog
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      newGameDialog: false,
      resetScoreDialog: false
    }
  },

  methods: {
    openNewGameDialog () {
      this.leftDrawerOpen = false
      this.newGameDialog = true
    },
    closeNewGameDialog () {
      this.newGameDialog = false
    },
    createNewGame (playerList) {
      if (Array.isArray(playerList) && playerList.length > 0) {
        this.$store.dispatch('game/newGame', playerList)
      }
      this.closeNewGameDialog()
      this.openGamePage()
    },
    openHistoryPage () {
      this.$router.push({ path: '/history' })
      this.closeNewGameDialog()
    },
    openGamePage () {
      this.$router.push({ path: '/' })
      this.closeNewGameDialog()
    },
    openResetScoreDialog () {
      var playerList = this.$store.getters['game/players']
      if (Array.isArray(playerList) && playerList.length > 0) {
        this.resetScoreDialog = true
      }
    },
    closeResetScoreDialog () {
      this.resetScoreDialog = false
    },
    restartCurrentGame () {
      this.closeResetScoreDialog()
      this.$store.dispatch('game/resetScore')
      this.createNewGame()
    }
  }
}
</script>

<style>
</style>
