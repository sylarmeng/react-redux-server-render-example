var webpack = require('webpack')
var CompressionPlugin = require('compression-webpack-plugin')

module.exports = {

  entry: {
    bundle: './index.js',
    vendor: ['react'],
  },

  output: {
    // path: 'public',
    path: __dirname + '/public',
    filename: '[name].js',
    // filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].js'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    /*new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),*/
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),

    new webpack.optimize.AggressiveMergingPlugin(),

    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    })

  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          compact: false,
          presets: ['es2015','stage-1', 'react'],
          plugins:['syntax-dynamic-import']
        }
      }
    ]
  }
}


//correct code
/*  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react&compact=false'
        // query: {compact: false}
         }
    ]
  }*/

  // ,'stage-1'
  //           plugins: ['syntax-dynamic-import'],
  // presets: [['es2015', { modules: false}], 'react','stage-1'],