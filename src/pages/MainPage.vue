<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between mb-4">
      <h2>Data Dashboard</h2>
      <button @click="handleLogout" class="btn btn-danger">Logout</button>
    </div>
    
    <div class="row mb-4">
      <div class="col">
        <button @click="showAddModal" class="btn btn-success">Add Data</button>
      </div>
    </div>
    
    <div class="row mb-4">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataItems" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.label }}</td>
              <td>{{ item.value }}</td>
              <td>
                <button @click="editItem(item)" class="btn btn-sm btn-primary me-2">Edit</button>
                <button @click="deleteItem(item.id)" class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Add/Edit Modal -->
    <div class="modal fade" id="dataModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Edit Data' : 'Add Data' }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label class="form-label">Label</label>
                <input type="text" class="form-control" v-model="formData.label" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Value</label>
                <input type="number" class="form-control" v-model="formData.value" required>
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = useRouter()

// Mock data - we'll replace this with Pinia later
const dataItems = ref([
  { id: 1, label: 'January', value: 100 },
  { id: 2, label: 'February', value: 200 },
  { id: 3, label: 'March', value: 150 }
])

const formData = ref({ label: '', value: 0 })
const isEditing = ref(false)
const currentId = ref(null)
let modal = null

onMounted(() => {
  modal = new Modal(document.getElementById('dataModal'))
})

const showAddModal = () => {
  isEditing.value = false
  formData.value = { label: '', value: 0 }
  modal.show()
}

const editItem = (item) => {
  isEditing.value = true
  currentId.value = item.id
  formData.value = { ...item }
  modal.show()
}

const handleSubmit = () => {
  if (isEditing.value) {
    // Update existing item
    const index = dataItems.value.findIndex(item => item.id === currentId.value)
    if (index !== -1) {
      dataItems.value[index] = { ...formData.value, id: currentId.value }
    }
  } else {
    // Add new item
    const newId = Math.max(...dataItems.value.map(item => item.id), 0) + 1
    dataItems.value.push({ ...formData.value, id: newId })
  }
  modal.hide()
}

const deleteItem = (id) => {
  dataItems.value = dataItems.value.filter(item => item.id !== id)
}

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>