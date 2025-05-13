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
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12 flex flex-col">

        <NuxtImg src="/images/stuhl_1.jpg" class="object-cover h-[40vh] -hue-rotate-15 rounded-3xl"
          alt="Unsere Mission" />

        <div class="mx-auto p-4 w-full lg:w-3/4">
          <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase my-7">
            Projekte
          </h6>

          <!-- 2025 Label -->
          <div class="border-2 border-solid border-black rounded-2xl w-full py-2">
            <h3 class="my-6 text-[#ec0054]">2025</h3>
          </div>

          <!-- 2025 Workshop Content -->
          <div class="text-left space-y-6 mt-10 text-xl">
            <h3 class="text-2xl font-bold">Awareness-Schulungen für die freie Kulturszene Kölns 2025</h3>

            <p>Liebe Mitarbeitende in der freien Kulturszene Kölns,</p>
            <p>Wir haben gute Neuigkeiten!</p>

            <p>
              Da das Interesse und die Nachfrage zu unserem im Jahr 2024 angebotenen, kostenfreien Einführungsworkshop
              zu Awareness bereits hoch war, können wir diese Grundlagen-Workshops für die freie Kulturszene in Köln in
              einer überarbeiteten und aktualisierten Fassung erneut anbieten!
            </p>

            <p class="italic text-base text-primary-600 dark:text-primary-300">
              Ausblick: In der zweiten Jahreshälfte 2025 werden darauf aufbauende Workshops angeboten.
            </p>

            <p>
              Gefördert wird die insgesamt vierteilige Workshopreihe von der Stadt Köln im Programm „Kultur –
              Diversity“. Die Teilnahme ist daher kostenfrei!
              Das Projekt ist eine gemeinsame Initiative der Köllektive Awareness (Verein in Gründung), der KLUBKOMM –
              Verband Kölner Clubs und Veranstalter*innen e. V. und ArtAsyl e. V. / Studio Audience.
            </p>

            <p>
              Du interessierst dich für die Grundlagen und die Unterstützungsarbeit von Awareness im
              Veranstaltungskontext? Du willst wissen, wie sicherere Orte erschaffen werden können in Theatern, freien
              Kunsträumen, Tanzschulen, Konzertsälen, Museen, Musikschulen, für Literatur- & Spoken-Word-Formate,
              Performancegruppen, Film- & Medienkollektive und Soziokulturelle Zentren & Community Spaces? Dann sind
              unsere zwei Awareness-Einführungsworkshops die optimale Gelegenheit.
            </p>

            <!-- Workshop 1 -->
            <div class="space-y-3">
              <h4 class="text-xl font-bold mt-10">1. Workshop: Grundlagen von Awareness im Veranstaltungskontext</h4>
              <p><strong>Zielgruppe:</strong> Teilnehmende aus der freien Kulturszene in Köln, die bisher keine
                Awareness-Schulungen erhalten haben.</p>
              <p><strong>Themenauszug:</strong><br>
                Was umfasst Awareness und wo liegen die Grenzen?<br>
                Vermittlung der Grundprinzipien von Awareness.<br>
                Privilegien und Diskriminierung im Veranstaltungskontext.
              </p>
              <p><strong>Wann?</strong> Sa., 21.06.2025, 11 – 17 Uhr</p>
              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir
                leider nicht anbieten.
              </p>
              <p><strong>Anmeldung:</strong> bis zum 06.06.2025 per E-Mail an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
            </div>

            <!-- Workshop 2 -->
            <div class="space-y-3">
              <h4 class="text-xl font-bold mt-10">2. Workshop: Unterstützungsarbeit von Awareness im
                Veranstaltungskontext</h4>
              <p><strong>Zielgruppe:</strong> Teilnehmende aus der freien Kulturszene in Köln, die bisher keine
                Awareness-Schulungen erhalten haben.</p>
              <p><strong>Themenauszug:</strong><br>
                Ablauf von Unterstützungsarbeit<br>
                Aspekte in der Verweisberatung<br>
                Szenariotraining<br>
                Self Care
              </p>
              <p><strong>Wann?</strong> Sa., 28.06.2025, 11 – 17 Uhr</p>
              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir
                leider nicht anbieten.
              </p>
              <p><strong>Anmeldung:</strong> bis zum 13.06.2025 per E-Mail an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
              <p>Wir freuen uns über zahlreiches Erscheinen.</p>
            </div>

            <!-- Outlook -->
            <div class="space-y-3 mt-10">
              <h4 class="text-xl font-bold">Ausblick auf weitere Workshops</h4>
              <p>
                Im Zuge der diesjährigen Förderung planen wir zwei weitere Workshops, die im September / Oktober 2025
                stattfinden werden. Auch diese werden von der Stadt Köln im Programm „Kultur – Diversity“ gefördert und
                sind daher ebenfalls kostenlos.
              </p>
              <p>
                Detaillierte Informationen und Anmeldemöglichkeiten werden wir ebenfalls hier auf unserer Internetseite
                bekanntgeben.
              </p>
              <p>
                Hier soll es zum einen darum gehen, wie Awareness in Organisationen implementiert werden kann
                (Transformations-, Veränderungs- und Anpassungsprozesse in Organisationen initiieren, begleiten und
                verankern) und zum anderen um einen Austausch darüber, welche Anwendungsbedingungen und Hindernisse in
                den einzelnen Kultursparten bestehen und um die Erarbeitung von Gelingensfaktoren für die jeweiligen
                Kultursparten.
              </p>
              <p>Bei weiteren Fragen stehen wir (Köllektive Awareness) gerne zur Verfügung.</p>
            </div>
          </div>

          <!-- 2024 Label (unchanged) -->
          <div class="border-2 border-solid border-black rounded-2xl w-full py-2 mt-24">
            <h3 class="my-6 text-[#ec0054]">2024</h3>
          </div>

          <!-- 2024 Workshop Content (existing) -->
          <h3 class="my-12 mt-6">Awareness-Schulungen für Kulturschaffende 2024</h3>
          <p class="mb-6 text-lg text-left">
            Im Juni 2024 haben wir unsere erste, von der Stadt Köln im Programm „Kultur – Diversity“ geförderte und
            damit für Teilnehmende kostenfreie, zweiteilige Workshopreihe für die freie Kulturszene Kölns durchgeführt.
            <br><br>
            Dieses Projekt war eine gemeinsame Initiative von der Initiative Köllektive Awareness, der KLUBKOMM –
            Verband Kölner Clubs und Veranstalter*innen e. V. und ArtAsyl e. V. / Studio Audience und zielte darauf ab,
            Veranstaltende und Kulturarbeiter*innen aus der freien Kulturszene Kölns Zugang zu dem nötigen Know-How und
            Handwerkszeug zu geben, um Awareness für ihre Events und Arbeitsprozesse voranzutreiben.
            Der Fokus lag vor allem auf einer Vermittlung der Awareness-Grundprinzipien und des besonderen Ansatzes von
            Unterstützungsarbeit mit Personen, die von Grenzüberschreitungen, Diskriminierung oder Gewalt betroffen
            sind.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>