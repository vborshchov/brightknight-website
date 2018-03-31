module.exports = {
  css: ['~assets/css/main.scss'],
  generate: {
    routes () {
      return Promise.all([
        '/',
        '/contact',
        '/en',
        '/fr',
        '/nl',
        '/en/contact',
        '/fr/contact',
        '/nl/contact',
      ].map(asyncDataRoute))
        .then(data => console.log(data) || data)
    }
  },
  loading: false,
  plugins: [
    '@/plugins/global.js'
  ]
}

function asyncDataRoute (route) {
  const [, lang, slug] = route.split('/')
  return getContent({ lang, slug })
    .then(payload => ({ route, payload }))
}

function getContent (params) {
  const path = [params.lang || 'en', params.slug || 'home'].join('/')
  return require('axios')
    .get('http://localhost:9001/' + path)
    .then(({ data }) => data)
}
