import { connect } from 'react-redux';

import EditingSpace from '../components/EditingSpace';

import { blockSelect, blockMove, blockResize } from '../actions/Block';
// import {} from '../actions/EditingSpace';

const mapStateToProps = state => {
  return {
    blocks: state.Blocks.blocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      blockSelect: (type, block) => {
        dispatch(blockSelect(type, block));
      },
      blockMove: (id, x, y) => {
        dispatch(blockMove(id, x, y));
      },
      blockResize: (id, x, y, sizeX, sizeY, pointType) => {
        dispatch(blockResize(id, x, y, sizeX, sizeY, pointType));
      }
    }
  };
};

const ConnsectedEditingSpace = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingSpace);

export default ConnsectedEditingSpace;
