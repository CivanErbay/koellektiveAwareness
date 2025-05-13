<script setup lang="ts">
  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
        :label="navlink.text"
        size="lg"
        :class="
          isCurrentRoute(navlink, currentPath)
            ? 'bg-[#ec0054] text-white !font-semibold'
            : 'white !text-black !font-semibold'
        "
      >
      </BaseButton>
    </div>
 <!--    <BaseButton class="ml-3 bg-[#ec0054]" target="_blank" size="xl"
      ><a
        href="mailto:info@koellektive-awareness.de"
        class="hover:text-primary-600 dark:text-primary-200 !font-semibold"
      >
        Kontakt
      </a>
      <template #trailing>
        <BaseIcon name="i-mdi-account-box" height="24px"></BaseIcon>
      </template>
    </BaseButton> -->
  </div>
</template>
<style scoped></style>
