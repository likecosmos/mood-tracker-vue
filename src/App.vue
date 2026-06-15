<template>
  <div class="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 6px;
  color: #409eff;
  text-decoration: none;
}

.home.dark {
  background-color: #1e1e1e;
  color: #eee;
  min-height: 100vh;
}

.home.dark button {
  background: #333;
  color: #fff;
  border: 1px solid #555;
}
</style>