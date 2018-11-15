# fs-copy-webpack-plugin

## Install

```sh
npm i fs-copy-webpack-plugin --save-dev

# or

yarn add fs-copy-webpack-plugin --dev
```

## How to use

```js
// webpack.config
module.exports = {
  plugin: [
    new FsCopyWebpackPlugin({
      root: __dirname,
      src: 'src',
      dist: 'dist',
      files: {
        'a.png': 'b.png'
      }
    })
  ]
}
```

`./src/a.png` will cope to `./dist/b.png`
