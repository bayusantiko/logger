const http = require('http');
const path = require('path');
const calcdistance = require('@bayusantiko/calcdistancejs');

//const testfunction = require('./testfunction');
const writefile = require('./writefile');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

var hrstart = process.hrtime();
var result = calcdistance(-6.882782,107.665369,-6.90124,107.653619)
var hrend = process.hrtime(hrstart);
var runtime = "Execution time : "+ hrend[0] + "s " + hrend[1]/1000000 + "ms";
var output = "Function Output : "+result +"\n";
var log = runtime+" "+output;
const filename = 'log.txt'
location = path.join('/','Personal','logger','log', filename)
writefile(location,log)

//console.log("Execution time (hr): ", hrend[0], hrend[1]/1000000);
//console.log(result)
