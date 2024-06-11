<template>
  <div class="impressum-container">
    <h1 class="my-16">Impressum</h1>

    <section>
      <h2>Köllektive Awareness</h2>
      <p>Lena Turowski</p>
      <p>Venloer Straße 405</p>
      <p>50825 Köln</p>
      <p>info@koellektive-awareness.de</p>
      <!--  <p>Umsatzsteuer-Identifikationsnummer: Ihre Umsatzsteuer-Identifikationsnummer</p> -->
    </section>

    <section>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Informationen auf dieser Website dienen nur allgemeinen
        Informationszwecken. Wir bemühen uns, die Informationen aktuell und
        korrekt zu halten, übernehmen jedoch keine Gewähr für die
        Vollständigkeit, Richtigkeit, Zuverlässigkeit, Eignung oder
        Verfügbarkeit in Bezug auf die Website oder die Informationen, Produkte,
        Dienstleistungen oder damit verbundenen Grafiken, die auf der Website
        für jeden Zweck enthalten sind.
      </p>
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        Bei Fragen oder Bedenken bezüglich dieses Impressums kontaktieren Sie
        uns bitte unter:
      </p>
      <p>info@koellektive-awareness.de</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Impressum',
  }
</script>

<style scoped>
  /* Responsive layout */
  .impressum-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  section {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    /* Two-column layout for larger screens */
    section {
      width: 48%;
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
