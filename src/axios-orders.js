// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://react-my-burger.firebaseio.com/'
// });

// export default instance;


import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ham-burger.firebaseio.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,HEAD,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});

export default instance;

