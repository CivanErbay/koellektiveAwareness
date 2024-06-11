<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'StatsSection',
  // 	},
  // })
</script>
<template>
  <section>
    <div class="bg-[#ff2674] bg-opacity-30">
      <div class="md:pb-12 md:pt-12">
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="p-4 w-full lg:w-2/5 rounded-3xl">
              <NuxtImg
                src="/images/party_1.jpg"
                class="object-none object-right rounded-3xl"
                alt="Über Uns"
              />
            </div>
            <div class="lg:w-6/12 mx-auto p-4 w-full">
              <h6 class="mb-2 text-3xl font-bold">Über uns</h6>
    
              <p>
                Wir bieten jahrelange Erfahrung in der Beratung,
                Konzeptionierung und Umsetzung von Awareness-Konzepten für eine
                Vielfalt von Veranstaltungen. Unsere Expertise bündeln wir in
                dem 2024 gegründeten Verein Köllektive Awareness. Er hat seine
                Wurzeln in kollektiv organisierten Veranstaltungen in Köln,
                unsere Angebote reichen heute weit darüber hinaus.
              </p>
              <!-- 
              <div class="-mx-4 flex flex-wrap items-center">
                <div class="px-4 py-6 w-1/2">
                  <h2 class="mb-2">1200+</h2>
                  <p>Übergriffe auf Parties pro Jahr</p>
                </div>
                <div class="px-4 py-6 w-1/2">
                  <h2 class="mb-2">1000+</h2>
                  <p>Drogenbedingte Notfälle auf Parties pro Jahr</p>
                </div>
                <div class="px-4 py-6 w-1/2">
                  <h2 class="mb-2">20+</h2>
                  <p>Aktive Mitarbeiter</p>
                </div>
                <div class="px-4 py-6 w-1/2">
                  <h2 class="mb-2">10K+</h2>
                  <p>Parties betreut</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
