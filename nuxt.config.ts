// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        defaultLocale: 'fr',
        differentDomains: true,
        locales: [
            {
                code: 'en',
                domain: 'nuxt.stockdev.co.uk',
            },
            {
                code: 'fr',
                domain: 'nuxt.stockdev.fr',
            }
        ],
        strategy: 'prefix',
    },
    ssr: false
})
