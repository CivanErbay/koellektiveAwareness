<script setup lang="ts">
  const callToActions = [
    {
      img: '/images/courses.jpg',
      action: 'Schulungen',
      to: '/courses',
    },
    {
      img: '/images/consulting.jpg',
      action: 'Beratungen',
      to: '/consultations',
    },
    {
      img: '/images/psycare.jpg',
      action: 'Psycare',
      to: '/psycare',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-24">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Involved
      </h6>
      <h3 class="capitalize mt-3 text-center">Angebote</h3>
      <p class="mt-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
