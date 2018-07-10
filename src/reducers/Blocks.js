import {
  BLOCK_CREATE,
  BLOCK_SELECTED,
  BLOCK_MOVE,
  BLOCK_RESIZE
} from '../constants/Blocks';

const initialState = {
  selected: '',
  blocks: []
};

const Blocks = (state = initialState, action) =>{
  switch(action.type){

  case BLOCK_CREATE:
    const block={
      type: action.blockType,
      data: action.block
    };
    return{
      ...state,
      blocks: [
        ...state.blocks,
        block
      ]
    };

  case BLOCK_SELECTED:
    return {...state, selected: action.block};

  case BLOCK_MOVE:
    return{
      ...state,
      blocks: state.blocks.map(
        block =>
          block.id === action.id ?
          {...block, x: action.x, y: action.y}
        : block)
    };


  case BLOCK_RESIZE:
    return{
      ...state,
      blocks: state.blocks.map(
        block =>
          block.id === action.id ?
          {...block, x2: action.x2, y2: action.y2}
        : block)
    };

  default:
    return state;
  }
};

export default Blocks;
