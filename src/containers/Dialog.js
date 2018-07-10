import { connect } from 'react-redux';

import Dialog from '../components/Dialog';
import { hideDialog } from '../actions/Dialog';
import { blockCreate } from '../actions/Block';


const mapStateToProps = (state) => {
  return{
    open: state.Dialog.open,
    type: state.Dialog.type
  };
};

const mapDispatchToProps = ( dispatch )=>{
  return {
    hideDialog: () =>{
      dispatch(hideDialog());
    },
    blockCreate: (type, block, geometry) =>{
      dispatch(blockCreate(type, block, geometry));
    }
  };
};

const ConnectDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);

export default ConnectDialog;
