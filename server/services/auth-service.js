class AuthService {
    async get() {
        return '< a href = "/authenticate" > Log in using client certificate</a >'
    }
    async authenticate(isAuthorized, cert) {
        if (isAuthorized) {
            return {
                status: 200,
                message:`Hello ${cert.subject.CN}, your certificate was issued by ${cert.issuer.CN}!`
            }

        } else if (cert.subject) {
            return {
                status: 403,
                message: `Sorry ${cert.subject.CN}, certificates from ${cert.issuer.CN} are not welcome here.` 
            }

        } else {
            return {
                status: 403,
                message:`Sorry, but you need to provide a client certificate to continue.`
            }
        }
    }
  
}

module.exports = AuthService;