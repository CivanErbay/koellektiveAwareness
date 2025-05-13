<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Kontakt',
  description: `Don't Miss Out – Stay in the Know, Subscribe Today!`,
  navOrder: '6',
  type: 'secondary',
  icon: 'i-mdi-home',
})

// Accordion state
const openSections = ref<Record<string, boolean>>({
  section1: false,
  section2: false,
  sub21: false,
  sub22: false,
  sub23: false,
  section3: false,
})

const toggle = (key: string) => {
  openSections.value[key] = !openSections.value[key]
}
</script>

<template>
  <div class="pb-12 text-center bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
          <div class="px-6 py-12 rounded-lg tertiary-card text-left">
            <h2 class="font-bold leading-tight mb-2 text-3xl text-center">Kontakt</h2>

            <p class="mb-8 text-xl mt-8 text-center">
              Wenn ihr Interesse an einer Zusammenarbeit habt, freuen wir uns über eine Email an:
              <br />
              <a class="underline font-bold"
                href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a>
            </p>

            <p class="mb-8 text-xl mt-8 text-center">
              Damit wir eure Anfrage schnellstmöglich bearbeiten können, sind folgende Informationen für uns hilfreich:
            </p>

            <!-- Section 1 -->
            <div class="mb-6">
              <button class="w-full text-left font-semibold text-xl cursor-pointer flex items-center justify-between"
                @click="toggle('section1')">
                <span>1. Wer seid ihr?</span>
                <span :class="[
                  'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                  openSections.section1 ? 'rotate-180' : ''
                ]" />
              </button>
              <transition name="accordion">
                <div v-show="openSections.section1" class="mt-2 p-4 rounded-lg bg-white/10 space-y-2 overflow-hidden">
                  <p class="text-xl">Veranstaltende? Ein Veranstaltungsort?</p>
                  <p class="text-xl">Ein Verein? Ein Kollektiv? Eine NGO? Ein Unternehmen?</p>
                  <p class="text-xl">Für uns ist es wichtig zu erfahren, ob eure Veranstaltung(en), auf denen ihr
                    Awareness etablieren wollt, kommerziell oder auf ehrenamtlicher Basis geplant sind.</p>
                  <p class="text-xl">Hilfreich ist es auch, hier bereits von euch zu erfahren, ob ihr auch in Zukunft
                    unsere Ansprechpersonen für euren Awareness-Prozess seid und bleibt oder mit welchen Menschen wir in
                    Zukunft zusammenarbeiten.</p>
                </div>
              </transition>
            </div>

            <!-- Section 2 -->
            <div class="mb-6">
              <button class="w-full text-left font-semibold text-xl cursor-pointer flex items-center justify-between"
                @click="toggle('section2')">
                <span>2. Wo steht ihr in eurem Awareness-Prozess und was genau wird angefragt?</span>
                <span :class="[
                  'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                  openSections.section2 ? 'rotate-180' : ''
                ]" />
              </button>
              <transition name="accordion">
                <div v-show="openSections.section2" class="mt-2 p-4 rounded-lg bg-white/10 space-y-4">

                  <!-- Sub 2.1 -->
                  <div>
                    <button
                      class="w-full text-left font-medium text-xl cursor-pointer flex items-center justify-between"
                      @click="toggle('sub21')">
                      <span>2.1 Ihr steht ganz am Anfang?</span>
                      <span :class="[
                        'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                        openSections.sub21 ? 'rotate-180' : ''
                      ]" />
                    </button>
                    <transition name="accordion">
                      <div v-show="openSections.sub21" class="mt-2 p-4 rounded bg-white/5 space-y-2">
                        <p class="text-xl">Toll, dass ihr euch auf den Weg macht.</p>
                        <p class="text-xl">Gerne können wir euch bei der Entwicklung eines Awareness-Konzepts und/oder
                          eines Verhaltenskodex (Code of Conduct) beraten und begleiten.</p>
                        <p class="text-xl">Oder habt ihr bereits ein Awareness-Konzept und/oder einen Code of Conduct
                          und wünscht euch nun eine Revision (Überprüfung und ggf. Überarbeitung) dessen?</p>
                      </div>
                    </transition>
                  </div>

                  <!-- Sub 2.2 -->
                  <div>
                    <button
                      class="w-full text-left font-medium text-xl cursor-pointer flex items-center justify-between"
                      @click="toggle('sub22')">
                      <span>2.2 Ihr seid die ersten wichtigen Schritte bereits gegangen?</span>
                      <span :class="[
                        'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                        openSections.sub22 ? 'rotate-180' : ''
                      ]" />
                    </button>
                    <transition name="accordion">
                      <div v-show="openSections.sub22" class="mt-2 p-4 rounded bg-white/5 space-y-2">
                        <p class="text-xl">Wenn das Awareness-Konzept sowie der Code of Conduct (als Arbeitsgrundlagen
                          für Awareness-Teams) stehen, ist der Weg für die weiteren Schritte bereitet:</p>
                        <p class="text-xl">Ihr möchtet nun eine Schulung für die konkrete Anwendung von Awareness, also
                          für die Unterstützungsarbeit?</p>
                        <p class="text-xl">Seid ihr auf der Suche nach Menschen, die Teil eures Awareness-Teams werden
                          sollen? Oder euch bei einer oder mehrerer Veranstaltungen im Awareness-Team unterstützen?</p>
                      </div>
                    </transition>
                  </div>

                  <!-- Sub 2.3 -->
                  <div>
                    <button
                      class="w-full text-left font-medium text-xl cursor-pointer flex items-center justify-between"
                      @click="toggle('sub23')">
                      <span>2.3 Ihr habt bereits Awareness-Teams auf euren Veranstaltungen etabliert?</span>
                      <span :class="[
                        'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                        openSections.sub23 ? 'rotate-180' : ''
                      ]" />
                    </button>
                    <transition name="accordion">
                      <div v-show="openSections.sub23" class="mt-2 p-4 rounded bg-white/5 space-y-2">
                        <p class="text-xl">Super! Hier ist es nun sinnvoll, eine Nachbesprechung zu veranlassen. Dies
                          kann mit den Veranstaltungsorten und/oder dem Awareness-Team geschehen.</p>
                      </div>
                    </transition>
                  </div>

                </div>
              </transition>
            </div>

            <!-- Section 3 -->
            <div class="mb-6">
              <button class="w-full text-left font-semibold text-xl cursor-pointer flex items-center justify-between"
                @click="toggle('section3')">
                <span>3. Welche Ressourcen und Möglichkeiten stehen euch zur Verfügung?</span>
                <span :class="[
                  'i-lucide-chevron-down text-2xl transform transition-transform duration-300',
                  openSections.section3 ? 'rotate-180' : ''
                ]" />
              </button>
              <transition name="accordion">
                <div v-show="openSections.section3" class="mt-2 p-4 rounded-lg bg-white/10 space-y-2">
                  <p class="text-xl">Habt ihr eine klare Vorstellung davon, wie viele Stunden ihr investieren könnt, um
                    euren Awareness-Prozess voranzutreiben?</p>
                  <p class="text-xl">Habt ihr bereits Finanzierungsgrundlagen, die den Bedarf eurer Anfrage abdecken?
                  </p>
                  <p class="text-xl">Hier reicht es auch erstmal aus, eine grobe Einschätzung zu erhalten, damit wir
                    eure Anfrage und den damit verbundenen Aufwand einordnen und mit unseren Möglichkeiten abgleichen
                    können.</p>
                </div>
              </transition>
            </div>

            <!-- Closing -->
            <p class="mt-10 text-xl text-center">
              Natürlich könnt ihr uns auch in Hinblick auf andere Themen und Anfragen kontaktieren, wir freuen uns auf
              eure Nachricht.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>
