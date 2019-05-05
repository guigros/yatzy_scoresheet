<template>
  <q-page>
    <YatzyGrid :players="$store.getters['game/players']"/>
  </q-page>
</template>

<style lang="stylus">
</style>

<script>
import YatzyGrid from '../components/YatzyGrid'

export default {
  name: 'PageIndex',

  components: {
    YatzyGrid
  }
}
</script>
