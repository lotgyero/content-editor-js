import {
  DIALOG_OPEN,
  DIALOG_CLOSE
} from '../constants/Dialog';

const initialState = {
  open: false,
  type: null
};

const Dialog = (state = initialState, action) =>{
  switch(action.type){
  case DIALOG_OPEN:
    return {
      ...state,
      open: true,
      type: action.content
    };
  case DIALOG_CLOSE:
    return {
      ...state,
      open: false,
      type: null
  };
  default:
    return state;
  }
};

export default Dialog;
