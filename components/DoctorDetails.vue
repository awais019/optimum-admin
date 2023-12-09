<script lang="ts" setup>
  const props = defineProps<{
    id: string;
  }>();

  const { data } = await useDoctor().get(props.id);

  const status = ref("pending");

  async function verifyDoctor() {
    const { data } = await useDoctor().verifyDoctor(props.id, status.value);
    if (data) {
      alert("Doctor verified successfully");
    }
  }

  const { documentURL } = useRuntimeConfig().public;
</script>

<template>
  <div v-if="data">
    <div class="flex flex-wrap gap-x-60 gap-y-8">
      <div>
        <h3 class="font-bold">Name</h3>
        <p>{{ data.data.name }}</p>
      </div>
      <div>
        <h3 class="font-bold">Email</h3>
        <p>{{ data.data.email }}</p>
      </div>
      <div>
        <h3 class="font-bold">Clinic Name</h3>
        <p>{{ data.data.clinicName }}</p>
      </div>
      <div>
        <h3 class="font-bold">Clinic Address</h3>
        <p>{{ data.data.clinicAddress }}</p>
      </div>
      <div>
        <h3 class="font-bold">Clinic City</h3>
        <p>{{ data.data.clinicCity }}</p>
      </div>
      <div>
        <h3 class="font-bold">State</h3>
        <p>{{ data.data.state }}</p>
      </div>
      <div>
        <h3 class="font-bold">Gender</h3>
        <p>{{ data.data.gender }}</p>
      </div>
      <div>
        <h3 class="font-bold">Email</h3>
        <p>{{ data.data.email }}</p>
      </div>
      <div>
        <h3 class="font-bold">Verification Proof</h3>
        <a
          :href="`${documentURL}/${data.data.documentName}`"
          target="_blank"
          class="underline"
        >
          View Document
        </a>
      </div>
      <div>
        <h3 class="font-bold">Verification</h3>
        <select
          name="verfication"
          id="verification"
          v-model="status"
          class="w-60"
        >
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
    <div
      class="flex justify-end mt-8 bg-blue_ribbon max-w-fit text-white px-4 py-2 rounded"
    >
      <button @click.prevent="verifyDoctor">Save</button>
    </div>
  </div>
</template>

<style scoped></style>
