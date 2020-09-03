import { GET_VALUE, GET_JSON, GET_PHOTO } from "./actionsTypes";

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
)