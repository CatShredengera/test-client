<script setup>
import MyTable from '../components/Table/MyTable.vue'
import { ref } from 'vue'

const laravelData = ref({})

const getResults = async (page = 1) => {
  const response = await fetch(`http://127.0.0.1:8000/api/company?page=${page}`)
  laravelData.value = await response.json()
}

getResults()
</script>

<template>
  <main>
    <MyTable :data="laravelData.data" />
  </main>
</template>
