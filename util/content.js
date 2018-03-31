export function getContent (params) {
  const customLang = ['en', 'nl', 'fr'].includes(params.lang)
  const path = [customLang ? params.lang : 'en', (customLang ? params.slug : params.lang) || 'home'].join('/')
  return require('minimal-request-promise')
    .get('https://3.thomasg.be/' + path)
    .then(({ body }) => JSON.parse(body))
}

export function asyncDataRoute (route) {
  if (route.startsWith('/')) {
    route = route.slice(1)
  }
  const [lang, slug] = route.split('/')
  return getContent({ lang, slug })
    .then(payload => ({ route, payload }))
}

export function asyncDataPage (context) {
  console.log('context', context)
  if (context.payload) {
    return { page: context.payload }
  }
  if (process.server) {
    return getContent(context.params)
      .then(page => ({ page }))
  }
}
