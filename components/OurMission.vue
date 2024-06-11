<template>
  <div class="bg-[#ff2674] bg-opacity-30 dark:[#ff2674]">
    <div class="md:pb-12 md:pt-12">
      <div class="container mx-auto px-4 py-12 relative">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="p-4 w-full lg:w-6/12">
            <NuxtImg
              src="/images/stuhl_3.jpg"
              class="object-contain -hue-rotate-15 rounded-3xl"
              alt="Unsere Mission"
            />
          </div>
          <div class="mx-auto p-4 w-full lg:w-5/12">
            <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
              Projekt
            </h6>
            <h3 class="mb-2">Awareness-Schulungen für Kulturschaffende</h3>
            <p class="mb-6 text-lg">
              Veranstaltende und Kulturarbeiter*innen aus der freien Kulturszene
              Kölns Zugang bekommen das relevante Know-How und Handwerkszeug, um
              Awareness für ihre Events und Arbeitsprozesse voranzutreiben.
            </p>
            <BaseButton class="!text-black bg-white" size="xl" to="/projects">
              Mehr erfahren
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
