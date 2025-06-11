<template>
  <div>
    <section class="flex justify-between items-center dark:prose-invert max-w-none prose prose-sm sm:prose-base">
      <div>
        <h2 class="!m-0 font-bold text-lg">
          Featured Works
        </h2>
        <p class="!m-0 text-muted">
          {{ $t('home.featuredWork.subtitle') }}
        </p>
      </div>
      <UButton
        color="primary"
        variant="ghost"
        to="/projects"
        trailing-icon="lucide:arrow-right"
        label="All Projects"
        class="not-prose"
      />
    </section>
    <USeparator
      color="primary"
      size="md"
      class="mb-6"
    />

    <div class="flex flex-col gap-5 rounded-lg">
      <div
        v-for="(f, index) in fProjects"
        :key="f.id"
      >
        <ProjectListItem
          :project="f"
          :reverse="index % 2 === 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const { data: fProjects } = await useAsyncData('featuredWork', () => {
  return queryCollection('projects')
    .where('stem', 'LIKE', '%.' + locale.value)
    .where('featured', '=', true)
    .limit(3).all()
}, {
  watch: [locale],
})
</script>
