const path = require('path')
const fs = require('fs-extra')

class FsCopyWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('FsCopyWebpackPlugin', (compilation, callback) => {
      const { root, files, src, dist } = this.options

      for (const file in files) {
        const srcFile = path.resolve(path.resolve(root, src || 'src'), file)
        const distFile = path.resolve(path.resolve(root, dist || 'dist'), files[file])

        if (fs.existsSync(srcFile)) {
          fs.copySync(srcFile, distFile)
        }
      }

      callback()
    })
  }
}

module.exports = FsCopyWebpackPlugin
