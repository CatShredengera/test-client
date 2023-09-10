<script>
export default {
  components: {},
  props: {
    data: { type: Object, required: true },
    name: { type: String, required: true }
  }
}
</script>

<template>
  <div class="mb-4">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
      {{ name }}
    </h1>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Company</th>
            <th scope="col" class="px-6 py-3">Contact</th>
            <th scope="col" class="px-6 py-3">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="company in data" :key="company.id">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ company.company }}
            </th>
            <td class="px-6 py-4">{{ company.contacts }}</td>
            <td class="px-6 py-4">{{ company.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
