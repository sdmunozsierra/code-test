// ./routes/index.js
const todo = require('./todo')
// const photos = require('./photos')
module.exports = (app) => {
  app.use('/todo', todo)
  //   app.use('/photos', photos)
  // etc..
}
