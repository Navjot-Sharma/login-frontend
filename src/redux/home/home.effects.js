import { shuffle } from '../../shared/services/Array';
import { get, post } from '../../shared/services/Http';
import { fetchingHome, homeError, setHome } from './home.actions';

export const getHome = () => async dispatch => {
    dispatch(fetchingHome(true));

    try {
        let res = await get('home');
        console.log('home', res);
        
        dispatch(fetchingHome(false));
        // // todo remove this
        // if (!res) {
        //     res = [1,2,3,4];
        // }
        if (!res || res.status == false) {
            return null;
        }
        res.banners = shuffle(res.banners);
        dispatch(setHome(res));
        return res;
    } catch (err) {
        dispatch(homeError(err));
        return null;
    }
}