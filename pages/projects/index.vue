<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Projekte',
    description: 'Köllektive Awareness',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12 flex flex-col">
        <!-- <h3 class="capitalize">Projekte</h3> -->

        <NuxtImg
          src="/images/stuhl_1.jpg"
          class="object-cover h-[40vh] -hue-rotate-15 rounded-3xl"
          alt="Unsere Mission"
        />

        <div class="mx-auto p-4 w-full lg:w-3/4">
          <h6
            class="mb-2 text-primary-600 dark:text-primary-200 uppercase my-7"
          >
            Projekt
          </h6>
          <h3 class="my-12 mt-6">Awareness-Schulungen für Kulturschaffende</h3>
          <p class="mb-6 text-lg text-left">
            Liebe Kulturarbeiter*innen, Künstler*innen und Interessierte, <br />
            wir möchten Sie/euch hiermit herzlich zu unserem Seminar „Awareness
            für Kulturarbeiter*innen“ einladen, gefördert von der Stadt Köln im
            Programm „Kultur – Diversity“. Die Teilnahme ist kostenfrei. <br />
            <br />
            Das Seminar ist eine gemeinsame Initiative von der Initiative
            Köllektive Awareness, die langjährige Erfahrung in der Begleitung
            von Awareness-Prozessen auf verschiedenen Veranstaltungen hat,
            KLUBKOMM – Verband Kölner Clubs und Veranstalter*innen e. V. und
            ArtAsyl e. V. / Studio Audience. <br />
            <br />
            <b>Zeiten:</b> <br />
            Sa., 29.06.2024 10 – 16 Uhr <br />
            So., 30.06.2024 10 – 16 Uhr <br />
            Ort: Seekabelstraße 4, 50733 Köln <br /><br />
            <b> Anmeldung:</b> <br />
            per E-Mail an info@koellektive-awareness.de bis zum 20.6.2024 <br />
            <br />
            Das Seminar zielt darauf ab, Veranstaltende und Kulturarbeiter*innen
            aus der freien Kulturszene Kölns Zugang zu dem nötigen Know-How und
            Handwerkszeug zu geben, um Awareness für ihre Events und
            Arbeitsprozesse voranzutreiben. Der Fokus liegt vor allem auf einer
            Vermittlung der Awareness-Grundprinzipien und des besonderen
            Ansatzes von Unterstützungsarbeit mit Personen, die von
            Grenzüberschreitungen, Diskriminierung oder Gewalt betroffen sind.
            Es wird Raum geben, um miteinander in Austausch zu kommen und
            gemeinsam an Konzepten zu arbeiten, welche die spezifischen
            Bedürfnisse der Veranstaltungen und Veranstaltungsorte
            berücksichtigen. <br />
            <br />
            <b>Barriereinformationen:</b> <br />
            Genderneutrale Toiletten sind vorhanden.<br />
            Assistenzhunde sind zugelassen. <br />
            Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich, jedoch
            nicht vollständig barrierefrei (Aufzug vorhanden, breite Türen,
            große Toiletten, keine Schalter für Türantrieb). Personen aus dem
            Orga-Team können in bestimmten Fällen assistieren. Melden Sie
            sich/melde dich bei Bedarf gerne bei uns.<br />
            Es steht ein Parkplatz mit breiter Stellfläche und Nähe zum Eingang
            zur Verfügung, den wir für Sie/dich reservieren können. Melden Sie
            sich/melde dich bei Bedarf gerne bei uns.<br />
            Die Veranstaltung findet in deutscher Lautsprache statt.<br />
            Eine Verdolmetschung in Deutsche Gebärdensprache und
            Induktionstechnik können wir nicht anbieten.<br />
            Ein taktiles Leitsystem ist nicht vorhanden. Eine Kinderbetreuung
            können wir nicht anbieten. <br /><br />
            Bei weiteren Fragen stehen wir gerne zur Verfügung. Wir freuen uns
            über zahlreiches Erscheinen.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
