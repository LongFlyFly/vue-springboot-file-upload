const CompressionWebpackPlugin = require('compression-webpack-plugin')
configureWebpack: config => {
config.plugins.push(
  new CompressionWebpackPlugin({
     filename: '[path][base].gz', //压缩后的文件名
     algorithm: 'gzip', //压缩算法/功能
     test: /\.(js|css)(\?.*)?$/i, //匹配项目文件，以js或者以css结尾的才执行压缩
     threshold: 10240, //仅处理大于此大小的资产（以字节为单位）
     minRatio: 0.8, //仅压缩比该比率更好的资产（minRatio = Compressed Size / Original Size）
     deleteOriginalAssets: true //是否删除原始文件
   })
)
}
