class Auth {
    logout() {
        sessionStorage.clear();
        window.location = '/'
    }

    getCurrentUser() {
        return sessionStorage.getItem('currentUser');
    };
}

export default Auth;
