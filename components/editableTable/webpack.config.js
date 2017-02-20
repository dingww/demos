module.exports = {
	devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: 'style!css' //添加对样式表的处理
		}, {
			test: /\.scss$/,
			loader: "style!css!sass"
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}