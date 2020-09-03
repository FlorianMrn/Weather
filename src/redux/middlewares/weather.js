import axios from 'axios';

import { GET_JSON } from '../actionsTypes';

const weatherMiddleware = store => next => action => {
    console.log("Middleware ok");
    switch (action.type) {
        case GET_JSON:
            axios.get('url')
                .then((res) => {

                })
                .catch((err) => {
                    console.error(err)
                }).finally(() => {

                });
            break;
        default :
        next(action);
    };
};

export default weatherMiddleware;