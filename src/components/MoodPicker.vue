<template>
  <div class="picker">
    <button
      v-for="m in moods"
      :key="m"
      @click="$emit('pick', m)"
    >
      {{ m }}
    </button>
  </div>
</template>

<script setup>
const moods = ['😊', '😐', '😢']
</script>

<style scoped>
.picker {
  margin: 12px 0;
}
</style>