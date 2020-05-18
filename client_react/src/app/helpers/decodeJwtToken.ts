import jwtDecode from 'jwt-decode';

// Decode Token
export const decodeToken = (token: string | null) => {
    let user = null;
    let auth = false;
    if (token) {
        const decodedToken: any = jwtDecode(token);
        const dateNow = parseInt(Date.now().toString().substr(0, 10));
        if (decodedToken.exp > dateNow) {
            const { username, email, _id, image } = decodedToken;
            localStorage.setItem('token', token);
            user = {
                username,
                email,
                image,
                _id,
                token
            }
            auth = true;
        }
    }
    return { user, auth }
}