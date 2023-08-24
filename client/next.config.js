require('dotenv').config({ path: './config/.env' })

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL
    },
    // basePath: '/test'  создает дополнительную вложенность в пути: localhost:3000/test
    // async rewrites(){
    // изменять путь для картинок :path* - уникальный путь
    // }
    images: {
        domains: ['627400.ru', 'luxurypulse.com', 'static.tildacdn.com', 'img3.akspic.ru']
    },
    async redirects() {
        return [
            {
                source: '/cars/1',
                destination: '/cars/2',
                permanent: true
            }
        ]
    } // редирект для страниц (в этом примере с 1 на 2)
}

module.exports = nextConfig
