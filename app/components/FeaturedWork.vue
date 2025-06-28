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
        :to="$localePath('/projects')"
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

    <div class="flex flex-col gap-4">
      <div
        v-for="(f, index) in fProjects"
        :key="f.id"
      >
        <ProjectCard
          :project="f"
          :reverse="index % 2 === 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const { data: fProjects } = await useAsyncData('projects', async () => {
  const collection = ('projects_' + locale.value) as keyof Omit<Collections, 'blog'>
  return await queryCollection(collection).where('featured', '=', true).order('date', 'DESC').limit(3).all() as Collections['projects_en'][] | Collections['projects_th'][]
}, {
  watch: [locale],
})
</script>
