import {
  BLOCK_CREATE
} from '../constants/Blocks';


export const blockCreate = ( type, block ) =>{
  return {
    type: BLOCK_CREATE,
    blockType: type,
    block: block
  };
};
