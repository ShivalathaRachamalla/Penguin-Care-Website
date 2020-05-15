import AuthApi from "../api/AuthApi";

const tokenKey = "_token";
const userEmail = "_email";

// Disclaimer: This simple auth implementation is for development purposes only.

class Auth {
    setLoggedIn = () => {};

    isLoggedIn() {
        return this._getToken() != null;
    }
    getDisplayName()
    {
       return this._getUserEmail();
    }

    async login(loginData) {

       let result_login = await this._loginOrRegister(AuthApi.authenticate, loginData);
        if (result_login)
        {
        alert("You successfully logged-in into Penguine care");
        }
        return result_login;
    }

    async register(registrationData) {
        let result_register = await this._loginOrRegister(AuthApi.register, registrationData);
        if (result_register)
        {
        alert("You successfully signed-in into Penguine care");
        }
        return result_register;
    }


    logout() {
        this.setLoggedIn(false);
        this._clearToken();
        this._clearEmail();
        return false;
    }

    bindLoggedInStateSetter(loggedInStateSetter) {
        this.setLoggedIn = loggedInStateSetter;
    }

    getAuthorizationHeader() {
        return "Bearer "+this._getToken();
    }

    async _loginOrRegister(action, data) {
        try {
            const response = await action(data);
            this._setToken(response.data.token);
            this._setUserEmail(response.data.displayName);
            this.setLoggedIn(true);
            return true;
        } catch (e) {
            console.error(e);
            
            this.setLoggedIn(false);
            return false;
        }
    }



        _getUserEmail() {
            return window.sessionStorage.getItem(userEmail);
        }

        _setUserEmail(displayName) {
            window.sessionStorage.setItem(userEmail, displayName);
        }

        _clearEmail() {
            window.sessionStorage.removeItem(userEmail);
        }

    _getToken() {
        return window.sessionStorage.getItem(tokenKey);
    }

    _setToken(token) {
        window.sessionStorage.setItem(tokenKey, token);
    }

    _clearToken() {
        window.sessionStorage.removeItem(tokenKey);
    }
}


export default new Auth();