<script setup>
import MyTable from '../components/Table/MyTable.vue'
import { ref } from 'vue'
import { TailwindPagination } from 'laravel-vue-pagination'

const laravelData = ref({})

const getResults = async (page = 1) => {
  const response = await fetch(`http://127.0.0.1:8000/api/company?page=${page}`)
  laravelData.value = await response.json()
}

getResults()
</script>

<template>
  <MyTable :data="laravelData.data" />
  <TailwindPagination :data="laravelData" @pagination-change-page="getResults" />
</template>
