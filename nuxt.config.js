import theme from '@nuxt/content-theme-docs';
const environment = process.env.NODE_ENV || 'local';
const env = require(`./env/${ environment }.js`);

console.log('env', env);

export default theme({
  router: {
    base: env.BASE_URL
  },
  env: {
    baseUrl: env.BASE_URL
  },
  // generate: {
  //   exclude: [
  //     /^(?=.*\bresource\b).*$/
  //   ]
  // },
  i18n: {
    locales: () => [
      {
        code: 'ja',
        iso: 'ja_JP',
        file: 'ja_JP.js',
        name: '日本語'
      }
    ],
    defaultLocale: 'ja'
  }
});
