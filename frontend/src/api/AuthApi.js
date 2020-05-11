import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({firstName, lastName, email, password}) {
        return Api.post('/register', {firstName, lastName, email, password});
    }
}

export default new AuthApi();