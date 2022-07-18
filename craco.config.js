/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

const CracoLessPlugin = require('craco-less')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pkgJSON = require('./package.json')

module.exports = function () {
  // const { REACT_APP_BASE_URL, REACT_APP_API_HOST, REACT_APP_GRAPHQL_PATH } =
  //   dotenv.config({
  //     path: path.join(__dirname, `/.env.${env}`),
  //   }).parsed

  return {
    devServer: {
      // proxy: {
      //   [`${REACT_APP_BASE_URL}${REACT_APP_GRAPHQL_PATH}`]: {
      //     target: REACT_APP_API_HOST,
      //     changeOrigin: true,
      //     ws: false,
      //     secure: false,
      //   },
      // },
    },
    babel: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@': './src',
            },
          },
        ],
        '@babel/plugin-syntax-dynamic-import',
        // 配置 babel-plugin-import
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: true },
          'antd',
        ],
        [
          'import',
          { libraryName: '@fruits-chain/react-bailu', libraryDirectory: 'es' },
          '@fruits-chain/react-bailu',
        ],
      ],
    },
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      plugins: {
        add: [
          new FileManagerPlugin({
            events: {
              onEnd: {
                archive: [
                  {
                    source: './build',
                    destination: `./zips/${pkgJSON.name}-v${pkgJSON.version}.zip`,
                  },
                ],
              },
            },
          }),
        ],
      },
      configure: webpackConfig => {
        const htmlWebpackPluginInstance = webpackConfig.plugins.find(
          webpackPlugin => webpackPlugin instanceof HtmlWebpackPlugin,
        )
        if (htmlWebpackPluginInstance) {
          htmlWebpackPluginInstance.userOptions.scriptLoading = 'blocking'

          htmlWebpackPluginInstance.userOptions.title = '自定义 title'
          htmlWebpackPluginInstance.userOptions.description =
            '自定义 description'
          htmlWebpackPluginInstance.userOptions.themeColor = '#fff'
          htmlWebpackPluginInstance.userOptions.appVersionCode =
            pkgJSON.versionCode
        }

        return webpackConfig
      },
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              globalVars: {},
              modifyVars: {},
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  }
}
