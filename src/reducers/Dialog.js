import {
  DIALOG_OPEN,
  DIALOG_CLOSE
} from '../constants/Dialog';

const initialState = {
  open: false
};

const Dialog = (state = initialState, action) =>{
  switch(action.type){
  case DIALOG_OPEN:{
    return {
      ...state,
      open: true
    };
  };
  case DIALOG_CLOSE:{
    return {
      ...state,
      open: false
    };
  };
  default:
    return state;
  };
};

export default Dialog;
