import { connect } from 'react-redux';

import { EditingSpace } from '../components/EditingSpace';

// import {} from '../actions/EditingSpace';

const mapStateToProps = (state) =>{
  return{
    blocks: state.Blocks.blocks
  };
};

const mapDispatchToProps = ( dispatch ) =>{
  return{

  };
};

const ConnsectedEditingSpace = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingSpace);

export default ConnsectedEditingSpace;
