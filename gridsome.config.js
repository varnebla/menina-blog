// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'La menina perdida',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/topics/*.md',
        typeName: 'Topic',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/landing.md',
        typeName: 'Landing',
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
