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
          <div class="border-2 border-solid border-black rounded-2xl w-full py-2 mb-12">
            <h3 class="my-6 text-[#ec0054]">2025</h3>
          </div>

          <!-- 2025 Workshop Content -->
          <div class="text-left space-y-6 mt-10 text-xl">
            <h3 class="text-2xl font-bold">Awareness-Schulungen für die freie Kulturszene Kölns 2025</h3>

            <p>Liebe Mitarbeitende in der freien Kulturszene Kölns,</p>
            <p>Wir haben gute Neuigkeiten!</p>

            <p>
              Da das Interesse und die Nachfrage zu unserem im Jahr 2024 angebotenen, kostenfreien
              Einführungsworkshop zu Awareness bereits hoch war, können wir diese
              <strong>Grundlagen-Workshops für die freie Kulturszene in Köln</strong>
              in einer überarbeiteten und aktualisierten Fassung erneut anbieten!
            </p>

            <p class="italic text-base text-[#ec0054]"><strong>
              Ausblick: In der zweiten Jahreshälfte 2025 werden darauf aufbauende Workshops angeboten. Scrollt für die weiteren Angebote gerne weiter runter.
              </strong>
            </p>

            <p>
              Das Projekt ist eine gemeinsame Initiative der Köllektive Awareness (Verein in Gründung), der KLUBKOMM – Verband Kölner Clubs und Veranstalter*innen e. V. (<a class="underline font-bold" href="https://www.klubkomm.de/">Klubkomm – Interessenverband der Kölner Clubs</a>) und ArtAsyl e. V. / Studio Audience (<a class="underline font-bold" href="https://www.artasyl.de/">ArtAsyl - Kunst verbindet Kulturen</a>).
            </p>

            <p>
              Du interessierst dich für  die Grundlagen und die Unterstützungsarbeit von Awareness im Veranstaltungskontext?<br>
              Du willst wissen, wie sicherere Orte erschaffen werden können in Theatern, freien Kunsträumen, Tanzschulen, Konzertsälen, Museen, Musikschulen, für Literatur- & Spoken-Word-Formate, Performancegruppen, Film- & Medienkollektive und Soziokulturelle Zentren & Community Spaces?<br>
              Du befindest dich am Anfang einer Auseinandersetzung in eurer Einrichtung oder eurem Projekt?<br>
              Dann sind unsere zwei Awareness-Einführungsworkshops die optimale Gelegenheit.
            </p>

            <!-- Workshop 1 -->
            <div style="margin-top: 120px;"  class="text-left space-y-3">
              <h4 class="text-xl font-bold mt-10">1. Workshop: Grundlagen von Awareness im Veranstaltungskontext</h4>
              <p><strong>Zielgruppe:</strong> Teilnehmende aus der freien Kulturszene in Köln, die bisher keine Awareness Schulungen erhalten haben.</p>
              <p><strong>Themenauszug:</strong></p>
              <ul class="m-0 !mt-0 !mb-0 list-disc ml-6">
                <li>Was umfasst Awareness und wo liegen die Grenzen?</li>
                <li>Vermittlung der Grundprinzipien von Awareness.</li>
                <li>Privilegien und Diskriminierung im Veranstaltungskontext.</li>
              </ul>
              <p><strong>Wann?</strong> Sa., 21.06.2025, 11 – 17 Uhr</p>
              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir leider nicht anbieten.
              </p>
              <p><strong><u>Anmeldung:</u></strong> bis zum 18.06.2025 per E-Mail an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
            </div>

            <!-- Workshop 2 -->
            <div style="margin-top: 120px;" class="text-left space-y-3">
              <h4 class="text-xl font-bold mt-10">2. Workshop: Unterstützungsarbeit von Awareness im
                Veranstaltungskontext</h4>
              <p><strong>Zielgruppe:</strong> Teilnehmende aus der freien Kulturszene in Köln, die bisher keine
                Awareness-Schulungen erhalten haben.</p>
              <p><strong>Themenauszug:</strong></p>
              <ul class="m-0 !mt-0 !mb-0 list-disc ml-6">
                <li>Ablauf von Unterstützungsarbeit</li>
                <li>Aspekte in der Verweisberatung</li>
                <li>Szenariotraining</li>
                <li>Self Care</li>
              </ul>
              <p><strong>Wann?</strong> Sa., 28.06.2025, 11 – 17 Uhr</p>
              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir leider nicht anbieten.
              </p>
              <p><strong><u>Anmeldung:</u></strong> bis zum 13.06.2025 per E-Mail an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
              <p>Wir freuen uns über zahlreiches Erscheinen.</p>
            </div>

            <!-- Logos -->
            <div class="flex justify-center">
              <NuxtImg src="/images/k-amt.png" class="object-contain h-20 rounded-3xl mt-4" alt="Unsere Mission" />
              <NuxtImg src="/images/logo.jpg" class="object-contain h-24 rounded-3xl ml-8" alt="Unsere Mission" />
            </div>
          </div>

          <h4 style="margin-top: 120px;"  class="text-left text-xl font-bold mt-10">Und weiter gehts in der zweiten Jahreshälfte 2025 mit den Workshops 3 & 4!</h4>

          <!-- Workshop 3 -->
            <div style="margin-top: 120px;" class="text-left space-y-3 text-xl">
              <h4 class="text-xl font-bold mt-10">3. Workshop: Awareness in Organisationen einführen und etablieren</h4>
              <p>
                Du möchtest Awareness als Haltung und Konzept in eine Einrichtung oder Organisation einbringen?<br>
                Du befindest dich am Anfang dieser Auseinandersetzung und fragst dich, wie du Verbündete finden und Kolleg*innen an ihrem Standpunkt abholen kannst? <br>
                Was ist dabei wichtig und wie kannst du angemessen mit deinen Ressourcen umgehen,
                um nachhaltig Veränderung anzustoßen?<br>
                Wie erkennst du, ob du mit deinen Impulsen erfolgreich bist?
              </p>
              <p>
                Nach den Einführungsworkshops laden wir mit diesen Impulsen zu einer vertieften Auseinandersetzung dazu ein, wie Awareness in Organisationen etabliert werden kann.
                Wir widmen uns außerdem den Fragen, wie wir in verschiedenen Räumen Unterstützer*innen finden und konstruktiv mit Widerständen umgehen können.
              </p>
              <p><strong>Zielgruppe:</strong> Engagierte Einzelpersonen oder Arbeitsgruppen mit Vorkenntnissen in Awareness, die in ihrer jeweiligen Organisation für Awareness eintreten.</p>
              <p>
                Der Workshop baut auf den Inhalten der vorherigen Workshops auf. Wir setzen deshalb die Teilnahme an mindestens einem unserer Einführungsworkshops oder ähnliche Kenntnisse voraus.
              </p>
              <p><strong>Themenauszug:<br>
              Recap:</strong></p>
              <ul class="m-0 !mt-0 !mb-0 list-disc ml-6">
                <li>Awareness als Haltung und Konzept</li>
                <li>Wertschätzende Kommunikation und Feedbackkultur</li>
              </ul>
              <p><strong>Vertiefung:</strong></p>
              <ul class="m-0 !mt-0 !mb-0 list-disc ml-6">
                <li>Von der individuellen zur gemeinsamen Vision</li>
                <li>Verbündete finden</li>
                <li>Widerstände transformieren, Backlash begegnen</li>
                <li>Ressourcen schonen</li>
                <li>Nachhaltige Veränderungen bewirken</li>
                <li>Meilensteine setzen und erkennen</li>
              </ul>
              <p><strong>Wann?</strong> Sa., 08.11.2025 11 – 17 Uhr</p>
              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir leider nicht anbieten.
              </p>
              <p><strong><u>Anmeldung:</u></strong> Name und Kontext an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
              <p>Gefördert wird die insgesamt vierteilige Workshopreihe von der Stadt Köln im Programm „Kultur – Diversity“. <strong>Die Teilnahme ist daher kostenfrei!</strong></p>

              <!-- Logos -->
              <div class="flex justify-center">
                <NuxtImg src="/images/k-amt.png" class="object-contain h-20 rounded-3xl mt-4" alt="Unsere Mission" />
                <NuxtImg src="/images/logo.jpg" class="object-contain h-24 rounded-3xl ml-8" alt="Unsere Mission" />
              </div>
            </div>


            <!-- Workshop 4 -->
            <div style="margin-top: 120px;" class="text-left space-y-3 text-xl">
              <h4 class="text-xl font-bold mt-10">4. Workshop: Awareness in der Vielfalt kultureller Räume</h4>
              <p>
                Dem Aufbau einer Awareness-Struktur stehen oft institutionelle Hindernisse und begrenzte Ressourcen entgegen - das haben in der Regel alle Kultureinrichtungen gemeinsam.
                Jedoch unterscheiden sich die Grundbedingungen einer Awareness-Strategie in einem Kino maßgeblich von den Voraussetzungen in einem Museum oder an einem Filmset.
                Deshalb gehen wir in einem letzten Workshop auf die besonderen Herausforderungen bei der Anwendung von Awareness in verschiedenen Kultursparten ein.
              </p>
              <p>
                Wir wollen uns dazu, gemeinsam mit euch, die spezifische Charakteristik eurer Kulturbereiche genauer anschauen und uns anschließend mit den Umsetzungsmöglichkeiten und Gelingensfaktoren in der jeweiligen Kulturorganisation beschäftigen.<br>
                Außerdem freuen wir uns, in unserem letzten Workshop in dieser Reihe, am Ende auf einen entspannten Austausch und Raum fürs Netzwerken in der Bar der Wohngemeinschaft.
              </p>
              <p><strong>Zielgruppe:</strong> Engagierte Einzelpersonen oder Arbeitsgruppen mit Vorkenntnissen in Awareness, die in ihrer jeweiligen Organisation für Awareness eintreten. Teilnahmevoraussetzung sind Kenntnisse von und Auseinandersetzung mit den Basics von Awareness (Grundprinzipien von Awareness und der Betroffenenunterstützung, Privilegien und Diskriminierungsformen).</p>
              <p><strong>Fragen, die wir uns stellen werden:</strong></p>
              <ul class="m-0 !mt-0 !mb-0 list-disc ml-6">
                <li>Was sind die strukturellen Besonderheiten eures Kulturbereichs?</li>
                <li>Worauf sollte daher der Fokus eures Awareness Konzepts liegen?</li>
                <li>Welche Awareness Tools passen zu euch?</li>
                <li>Welche Mindeststandards müssen für “Awareness” erfüllt werden?</li>
                <li>Wer ist noch in eurem Kulturbereich für Awareness unterwegs?</li>
              </ul>
              <p><strong>Wann?</strong>  Sa., 06.12.2025 <strong>- bitte beachten, 12 – 18 Uhr</strong></p>

              <p><strong>Wo?</strong> Wohngemeinschaft, Richard-Wagner-Str. 39, 50674 Köln</p>
              <p><strong>Barriereinformationen:</strong><br>
                Die Veranstaltung findet in deutscher Sprache statt.<br>
                Die Räumlichkeiten sind für Rollstuhlnutzende zugänglich.<br>
                Eine Verdolmetschung in Deutsche Gebärdensprache, Induktionstechnik oder Kinderbetreuung können wir leider nicht anbieten.
              </p>
              <p><strong><u>Anmeldung:</u></strong> Bitte inkl. Namen, Pronomen und Kontext an <a class="underline font-bold"
                  href="mailto:info@koellektive-awareness.de">info@koellektive-awareness.de</a></p>
              <p>Gefördert wird die insgesamt vierteilige Workshopreihe von der Stadt Köln im Programm „Kultur – Diversity“. <strong>Die Teilnahme ist daher kostenfrei!</strong></p>

              <!-- Logos -->
              <div class="flex justify-center">
                <NuxtImg src="/images/k-amt.png" class="object-contain h-20 rounded-3xl mt-4" alt="Unsere Mission" />
                <NuxtImg src="/images/logo.jpg" class="object-contain h-24 rounded-3xl ml-8" alt="Unsere Mission" />
              </div>
            </div>


          <!-- 2024 Label (unchanged) -->
          <div class="border-2 border-solid border-black rounded-2xl w-full py-2 mt-24 lg:mt-48 mb-12">
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
