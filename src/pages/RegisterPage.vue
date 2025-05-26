<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="form.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <p class="mt-3">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: ''
})

const handleRegister = () => {
  // Mock registration for now
  console.log('Registering:', form.value)
  router.push('/login')
}
</script>

<style scoped>
.register-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>