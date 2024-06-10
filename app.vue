<script setup lang="ts">
  import site from '@/site'
  import { heroImageUrl } from '@/utils/hero'
  import { primary, secondary } from '@/utils/colors'
  // import { useSiteConfig } from '#imports'
  // const siteConfig = useSiteConfig()

  // When building as a SSG (generate command) app, defineRobotMeta is used to create a meta tag to control indexing. For more details - https://nuxtseo.com/robots/guides/meta-tags
  // TODO: Remove below defineRobotMeta if building as a SSR (build command) app
  defineRobotMeta()

  const { name, logo, description, author, twitter } = site
  const fromBg = secondary
  const toBg = primary

  const ogImageOptions = {
    component: 'ThePage',
    title: name,
    // description: '', // use page description instead
    summary: description,
    fromBg,
    toBg,
    // image: '~/assets/images/hero1.jpg',
    logo,
    author,
    twitter,
  }

  // https://nuxtseo.com/schema-org/guides/quick-setup
  useSchemaOrg([
    defineWebSite({
      name: site.name,
    }),
    defineWebPage(),
  ])

  const route = useRoute()
  const ogImage = computed(() => (route.meta.ogImage || heroImageUrl) as string)

  const { optimizeImage } = useOptimizeImage()
  const theOgImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      ogImage.value,
      /* options */
      {
        modifiers: {
          width: 1200,
          height: 600,
          fit: 'fill', // can be cover, contain, fill, inside, outside
        },
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: false, // placeholder image before the actual image is fully loaded.
      },
    ),
  }

  const theOgImage = theOgImageOptimized.src
  const isLoaded = ref(false)
  onMounted(() => (isLoaded.value = true))
</script>
<template>
  <div
    v-if="!isLoaded"
    :style="
      !isLoaded
        ? 'min-height: 100vh; display: flex; justify-content: center; align-items: center;'
        : ' '
    "
  >
    <div class="lds-dual-ring"></div>
  </div>
  <div v-else>
    <HeadAndMeta />
    <!-- We pass image separately so that alias can be transformed by vue plugin, see vite.vue.template.transformAssetUrls in nuxt.config.ts -->
    <OgImage :image="theOgImage" v-bind="ogImageOptions" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
  .lds-dual-ring,
  .lds-dual-ring:after {
    box-sizing: border-box;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid #ec0054;
    border-color: #ec0054 transparent #ec0054 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
