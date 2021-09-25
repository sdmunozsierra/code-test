// const { Pool } = require('pg')

// // import pg from 'pg'

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'interview',
//   password: 'password',
//   port: 5432,
// })

// const getAllTodos = () => {
//   return new Promise(function(resolve, reject) {
//     pool.query(
//       'SELECT * FROM todo_entity ORDER BY id ASC',
//       (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results.rows)
//       }
//     )
//   })
// }
// const getAllTodos = () => {}

// module.exports = {
//   getAllTodos,
// }

// pools will use environment variables
// for connection information
// const pool = new Pool()
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// // you can also use async/await
// const res = await pool.query('SELECT NOW()')
// await pool.end()
// // clients will also use environment variables
// // for connection information
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT NOW()')
// await client.end()
