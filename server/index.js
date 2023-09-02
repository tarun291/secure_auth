const express = require('express');
const https = require('https');
const getOptions = require('./util/index')
const opts = getOptions();
const app = express();
https.createServer(opts,app).listen(4433, () => {
    const msg = `SERVER ONLINE at https://localhost:4433
To see demo, run in a new session:

  - \`npm run valid-client\`
  - \`npm run invalid-client\`
`
    console.log(msg)
});