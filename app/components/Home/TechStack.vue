<template>
  <section class="dark:prose-invert max-w-none prose prose-sm sm:prose-base">
    <h2 class="mb-0 sm:mb-0 font-bold text-lg">
      Tech Stack
    </h2>
    <p class="!m-0 text-muted">
      {{ $t('home.techStacks.subtitle') }}
    </p>
    <div class="not-prose">
      <USeparator
        color="primary"
        size="md"
        class="mb-4"
      />
      <Technology />
    </div>
  </section>
</template>
