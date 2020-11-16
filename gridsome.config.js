// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'La menina perdida',
  templates: {
    Post: '/blog/:title',
    Topic: '/blog/topic/:id',
    Tag: [
     {
       path: (node) => {
         const chars = {' ': '-', 'ñ': 'n'}
         const regex = /[ ,ñ]/gi
         return `/blog/tag/${node.title.replace(regex, m=>chars[m])}`
       }
     } 
    ]
  },
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        modulePath: 'static/admin/index.js'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        refs: {
          topic: {
            typeName: 'Topic',
            create: true
          },
          tags:{
            typeName: 'Tag',
            create: true

          }
        }
      },
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/topics/*.md',
    //     typeName: 'Topics',
    //   },
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/landing.md',
        typeName: 'Landing',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/about.md',
        typeName: 'About',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
}
