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
import P5 from "p5"
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import sketches from "@/assets/sketches"

const baseSrc = "https://github.com/Samitier/soundbox/blob/master/src/assets/sketches/"

export default defineComponent({
  setup(props, b) {
    const { title, description, source, next, prev } = useSketchInfo()
    return { title, description, source, next, prev }
  }
})

function useSketchInfo() {
  const route = useRoute()
  const idx = sketches.findIndex(s => s.sketch === route.value.meta.sketch)
  return {
    title: route.value.name,
    description: route.value.meta.description,
    source: baseSrc + route.value.meta.sketch,
    next: idx !== sketches.length - 1 && sketches[idx + 1].sketch,
    prev: idx && sketches[idx - 1].sketch
  }
}
</script>

<style lang="stylus" scoped>
.info
  fixed-fullscreen()
  align-middle()
  z-index 1
  padding 3rem
  color white
  max-width 30rem
  background #222
.title
  font-size 6rem
  line-height .85
  margin .5rem 0
.description
  font-style italic
  font-size 1.6rem
  font-weight normal
a
  color white
  display inline-block
  margin-right 2rem
  transition opacity 0.3s
  &:hover
    opacity 0.5
</style>
