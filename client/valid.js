const axios = require('axios');
const agent = require('./agent');

const serverUrl = 'https://localhost:3000/api/v1/authenticate';
let opts = { httpsAgent: agent('alice') };


const process = async () => {
    try {
        const res = await axios.get(serverUrl, opts)
        console.log(res.data);
    } catch (err) {
        console.error(err.response.data);
    }
}

process();
