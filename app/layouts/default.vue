<template>
  <div>
    <!-- Dead simple Top-Page Alert - will be removed in a few commits -->
    <UAlert
      description="You are visiting my new portfolio design! This is a work in progress and most of the content is not yet available."
      class="py-1 rounded-none text-center"
      variant="solid"
      color="primary"
      :ui="{ root: 'z-20' }"
    />
    <MainNavbar />
    <UContainer>
      <main class="my-8 md:p-0">
        <slot />
      </main>
      <MainFooter />
    </UContainer>
  </div>
</template>
