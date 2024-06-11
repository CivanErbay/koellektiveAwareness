<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    src: heroImageUrl,
    bgStyles: `background-image: url('/images/party_3.jpg');`,
  }

  // console.log(heroImage)
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <section class="container mx-auto pb-12 px-4 my-8">
    <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0"
      :style="bgStyles"
    >
      <!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0 bg-design-image lg:bg-design-image-large"
    > -->
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div
              class="p-8 w-full md:w-8/12 xl:w-6/12 bg-[#131313] bg-opacity-50"
            >
              <h4
                class="font-bold font-serif mb-1 text-[#ec0054] dark:text-primary-200 uppercase"
              >
                Safer Space
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Köllektive Awareness
              </h1>
              <p class="font-thin text-gray-300 max-w-2xl text-lg">
                Wir setzen uns ein für ein achtsames und rücksichtsvolles
                Miteinander auf Veranstaltungen, damit sich alle Personen
                sicherer und freier entfalten können. Dafür beraten wir
                Veranstalter*innen und Veranstaltungsorte, wie sie Awareness im
                Kontext ihrer Events stärken können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
