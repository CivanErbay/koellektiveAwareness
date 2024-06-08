<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    src: heroImageUrl,
    bgStyles: `background-image: url(${heroImageUrl}); filter: hue-rotate(180deg);`,
  }

  // console.log(heroImage)
  const bgStyles = heroImageOptimized.bgStyles
  console.log('bgstyles', bgStyles)
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
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
            <div class="p-8 w-full md:w-8/12 xl:w-6/12 bg-[#131313] bg-opacity-50">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                Awareness
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Köllektive Awareness
              </h1>
              <p class="font-thin text-gray-300 max-w-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
              <!-- <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Adopt Now</div>
                <BaseIcon name="i-noto-dog-face" height="28px"></BaseIcon>
              </BaseButton> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
