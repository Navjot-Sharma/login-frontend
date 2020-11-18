import { post } from '../../shared/services/Http';
import {
    login,
    fetchingAuth,
    authError
} from './auth.actions';

export const onLogin = (data) => async dispatch => {
    dispatch(fetchingAuth(true));

    try {
        const res = await post('users/login', data);
        dispatch(fetchingAuth(false));

        if (!res || res.status == false) {
            return null;
        }
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        dispatch(login(res));
        return res;
    } catch (err) {
        dispatch(authError(err));
        return null;
    }
}