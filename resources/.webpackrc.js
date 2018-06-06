export default {
    entry: 'src/index.js',
    extraBabelPlugins: [
        "@babel/transform-runtime",
        ["import", { libraryName: "antd", style: "css" }]
    ],
    env: {
        development: {
            extraBabelPlugins: ["dva-hmr"]
        }
    },
    hash: true,
    manifest: {},
    html: {
        template: './src/index.ejs'
    },
    ignoreMomentLocale: true,
    outputPath: './../public',
    proxy: {
        "/": {
            target: "http://192.168.10.10",
            changeOrigin: true
        }
    }
};