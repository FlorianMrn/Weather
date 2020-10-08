import { GET_VALUE, 
    GET_JSON, 
    GET_PHOTO, 
    SEND_REQUEST_PIXA, 
    SEND_REQUEST_OPEN, 
    LOADING, GET_ERRORS, 
    SET_CURRENT_USER, 
    LOADING_AUTH, 
    REGISTER,
    LOGIN} 
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

export const setCurrentUser = (payload) => (
    {
        type : SET_CURRENT_USER,
        payload
    }
);

export const loadingAuth = () => (
    {
        type : LOADING_AUTH
    }
);

export const register = () => (
    {
        type : REGISTER
    }
);

export const login = () => (
    {
        type : LOGIN
    }
)
