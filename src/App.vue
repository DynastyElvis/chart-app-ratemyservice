<template>
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4" v-if="$route.path !== '/login' && $route.path !== '/register'">
      <div class="container">
        <router-link class="navbar-brand" to="/main">Chart App</router-link>
        <button class="btn btn-danger" @click="handleLogout">Logout</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<style>
.app-container {
  min-height: 100vh;
}
</style>