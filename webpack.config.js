const path = require("path");
const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"index.js"
    },
    mode: "production",
    module:{},
    plugins:[]
}

module.exports = config;