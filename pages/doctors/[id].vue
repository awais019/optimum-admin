<script lang="ts" setup>
  const route = useRoute();

  const { id } = route.params;
</script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Doctor</h1>
    <p class="text-gray text-sm">Check doctor details</p>
    <div class="my-8 bg-white p-6 rounded-md shadow-block">
      <DoctorDetails :id="id" />
    </div>
  </div>
</template>

<style scoped></style>
