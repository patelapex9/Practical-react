import axios from 'axios';
import { UPLOAD_DOCUMENT, GET_ERRORS,DOCUMENT_LIST,DOCUMENT_SINGLE} from './types';
import { API_URL } from './global';
const baseURL = API_URL;

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
export const uploadDocument= (data) => dispatch => {
    axios
        .post(baseURL + 'upload', data,config)
        .then(res =>
            dispatch({
                type: UPLOAD_DOCUMENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};

export const getDocuments= () => dispatch => {
    axios
        .get(baseURL + 'documents')
        .then(res =>
            dispatch({
                type: DOCUMENT_LIST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};

export const getDocumentSelected= (data) => dispatch => {
    dispatch({
        type: DOCUMENT_SINGLE,
        payload: data
    })
};