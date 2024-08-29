<script setup lang="ts">

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Angebote',
    description: 'Unsere Kursangebote',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <HeroSection />
    <OurMission />
    <CallToAction />
    <!-- <MiniDivider /> -->
    <!-- <PetListLite /> -->
    <StatsSection />
  </div>
</template>
<style scoped></style>
