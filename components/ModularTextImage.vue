<template>
  <section class="section section--bg-shade section--h font-scale row row--2" :class="classes">
    <div class="col" v-if="textRight">
      <img :src="src" alt="" class="img-fill">
    </div>
    <div class="col">
      <div class="content" v-html="data.html || markdownToHTML(data.content)"></div>
    </div>
    <div class="col" v-if="!textRight">
      <img :src="src" alt="" class="img-fill">
    </div>
  </section>
</template>

<script>
import { markdownToHTML } from '@/util/markdown.js'

export default {
  props: {
    data: null
  },
  computed: {
    classes () {
      return (this.data.header.body_classes || this.data.header.classes || '')
        .split(/\s+/)
        .map(s => 'section--' + s)
        .join(' ')
    },
    src () {
      return this.data.media && this.data.media[0] || ''
    },
    textRight () {
      return (this.data.header.body_classes || '').includes('text-right')
    }
  },
  methods: {
    markdownToHTML
  }
}
</script>
