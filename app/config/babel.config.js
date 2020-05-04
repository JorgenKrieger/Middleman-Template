module.exports = {
    "presets": [
        ["@babel/preset-env", { "targets": { "node": "current", "ie": "11" } }],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-class-properties",
        "@babel/plugin-object-rest-spread"
    ]
}