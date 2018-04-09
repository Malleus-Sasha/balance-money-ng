export class AuthService {
    private isAuthenticated = false;

    login(user) {
        console.log('Auth Use: ', user);
        console.log('User stringify:', JSON.stringify(user))
        this.isAuthenticated = true;
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}