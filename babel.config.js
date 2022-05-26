module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', {
      unstable_disableES6Transforms: true
    }],
    'module:react-native-dotenv'
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        components: './src/screens/components',
        theme: './src/theme',
        cache: './src/cache',
        utils: './src/utils',
        assets: './assets',
        services: './src/services',
        actions: './src/actions'
      }
    }],
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: [
        'transform-remove-console'
      ]
    }
  }
}
