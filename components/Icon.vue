<template>
  <span class="icon" v-html="icons[name] || icons['auto-fix']" />
</template>

<script>
export default {
  props: {
    name: null
  },
  data () {
    return {
      icons: {
        'auto-fix': `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z" />
</svg>`,
        autorenew: `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" />
</svg>`,
'flash-auto': `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z" />
</svg>`,
highway: `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M10,2L8,8H11V2H10M13,2V8H16L14,2H13M2,9V10H4V11H6V10H18L18.06,11H20V10H22V9H2M7,11L3.34,22H11V11H7M13,11V22H20.66L17,11H13Z" />
</svg>`,
play: `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
</svg>`,
'clock-fast': `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z" />
</svg>`,
'quality-high': `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M14.5,13.5H16.5V10.5H14.5M18,14A1,1 0 0,1 17,15H16.25V16.5H14.75V15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />
</svg>`,
account: `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
</svg>`,
send: `<svg viewBox="0 0 24 24">
    <path class="fill-fg" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
</svg>`
      }
    }
  }
}
</script>

<style lang="scss">
.icon {
  display: inline-block;
  vertical-align: top;
  width: 1.5em;
  height: 1.5em;
}
.icon > svg {
  display: block;
}
.icon--18 {
  flex-basis: 34px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 18px;
  height: 18px;
  margin-bottom: -10px;
}
.icon--18 > svg {
}
.icon--button {
  display: inline;
  padding: 0 .5rem;
  margin: -.5rem 0 -1rem .5em;
}
.icon--button > svg {
  width: 18px;
  height: 20px;
}
</style>
