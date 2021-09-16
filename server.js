// require('dotenv').config()
const express = require('express')
const os = require('os');

const app = express()
const port = process.env.PORT || 3000;

const desiredLoadFactor = process.env.FACTOR || .5;
const shouldRun = true;


function blockCpuFor(ms) {
  const now = new Date().getTime();
  let result = 0
  while (shouldRun) {
    result += Math.random() * Math.random();
    if (new Date().getTime() > now + ms)
      return;
  }
}

app.get('/', (_req, res) => {
  res.send('K8s Load tester.')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/healthz', (_req, res) => {
  res.send('ok')
})

app.get('/blockcpu', (req, res) => {
  const loadFactor = req.query.loadfactor || desiredLoadFactor;
  console.log(loadFactor);
  blockCpuFor(1000 * loadFactor);
  res.send({
    cpus: os.cpus(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
  })
})

app.listen(port, () => {
  console.log(`Load tester is running on http://localhost:${port}`)
})