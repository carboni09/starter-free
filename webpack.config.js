const { shouldExclude } = require('tamagui-loader')
const tamaguiOptions = {

  config: './tamagui.config.ts',

  components: ['tamagui'],

  importsWhitelist: ['constants.js', 'colors.js'],

  logTimings: true,

  disableExtraction: process.env.NODE_ENV === 'development',

  // optional advanced optimization of styled() definitions within your app itself, not just ones in your `components` option

  // default is false

  enableDynamicEvaluation: false,

}
const projectRoot = __dirname
module.exports = {

  resolve: {

    alias: {

      // Resolve react-native to react-native-web

      'react-native$': require.resolve('react-native-web'),

      // optional, for lighter svg icons on web

      'react-native-svg': require.resolve('@tamagui/react-native-svg'),

    }

  },

  module: {

    rules: [

      {

        test: /\.[jt]sx?$/,

        // you'll likely want to adjust this helper function,

        // but it serves as a decent start that you can copy/paste from

        exclude: path => shouldExclude(path, projectRoot, tamaguiOptions),

        use: [

          // optionally thread-loader for significantly faster compile!

          'thread-loader',
          // works nicely alongside esbuild

          {

            loader: 'esbuild-loader',

          },
          {

            loader: 'tamagui-loader',

            options: tamaguiOptions,

          },

        ]

      }

    ]

  },

}
