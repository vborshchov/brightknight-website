<template>
  <section class="content-container">
    <block v-for="block in page.children" :data="block" :key="block.id" />
  </section>
</template>

<script>
import { asyncDataPage } from '@/util/content'

export default {
  data: () => ({ page: {} }),
  asyncData: asyncDataPage,
  head () {
    return {
      title: this.page.header && this.page.header.title || 'BrightKnight'
    }
  }
}
</script>
