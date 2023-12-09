<script lang="ts" setup>
  import useUserStore from "~/stores/user";

  const { user } = storeToRefs(useUserStore());
</script>

<template>
  <div class="h-screen w-screen">
    <header class="bg-white shadow-header px-2 h-14">
      <div class="flex items-center h-full justify-between">
        <nuxt-link to="/" class="text-2xl font-semibold">
          <IconsLogo />
        </nuxt-link>
        <div v-if="user" class="flex items-center gap-2">
          <img
            src="~/assets/images/user.jpg"
            alt="admin"
            class="rounded-full"
            height="36"
            width="36"
          />
          <p>
            {{ user.first_name }}
            {{ user.last_name }}
          </p>
        </div>
      </div>
    </header>
    <div class="flex">
      <aside class="basis-1/5 bg-white shadow-sidebar px-2 py-4">
        <nav>
          <ul class="flex flex-col gap-2">
            <li>
              <nuxt-link
                to="/doctors"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsDoctor />
                Doctors
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="py-4 px-3 basis-4/5">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
  main {
    height: calc(100vh - 3.5rem);
  }
</style>
