module.exports={
  entry:[
    "./main.js"
  ],
  output: {
   filename:"./bundle.js"
 },
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel?optional[]=runtime&stage=0&cacheDirectory'},
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime&stage=0&cacheDirectory'}
    ]
  }
}
