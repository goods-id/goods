const fs = require('fs')
const path = require('path')

const publicDir = path.resolve(__dirname, './public')
const files = fs.readdirSync(publicDir)

const buildFolder = path.resolve(__dirname, '../dist-web')
if (!fs.existsSync(buildFolder)) fs.mkdirSync(buildFolder)

const promises = files.map(file => {
  const src = path.resolve(publicDir, file)
  const dest = path.resolve(buildFolder, file)
  return new Promise((res, rej) => {
    fs.copyFile(src, dest, err => {
      if (err) return rej(err)
      res(null)
    })
  })
})

Promise.all(promises)
  .then(() => {
    console.log('Success copying all public files to dist folder')
  })
  .catch(err => {
    console.log(err)
  })
