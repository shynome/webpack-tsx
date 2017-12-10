import webpack = require('webpack')

export const config:webpack.Configuration = {
  plugins:[
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool:'cheap-module-source-map',
  devServer:{
    hot:true,
    port:3000,
  },
}

import merge = require('webpack-merge')
import { config as base } from "./webpack.base";
export default merge(base,config)