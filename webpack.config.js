const path  = require('path')

module.exports = {
    entry:[
      __dirname + '/src/index.js',
      __dirname + '/src/styles.scss'
  ],
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'public')
    },
    mode: 'development',
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [],
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'file-loader',
                    options: {  name: '[name].min.css'}
                },
                'sass-loader'
            ]
        }
    ]
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