const http = require("http");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "users"
});

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  connection.query(
    'SELECT id FROM `users`',
    function (err, results, fields) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      if (!results) {
        res.write("ないよ")
      }else{
        results.forEach(result => {
          res.write(`id: ${result["id"]}\n`);
        });
      }
      res.end();
    }
  )
})

server.listen(port, hostname, () => {
  console.log(`Server running as http://${hostname}:${port}/`);
})