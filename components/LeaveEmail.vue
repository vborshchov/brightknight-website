<template>
  <span class="font-normal leave-email">
    <input type="text" class="leave-email__input" placeholder="email address">
    <button class="leave-email__button">
      <icon name="send" />
    </button>
    <span class="leave-email__load"></span>
  </span>
</template>

<style lang="scss">
.leave-email {
  margin-top: .3em;
  display: block;
  position: relative;
}
.leave-email__input {
  background: rgba(0, 0, 0, .06);
  height: 3em;
  line-height: 2em;
  padding: .5em;
  font-size: 1em;
  color: black;
  border-width: 0;
  border-bottom: 2px solid rgba(0, 0, 0, .2);
  display: block;
  width: 100%;
  outline: none;
  &::placeholder {
    color: black;
    opacity: .7;
  }
}
.leave-email__button {
  position: absolute;
  right: 0;
  top: 0;
  height: 2.8em;
  font-size: 1em;
  background: none;
  border: none;
  outline: none;
  transition: transform .2s;
  &:focus, &:hover  {
    + .leave-email__load {
      width: 100%;
    }
  }
}
.leave-email__load {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #0E3437;
  transition: width .2s;
}

.section--dark {
  .leave-email__input {
    background: rgba(255, 255, 255, .1);
    border-bottom: 2px solid rgba(255, 255, 255, .5);
    color: white;
    &::placeholder {
      color: white;
      opacity: .7;
    }
  }
  .leave-email__load {
    background: white;
  }
}
</style>