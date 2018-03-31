<template>
  <header class="header">
    <div class="container">
      <h1>
        BrightKnight  
      </h1>
      <nav class="nav-main">
        <a href="/en">en</a>
        <a href="/fr">fr</a>
        <a href="/nl">nl</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/css/variables';

  .header {
    background: white;
    padding: 1rem 1rem;
    text-align: center;
    h1 {
      display: block;
      margin: 0 auto;
      font-weight: normal;
      width: 281px;
      height: 64px;
      background: url(/brightknight-logo.png);
      background-size: 100%;
      text-indent: 290px;
      overflow: hidden;
    }
  }
  .nav-main {
    position: absolute;
    top: 0;
    right: 0;
    a {
      display: inline-block;
      padding: 1em;
      font-size: 12px;
      line-height: 1em;
      text-transform: uppercase;
      color: $brand;
      opacity: 1;
      transition: opacity .3s;
    }
    a:hover {
      color: black;
      text-decoration: underline;
    }
    a:last-child {
      padding-right: 2em;
    }
  }
</style>
