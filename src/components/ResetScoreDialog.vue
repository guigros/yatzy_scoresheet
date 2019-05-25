<template>
  <q-dialog
    v-model="resetScoreDialogModel"
    prevent-close
    @cancel="onCancel"
    @ok="onOk"
  >
    <span slot="message">Reset the current game ?</span>

    <template slot="buttons" slot-scope="props">
      <q-btn color="primary" label="Ok" @click="props.ok" />
      <q-btn flat label="Cancel" @click="props.cancel" />
    </template>
  </q-dialog>
</template>

<script>
export default {
  name: 'ResetScore',

  props: {
    openDialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data () {
    return {
      resetScoreDialogModel: false
    }
  },

  methods: {
    onOk () {
      // console.log('ResetScore - ok')
      this.$emit('reset-score')
    },
    onCancel () {
      // console.log('ResetScore - cancel')
      this.$emit('close')
    }
  },

  watch: {
    // Watch openDialog property in order to open the dialog
    openDialog: function (val) {
      this.resetScoreDialogModel = val
    }
  }
}
</script>
