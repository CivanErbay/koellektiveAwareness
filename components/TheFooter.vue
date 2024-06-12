<script setup lang="ts">
  //...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-4 md:pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="md:-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center">
              <NuxtImg
                src="/images/logo.jpg"
                class="object-none object-right rounded-3xl"
                sizes="150px"
                alt="Köllektive Awareness"
              />
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left font-semibold">
            Folgt uns auf Social Media!
          </p>
          <p class="mt-2 text-center w-full lg:text-left">
            Bleibt immer auf dem Laufenden und verpasst keine Neuigkeiten,
            Angebote und spannende Inhalte mehr!
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                href="https://www.instagram.com/koellektive.awareness/"
                aria-label="instagram"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-instagram-icon"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink>
              <!--  <NuxtLink
                href="https://twitter.com/vuedesigner"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink>
              <NuxtLink
                href="https://discord.gg/BYp45Nnu5T"
                aria-label="discord"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-discord-icon"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink>
              <NuxtLink
                href="https://www.youtube.com/@vuedesigner"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink> -->
            </div>
          </div>
          <div class="my-6 text-left">
            <!-- <NuxtLink to="/">+123 456 789</NuxtLink> -->
            <br />
            <NuxtLink to="/">info@koellektive-awareness.de</NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-center"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            General
          </h2>
          <ul class="text-center lg:ml-4 lg:mt-2 lg:text-left">
            <!-- <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >FAQ</NuxtLink
              >
            </li> -->
            <!-- <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >Neuigkeiten</NuxtLink
              >
            </li> -->
            <!-- <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >Bewerben</NuxtLink
              >
            </li> -->
            <li class="mb-4">
              <a
                href="mailto:info@koellektive-awareness.de"
                class="hover:text-primary-600 dark:text-primary-200"
              >
                Kontakt
              </a>
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/impressum"
                class="hover:text-primary-600 dark:text-primary-200"
                >Impressum</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-center"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:ml-6 lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/projects"
                class="hover:text-primary-600 dark:text-primary-200"
                >Projekte</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/donate"
                class="hover:text-primary-600 dark:text-primary-200"
                >Spenden</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/about"
                class="hover:text-primary-600 dark:text-primary-200"
                >Über uns</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/volunteer"
                class="hover:text-primary-600 dark:text-primary-200"
                >Mitmachen</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2024. All Rights Reserved - Köllektive Awareness
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
