<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  setup(props, b) {
    useSeoMetas()
  }
})

function useSeoMetas() {
  const route = useRoute()

  watch(
    () => route.value,
    route => {
      document.title = route.name + " - My vue App"
      addMetaTag("description", route.meta.description)
      addMetaTag("robots", route.meta.robots)
    }
  )

  function addMetaTag(name: string, value: string) {
    document.querySelector(`meta[name=${name}]`)?.remove()
    if (!value) return
    const meta = document.createElement("meta")
    meta.name = name
    meta.content = value
    document.getElementsByTagName("head")[0].appendChild(meta)
  }
}
</script>

<style lang="stylus">
html, body
  height 100%
  width 100%
  margin 0
  overflow hidden
*
  box-sizing border-box
</style>
