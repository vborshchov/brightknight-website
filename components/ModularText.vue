<template>
  <section class="section font-scale" :class="classes">
    <div class="col">
      <div class="content" v-html="html"></div>
    </div>
  </section>
</template>

<script>
import { markdownToHTML, youtubePlugin } from '@/util/markdown.js'

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
    html () {
      const input = this.data.html || markdownToHTML(this.data.content)
      return youtubePlugin(input)
    }
  },
  methods: {
    markdownToHTML
  }
}
</script>
