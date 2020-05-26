export class User {
    constructor(email, authProvider, _token, _tokenExpirationDate) {
        this.email = email;
        this.authProvider = authProvider;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
//# sourceMappingURL=user.model.js.map