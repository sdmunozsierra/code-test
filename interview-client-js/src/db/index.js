const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT NOW()', (err, res) => {
  if (err) throw err
  console.log(res)
  client.end()
})
