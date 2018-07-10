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

const getY = (blocks) =>{
  if(blocks.length > 0){
    return blocks[blocks.length -1].geometry.y + blocks[blocks.length -1].geometry.sizeY;
  } else {
    return 0;
  }
};

const getX =(blocks) =>{
  if(blocks.length > 0){
    return blocks[blocks.length -1].geometry.x;
  } else {
    return 0;
  }
};

const xCoordianate = (blocks, id, pointType, size) => {
  const localGeometry = blocks[id].geometry;
  switch(pointType){
  case "NW":
    return localGeometry.x + localGeometry.sizeX - size  ;
  case "NE":
    return localGeometry.x;
  case "SW":
    return localGeometry.sizeX - size + localGeometry.x;
  case "SE":
    return localGeometry.x;
  default:
    return localGeometry.x;
  }
};

const yCoordianate = (blocks, id, pointType, size) => {
  const localGeometry = blocks[id].geometry;
  switch(pointType){
  case "NW":
    return localGeometry.sizeY - size + localGeometry.y;
  case "NE":
    return localGeometry.sizeY - size + localGeometry.y;
  case "SW":
    return localGeometry.y;
  case "SE":
    return localGeometry.y;
  default:
    return localGeometry.y;
  }
};

const Blocks = (state = initialState, action) =>{
  switch(action.type){

  case BLOCK_CREATE:
    return{
      ...state,
      blocks: [
        ...state.blocks,
        {type: action.blockType,
         data: action.block,
         geometry: {
           x: getX(state.blocks),
           y: getY(state.blocks),
           sizeX: 200,
           sizeY: 200
         }
        }
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
        (block, id) =>{
          return id === action.block.id ?
          {...block, geometry:{
            ...block.geometry,
            x: xCoordianate(
              state.blocks,
              action.block.id,
              action.block.pointType,
              action.block.sizeX
            ),
            y: yCoordianate(
              state.blocks,
              action.block.id,
              action.block.pointType,
              action.block.sizeY
            ),
            sizeX: action.block.sizeX,
            sizeY: action.block.sizeY
          }}
          : block;
        })
    };
  default:
    return state;
  }
};

export default Blocks;
