module.exports = {
	type: 'react-app',
	webpack: {
		loaders: {
			css: {
				query: {
					modules: true,
					localIdentName: "[name]__[local]___[hash:base64:5]"
				}
			}
		}
	}
}
