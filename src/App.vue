<template>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Kollektif';
  src: URL('/fonts/kollektif/kollektif-bold.ttf') format('truetype');
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Kollektif';
}

body {
  font-family: 'Libre Baskerville', serif;
}

@media (max-width: 600px) {
  html,
  body {
    font-size: 13px;
  }
}
</style>
