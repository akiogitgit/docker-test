// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  arr: any //number[]
  method: string
}

const http = require("http")
const mysql = require("mysql2")
const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "sample"
})

const selectAll = (query:string) => {
  return new Promise((resolve, reject) => {
  connection.connect(err => {
    if (err) throw err
    console.log("接続完了")
    connection.query(query, (err, result, fields) => {
      if (err) throw err
      return resolve(result)
    })
  })
    

  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { method } = req
  switch (method) {
    case "GET":
      // res.json({message: "a?"})
    case "POST":
  }

  connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
      if (!results) {
        // res.write(err)
        // res.write("aaaaaa")
        // res.write(results)
      } else {
        res.status(200).json({
          name: 'api/users', method: method||"" ,arr: results
        })
        // results.forEach(result => {
        //   res.write(`id: ${result["id"]}\n`);
        // });
      }
      res.end();
    }
  )

  const arr = [1, 2, 3, 4, 4]
  // const users = await selectAll("select * from users")

  // console.log("aa")
  // res.status(200).json({
  //   name: 'api/users', method: method||"" ,arr: users
  // })
}
