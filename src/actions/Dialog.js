import {
  DIALOG_SHOW,
  DIALOG_HIDE
} from '../constants/Dialog';

export const dialogShow = ( type ) =>{
  return {
    type: DIALOG_SHOW,
    content: type
  };
};

export const dialogHide = () =>{
  return {
    type: DIALOG_HIDE
  };
};
