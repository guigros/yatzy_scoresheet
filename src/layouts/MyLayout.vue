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
          Yatssouille App
        </q-toolbar-title>
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
          <q-item-side icon="create" />
          <q-item-main label="New Game"/>
        </q-item>
        <q-item>
          <q-item-side icon="history" />
          <q-item-main label="History"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <NewGameDialog :openDialog="newGameDialog" v-on:close="closeNewGameDialog" v-on:new-game="createNewGame"></NewGameDialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import NewGameDialog from '../components/NewGameDialog'

export default {
  name: 'MyLayout',

  components: {
    NewGameDialog
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      newGameDialog: false
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
    }
  }
}
</script>

<style>
</style>
