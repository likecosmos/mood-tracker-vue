import { defineStore } from 'pinia'

export const useMoodStore = defineStore('mood', {
  state: () => ({
    list: JSON.parse(localStorage.getItem('moods')) || []
  }),
  actions: {
    add(mood) {
      this.list.push({
        mood,
        time: new Date().toLocaleTimeString()
      })
      localStorage.setItem('moods', JSON.stringify(this.list))
    },
    remove(index) {
      this.list.splice(index, 1)
      localStorage.setItem('moods', JSON.stringify(this.list))
    },
    clear() {
      this.list = []
      localStorage.removeItem('moods')
    }
  }
})