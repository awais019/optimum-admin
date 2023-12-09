<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Doctors</h1>
    <p class="text-gray text-sm">Approve new doctor requests</p>
    <div class="my-8 bg-white p-6 rounded-md shadow-block">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-sm font-bold uppercase">Doctors List</h2>
      </div>
      <DoctorsTable />
    </div>
  </div>
</template>

<style scoped></style>
