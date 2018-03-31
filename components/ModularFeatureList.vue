<template>
  <section id="how" class="section section--white" style="padding: 2em 0;">
    <div class="col">
      <div class="text-center-sm">
          
        <h2>
          {{ data.header.title }}
        </h2>

        </div>
    </div>
    <div class="row row--3" style="overflow: auto;">
      <div class="col" v-for="feature in data.header.features">
        <div class="content">
          <img v-if="feature.image" :src="feature.image"></img>
          <icon v-else :name="feature.icon || 'item'" />
          <h3 class="feature__header">
            {{ feature.header }}
          </h3>
          <p class="font-scale">
            {{ markdownToHTML(feature.text) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { markdownToHTML } from '@/util/markdown.js'

export default {
  props: {
    data: null
  },
  methods: {
    markdownToHTML
  }
}
</script>

<style>
.feature__header {
  font-weight: normal;
  opacity: .5;
  color: inherit;
}
</style>