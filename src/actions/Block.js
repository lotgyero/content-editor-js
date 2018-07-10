import {
  BLOCK_CREATE,
  BLOCK_SELECT,
  BLOCK_MOVE
} from '../constants/Blocks';


export const blockCreate = ( type, block , geometry ) =>{
  return {
    type: BLOCK_CREATE,
    blockType: type,
    block: block,
    geometry: geometry
  };
};

export const blockSelect = ( type, block) =>{
  return {
    type: BLOCK_SELECT,
    blockType: type,
    block: block
  };
};

export const blockMove = (id, x, y)=>{
  return {
    type: BLOCK_MOVE,
    block:{id, x, y }
  };
};
