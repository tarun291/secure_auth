const fs = require('fs');
const path = require('path');
module.exports = getOptions = () => {
    const opts = {
        key: fs.readFileSync('/Users/mithyalabs/secure_auth/server/config/server_key.pem'),
        cert: fs.readFileSync('/Users/mithyalabs/secure_auth/server/config/server_cert.pem'),
        requestCert: true,
        rejectUnauthorized: false, // so we can do own error handling
        ca: [
            fs.readFileSync('/Users/mithyalabs/secure_auth/server/config/server_cert.pem')
        ]
    };
    return opts;
}

