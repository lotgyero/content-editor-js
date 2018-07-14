import { DIALOG_SHOW, DIALOG_HIDE } from '../constants/Dialog';

const initialState = {
  open: false,
  type: null
};

const Dialog = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_SHOW:
      return {
        ...state,
        open: true,
        type: action.content
      };
    case DIALOG_HIDE:
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
