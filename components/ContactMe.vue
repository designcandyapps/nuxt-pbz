<template>
  <div>
    <!-- <UModal>
      <h2 class="mb-6 text-lg font-bold text-gray-500 dark:text-gray-400">
        Contact Me
      </h2>
      <div class="relative mb-4">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none drop-shadow transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
      </div>
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            class="focus:shadow-outline p-1 focus:outline-none"
          >
            <Icon name="mdi:email" />
          </button>
        </span>
        <input
          type="search"
          name="q"
          class="unded-md rounded border py-2 pl-10 text-sm shadow focus:outline-none"
          placeholder="Search..."
          autocomplete="off"
        >
      </div>
      <div class="relative flex w-2/3 items-center justify-end">
        <input
          placeholder="Pesquisar"
          class="w-full rounded border p-1"
        >
        <Icon
          name="mdi:email"
          class="absolute mr-2 w-10"
        />
      </div>
    </UModal> -->
    <UButton
      label="Open First Modal"
      @click="first = true"
    />
    <UModal
      v-model="first"
      :ui="{ footer: 'justify-end' }"
    >
      <UCard>
        <!-- <UButton
          label="Open"
        /> -->
        <p>test</p>
        <template #footer>
          <UButton
            label="Close"
            variant="outline"
            @click="first = false"
          />
          <UModal
            v-model="second"
            :ui="{ footer: 'justify-end' }"
          >
            <UButton
              label="Close"
              variant="outline"
              @click="second = false"
            />
            <template #footer>
              <UButton
                label="Close"
                variant="outline"
                @click="second = false"
              />
            </template>
          </UModal>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const first = ref(false)
const second = ref(false)
</script>
