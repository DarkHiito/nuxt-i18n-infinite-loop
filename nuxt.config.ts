// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        // customRoutes: 'config',
        defaultLocale: 'fr',
        differentDomains: true,
        // langDir: 'lang',
        // lazy: true,
        locales: [
            {
                code: 'en',
                domain: 'nuxt.stockdev.co.uk',
                // file: 'en.json',
                // iso: 'en-US'
            },
            {
                code: 'fr',
                domain: 'nuxt.stockdev.fr',
                // file: 'fr.json',
                // iso: 'fr-FR'
            }
        ],
        // pages: router,
        // Avoid i18n errors on html into json
        // compilation: {
        //     strictMessage: false,
        // },
        strategy: 'prefix',
    },
    ssr: false
})
