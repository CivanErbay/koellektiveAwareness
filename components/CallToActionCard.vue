<script setup>
  const { img, action, to } = defineProps({
    img: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  })

  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    src: img,
    bgStyles: `background-image: url(${img})`,
  }

  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <div class="pb-4 px-4 rounded-3xl my-4 md:my-0 w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
    <div
      class="bg-cover bg-no-repeat flex pb-4 h-8 md:h-full pt-96 px-4 rounded-3xl bg-center"
      :style="bgStyles"
    >
      <NuxtLink :to="to" class="group mx-auto w-5/6 pointer-events-none -mt-9">
        <BaseButton size="xl" class="font-semibold rounded-lg w-full bg-[#ff2674]" block>
          <div class="font-semibold my-2 text-center">
            {{ action }}
          </div>
        </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped></style>
