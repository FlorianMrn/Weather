import { GET_VALUE, 
    GET_JSON, 
    GET_PHOTO, 
    SEND_REQUEST_PIXA, 
    SEND_REQUEST_OPEN, 
    LOADING, GET_ERRORS, 
    SET_CURRENT_USER, 
    LOADING_AUTH, 
    REGISTER,
    LOGIN,
    MESSAGE,
    DISCONNECT,
    SAVE_FAV,
    DELETE_FAV,
    SEND_DELETE_DATA,
    SET_FAVS,
    GET_FAVS
} 
from "./actionsTypes";

export const getValue = (value) => (
    {
        type : GET_VALUE,
        value
    }
);

export const getJson = (infos) => (
    {
        type : GET_JSON,
        infos
    }
);

export const getPhoto = (photo) => (
    {
        type : GET_PHOTO,
        photo
    }
);

export const sendRequestPixa = () => (
    {
        type : SEND_REQUEST_PIXA
    }
);

export const sendRequestOpen = () => (
    {
        type : SEND_REQUEST_OPEN
    }
);

export const loading = () => (
    {
        type : LOADING
    }
);

export const getErrors = (payload) => (
    {
        type : GET_ERRORS,
        payload
    }
);

export const setCurrentUser = (decoded) => (
    {
        type : SET_CURRENT_USER,
        payload : decoded
    }
);

export const loadingAuth = () => (
    {
        type : LOADING_AUTH
    }
);

export const register = (userData) => (
    {
        type : REGISTER,
        userData
    }
);

export const login = (userData) => (
    {
        type : LOGIN,
        userData
    }
);

export const message = (message) => (
    {
        type : MESSAGE,
        message
    }
);

export const disconnect = () => (
    {
        type : DISCONNECT
    }
);

export const saveFav = () => (
    {
        type: SAVE_FAV
    }
);

export const deleteFav = (id) => (
    {
        type: DELETE_FAV,
        id
    }
);

export const sendDeleteData = (id) => (
    {
        type : SEND_DELETE_DATA,
        id
    }
)

export const setFavs = (fav) => (
    {
        type: SET_FAVS,
        fav
    }
);

export const getFavs = () => (
    {
        type: GET_FAVS
    }
);
