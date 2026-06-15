<template>
  <div class="home" :class="{dark: darkMode}">
    <h1>🌈 心情记录器</h1>

    <MoodPicker @pick="pickMood" />

    <p>当前选择：{{ currentMood }}</p>

    <button @click="saveMood">保存心情</button>
    <button @click="clearAll">清空所有</button>
    <button @click="toggleDark">{{ darkMode ? '☀️ 浅色模式' : '🌙 暗黑模式'}}</button>
    <button @click="fetchTips">获取一句话</button>
    <div class="stats">
      <h3>📊 心情统计</h3>
      <span>😊 × {{ stats['😊'] || 0 }}</span>
      <span>😐 × {{ stats['😐'] || 0 }}</span>
      <span>😢 × {{ stats['😢'] || 0 }}</span>
    </div>
    <MoodList :list="moodList" @delete="deleteMood" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import MoodPicker from '../components/MoodPicker.vue'
import MoodList from '../components/MoodList.vue'
import { useMoodStore } from '../stores/moods'

const currentMood = ref('')
const moodList = ref([])

const darkMode = ref(false)

const stats = computed(() => {
  return moodList.value.reduce((acc, cur) => {
    acc[cur.mood] = (acc[cur.mood] || 0) + 1
    return acc
  }, {})
})

const moodStore = useMoodStore()

async function fetchTips(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  alert(res.data.title)
}

function pickMood(mood) {
  currentMood.value = mood
}

function saveMood() {
  if (!currentMood.value) return

  moodList.value.push({
    mood: currentMood.value,
    time: new Date().toLocaleTimeString()
  })

  localStorage.setItem('moods', JSON.stringify(moodList.value))
  currentMood.value = ''
}

function deleteMood(index) {
  moodList.value.splice(index, 1)
  localStorage.setItem('moods', JSON.stringify(moodList.value))
}

function clearAll() {
  if (confirm('确定清空所有心情吗？')) {
    moodList.value = []
    localStorage.removeItem('moods')
  }
}

function toggleDark() {
  darkMode.value = !darkMode.value
}

onMounted(() => {
  moodList.value = JSON.parse(localStorage.getItem('moods')) || []
})
</script>

<style scoped>
.home {
  padding: 20px;
}

button {
  margin: 6px;
}
</style>