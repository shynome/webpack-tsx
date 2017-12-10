import webpack = require('webpack')
import UglifyjsPlugin = require('uglifyjs-webpack-plugin')

export const config:webpack.Configuration = {
  plugins:[
    new UglifyjsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }
    })
  ]
}


import merge = require('webpack-merge')
import { config as base } from "./webpack.base";
export default merge(base,config)