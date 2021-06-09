<template>
  <article class="info">
    <h1 class="title">{{ title }}.</h1>
    <p class="description">{{ description }}.</p>
    <nav>
      <a target="_blank" :href="source">Source</a>
      <a v-if="next" :href="next">Next</a>
      <a v-if="prev" :href="prev">Previous</a>
    </nav>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { sketches } from '../../../sketches'

const baseSrc =
  'https://github.com/Samitier/p5-sketches/blob/master/src/assets/sketches/'

export default defineComponent({
  setup() {
    const { title, description, source, next, prev } = useSketchInfo()
    return { title, description, source, next, prev }
  }
})

function useSketchInfo() {
  const route = useRoute()
  const idx = sketches.findIndex((s) => s.sketch === route.meta.sketch)
  return {
    title: route.name,
    description: route.meta.description,
    source: baseSrc + route.meta.sketch,
    next: idx !== sketches.length - 1 && sketches[idx + 1].sketch,
    prev: idx && sketches[idx - 1].sketch
  }
}
</script>

<style scoped>
.info {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding: 3rem;
  color: white;
  max-width: 30rem;
  background: #222;
}
.title {
  font-size: 6rem;
  line-height: 0.85;
  margin: 0.5rem 0;
}
.description {
  font-style: italic;
  font-size: 1.6rem;
  font-weight: normal;
}
a {
  color: white;
  display: inline-block;
  margin-right: 2rem;
  transition: opacity 0.3s;
}
a:hover {
  opacity: 0.5;
}
</style>
