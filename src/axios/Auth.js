import instance from ".";

export default class AuthService {
    static async login(username, password) {
        return instance.post('/auth/signin', {username, password})
    }

    static async registration(username, password, email) {
        return instance.post('/auth/signup', {username, password, email})
    }
}