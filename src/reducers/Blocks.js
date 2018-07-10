import {
  BLOCK_CREATE,
  BLOCK_SELECT,
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
      data: action.block,
      geometry: action.geometry
    };
    return{
      ...state,
      blocks: [
        ...state.blocks,
        block
      ]
    };

  case BLOCK_SELECT:
    return {...state, selected: action.block};

  case BLOCK_MOVE:
    return{
      ...state,
      blocks: state.blocks.map(
        (block, id) =>
          {
            return id === action.block.id ?
              {...block, geometry:{
                ...block.geometry,
                x: action.block.x,
                y: action.block.y,
              }}
            : block;
          }
      )
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
