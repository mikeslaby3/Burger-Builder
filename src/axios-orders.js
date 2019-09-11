import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-2e5b5.firebaseio.com/'
});

export default instance;