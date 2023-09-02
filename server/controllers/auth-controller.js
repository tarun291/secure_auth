const AuthService=require('../services/auth-service')


const authService = new AuthService();

const get = async (req, res) => {
    try {
        const response = await authService.get();
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const authenticate = async (req, res) => {
    try {
        console.log('con')
        const cert = req.socket.getPeerCertificate();
        console.log(req.client.authorized)
        const response = await authService.authenticate(req.client.authorized,cert);
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    get,
    authenticate
}