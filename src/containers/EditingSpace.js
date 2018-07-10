import { connect } from 'react-redux';

import { EditingSpace } from '../components/EditingSpace';

import {
  blockSelect,
  blockMove
} from '../actions/Block';
// import {} from '../actions/EditingSpace';

const mapStateToProps = (state) =>{
  return{
    blocks: state.Blocks.blocks
  };
};

const mapDispatchToProps = ( dispatch ) =>{
  return{
    blockSelect: (type, block)=>{
      dispatch(blockSelect(type, block));
    },
    blockMove: (id, x, y)=>{
      dispatch(blockMove(id, x, y));
    }
  };
};

const ConnsectedEditingSpace = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingSpace);

export default ConnsectedEditingSpace;
