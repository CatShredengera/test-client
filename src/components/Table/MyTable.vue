<script>
export default {
  components: {},
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<template>
  <h1>Company Table</h1>

  <table id="customers">
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr v-for="company in data" :key="company.id">
      <td>{{ company.company }}</td>
      <td>{{ company.contacts }}</td>
      <td>{{ company.country }}</td>
    </tr>
  </table>
</template>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
