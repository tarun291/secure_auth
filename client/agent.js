const https = require('https');
const fs = require('fs');
const path = require('path');


const agent = (name) => {
    const certFile = path.resolve(`/Users/mithyalabs/secure_auth/client/config/${name}_cert.pem`);
    const keyFile = path.resolve(`/Users/mithyalabs/secure_auth/client/config/${name}_key.pem`);
    return new https.Agent({
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
        rejectUnauthorized: false
    });
};

module.exports = agent;