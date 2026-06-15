<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index">
      {{ item.mood }} {{ item.time }}
      <button @click="$emit('delete', index)">✕</button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: Array
})
</script>

<style scoped>
.list {
  padding-left: 0;
  list-style: none;
}

.list li {
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f7fa;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: transform 0.2s ease;
}

.list li:hover {
  transform: scale(1.03);
}

.home.dark .list li {
  background: #2c2c2c;
}
</style>