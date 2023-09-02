const express = require('express');
const https = require('https');
const ApiRoutes = require('./routes/index');
const getOptions = require('./util/index')
const opts = getOptions();
const app = express();
app.use('/api', ApiRoutes);
https.createServer(opts,app).listen(3000, () => {
    const msg = `SERVER ONLINE at https://localhost:3000
To see demo, run in a new session:

  - \`npm run valid-client\`
  - \`npm run invalid-client\`
`
    console.log(msg)
});