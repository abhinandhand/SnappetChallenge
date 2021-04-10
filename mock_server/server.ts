const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock_server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/suggestions', (req: any, res: any) => { 
  const students = returnSuggestions();
  if (true) {
    res.send(students);
  } else {
    res.status(500).send('Internal Server Error');
  }
});


server.get('/rawData', (req: any, res: any) => { 
  const rawData = returnRawData();
  if (true) {
    res.send(rawData);
  } else {
    res.status(500).send('Internal Server Error');
  }
});


server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});


function returnSuggestions() {
  const dbRaw = fs.readFileSync('./mock_server/data/students.json');
  const students = JSON.parse(dbRaw);
  return students;
}

function returnRawData() {
  const dbRaw = fs.readFileSync('./mock_server/data/rawdata.json');
  const rawData = JSON.parse(dbRaw);
  return rawData;
}
