var path = require('path');

module.exports = {
	devtool: false,
    entry: "./src/inc/js/main.js",
    output: {
        path:path.resolve(__dirname, "www/inc/js"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};