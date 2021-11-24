class Authenticator {
    constructor () {
        this.authenticatedUsers = []
    }
    login (ssid) {
        this.authenticatedUsers.push(ssid)
    }
    logout (ssid) {
        this.authenticatedUsers.filter((value, index) => value !== ssid)
    }
    isAuthenticated (ssid) {
        return this.authenticatedUsers.includes(ssid) ? true : false
    }
    destroy () {
        this.authenticatedUsers = []
    }
}

module.exports = new Authenticator()