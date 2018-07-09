import {
  DIALOG_OPEN,
  DIALOG_CLOSE
} from '../constants/Dialog';

export const showDialog = ( type ) =>{
  return {
    type: DIALOG_OPEN,
    content: type
  };
};

export const hideDialog = () =>{
  return {
    type: DIALOG_CLOSE
  };
};
