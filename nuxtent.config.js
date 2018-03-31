const contentOptions = {
  isPost: false,
  generate: [
   'get'
  ]
}

module.exports = {
  content: {
    permalink: ':slug',
    page: '/_content',
    isPost: false
  },

  // content: [
  //   ['en', {
  //     permalink: ':slug',
  //     page: '/_content',
  //     isPost: false
  //   }]
  // ]

  // content: [
  //   // ['en', Object.assign({ permalink: ':slug', page: '/en/_slug' }, contentOptions)],
  //   // ['fr', Object.assign({ permalink: ':slug', page: '/fr/_slug' }, contentOptions)],
  //   // ['nl', Object.assign({ permalink: ':slug', page: '/nl/_slug' }, contentOptions)],
  //   // ['en', Object.assign({ permalink: 'en/:slug', page: '_slug' }, contentOptions)],
  //   // ['fr', Object.assign({ permalink: 'fr/:slug', page: '_slug' }, contentOptions)],
  //   // ['nl', Object.assign({ permalink: 'nl/:slug', page: '_slug' }, contentOptions)],
  // ]
}