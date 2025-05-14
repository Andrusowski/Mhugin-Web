<script setup lang="ts">
defineProps<{
  imgSrc: string
}>()
</script>

<template>
  <div class="mockup-phone border-primary border-4 rounded-3xl lg:mt-0 puff-in-center w-min">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo w-80 max-w-full">
        <img :src="imgSrc" alt="phone mockup"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>