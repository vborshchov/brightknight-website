<template>
  <div :is="type" :data="data"></div>
</template>

<script>
export default {
  props: {
    data: null
  },
  computed: {
    type () {
      const t = this.data.template || 'modular-text'

      return t.replace('/', '-')
    }
  }
}
</script>
