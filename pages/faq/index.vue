<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Projekte',
    description: 'Köllektive Awareness',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div class="container mx-auto px-4">
    <div class="-mx-4 flex flex-wrap">
      <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
        <div class="px-6 py-12 rounded-lg tertiary-card">
          <h6 class="font-bold text-primary-600 leading-tight mb-2 text-3xl py-10 text-center">
            Erste Schritte
          </h6>
          <p class="mb-6 text-lg text-left">
            Die folgenden Infos sollen euch dabei helfen, ein Awareness-Konzept
            für eure Kulturveranstaltungen zu erarbeiten. Sie sind ein Transfer
            aus dem Seminar „Awareness für Kulturarbeiter*innen“ in Köln im Juni
            2024.
          </p>
          <div class="flex flex-col items-center">
            <Accordion></Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
