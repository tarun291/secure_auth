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
        const cert = req.socket.getPeerCertificate();
        const response = await authService.authenticate(cert);
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    get,
    authenticate
}