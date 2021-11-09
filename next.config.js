const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
    path:'/full/custom/path/to/env'
})

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
}