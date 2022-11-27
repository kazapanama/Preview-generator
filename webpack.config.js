const path  = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'public')
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [

              "style-loader",

              "css-loader",

              "sass-loader",
            ],
          },
        ],
      },

      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 9000,
        hot:true,
        client:{
            overlay: {
                errors: false,
                warnings: false,
              },
        }
      },
}