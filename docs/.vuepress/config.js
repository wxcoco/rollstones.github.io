module.exports = {
  title: 'RollStones·笔记',
  description: '一点一滴记录，持之以恒学习。',
  head: [
    ['link', { rel: 'icon', href: 'https://www.wenboz.com/favicon.ico' }]
  ],
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Blog', link: 'https://wwww.rollstone.cn' },
      { text: 'Github', link: 'https://github.com/rollstones/rollstones.github.io' },
    ],
    docsRepo: 'rollstones/rollstones.github.io',
    docsDir: '/',
    lastUpdated: 'Last Updated',
  },
  plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}], 'rpurl'],
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit,
          name: `assets/img/[name].[hash:8].[ext]`
        })
  }
}
