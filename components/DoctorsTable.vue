<script setup lang="ts">
  const { getAll } = useDoctor();
  const { data } = await getAll();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left table-fixed"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">Name</th>
          <th class="py-2">Experience</th>
          <th class="py-2">Clinic Name</th>
          <th class="py-2">Clinic Address</th>
          <th class="py-2">Clinic City</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="doctor in data.data"
          :key="doctor.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">
            <nuxt-link :to="`/doctors/${doctor.id}`" class="hover:underline">
              {{ doctor.name }}
            </nuxt-link>
          </td>
          <td class="py-2">{{ doctor.experience }}</td>
          <td class="py-2">{{ doctor.clinicName }}</td>
          <td class="py-2 truncate">{{ doctor.clinicAddress }}</td>
          <td class="py-2">{{ doctor.clinicCity }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
