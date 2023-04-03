// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        links: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap",
            },
        ]
    },
    modules: [
        '@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
