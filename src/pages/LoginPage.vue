<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="form.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <p class="mt-3">
        Don't have an account? <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  // Mock login for now
  console.log('Logging in:', form.value)
  localStorage.setItem('isAuthenticated', 'true')
  router.push('/main')
}
</script>

<style scoped>
.login-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>