import axios from 'axios';
const baseUrl = 'http://127.0.0.1:3100/api/';

export const get = async (url, params, options) => {
    let headers = new Headers();
    if (options?.headers) {
        options.headers.forEach(header => headers.append(header.key, header.value));
    } else {
        headers.append('Content-Type', 'application/json');
      }
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const fetchOptions = {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
        mode: 'cors',
        headers,
        ...options
    };
    try {
        const response = await axios.get(baseUrl + url, {params, headers});
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const post = async (url, data, options) => {
    let headers = new Headers();
    if (options?.headers) {
        options.headers.forEach(header => headers.append(header.key, header.value));
    } else {
        headers.append('Content-Type', 'application/json');
    }
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const fetchOptions = {
        method: 'POST',
        // credentials: 'same-origin',
        mode: 'no-cors',
        // redirect: 'follow',
        headers,
        ...options
    };

    try {
        const raw = await axios.post(baseUrl + url, data, fetchOptions);
        return raw.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}