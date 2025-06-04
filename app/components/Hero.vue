<template>
  <div class="hidden dark:block top-[12vh] left-[5vw] -z-10 absolute blur-[200px] border-[180px] border-t-primary-500/50 border-r-blue-400/50 border-b-primary-800/50 border-l-emerald-500/70 rounded-full" />
  <section
    class="flex lg:flex-row flex-col-reverse justify-between items-center gap-5 pt-4"
    :ui="{ padding: 'px-0 lg:px-0', base: 'mx-auto' }"
  >
    <div
      class="flex flex-col justify-center items-center lg:items-start dark:prose-invert prose-p:mt-2 prose-h1:mb-0 max-w-none prose prose-sm sm:prose-base grow basis-full"
    >
      <UBadge
        :label="$t('home.hero.badgeContent')"
        icon="ph:suitcase-duotone"
        variant="subtle"
        class="mb-1 md:mb-3 font-bold"
      />
      <h1 class="font-black text-primary text-3xl lg:text-5xl">
        {{ $t('home.hero.myName') }}
      </h1>
      <p class="text-muted lg:text-left text-center text-balance">
        {{ $t('home.hero.intro') }}
      </p>
      <div class="flex flex-row justify-center lg:justify-start items-center gap-2 w-full">
        <UTooltip text="Undergoing...">
          <UButton
            icon="lucide:external-link"
            color="primary"
            size="lg"
            disabled
          >
            Open CV - Thai
          </UButton>
        </UTooltip>
      </div>
    </div>
    <div class="basis-1/3">
      <NuxtImg
        src="https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp"
        class="shadow-md dark:shadow-none rounded-lg size-52 md:size-40 lg:size-full object-cover aspect-square"
        width="100%"
        height="100%"
        alt="Picture of Me, Konkamon Sion"
        aria-label="Picture of Me, Konkamon Sion"
      />
    </div>
  </section>
</template>
