import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/tailwind.css',
        '@/assets/less/ant-design.less',
    ],

    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },

    components: {
        dirs: [
            '~/components',
            {
                path: '~/global-components',
                extensions: ['vue'],
                prefix: 'C'
            }
        ]
    },

})
