import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({firstname, lastname, email, password}) {
        return Api.post('/register', {firstname,lastname, email, password});
    }
}

export default new AuthApi();