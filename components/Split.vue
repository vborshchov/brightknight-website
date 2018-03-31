<template>
  <section class="section row row--2">
    <div class="col" v-if="textRight">
      <slot name="img"></slot>
    </div>
    <div class="col">
      <div class="content" v-if="text">
        {{ text }}
      </div>
      <div class="content" v-else>
        <slot name="text"></slot>
      </div>
    </div>
    <div class="col" v-if="!textRight">
      <slot name="img"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    img: null,
    text: null,
    textRight: null
  }
}  
</script>
