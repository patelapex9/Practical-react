import { UPLOAD_DOCUMENT,DOCUMENT_LIST,DOCUMENT_SINGLE } from '../actions/types';

const INTIAL_STATE = {
}; 

export default function (state = INTIAL_STATE, action) {  
  switch(action.type) {
    case UPLOAD_DOCUMENT:
    return { ...state, upload: action.payload,list: state.list.concat([action.payload]) };    
    case DOCUMENT_LIST:
      return { ...state, list: action.payload,single: action.payload[0] };  
    case DOCUMENT_SINGLE:
        return { ...state, single: action.payload };     
  }
  return state;
}