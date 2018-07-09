import { connect } from 'react-redux';

import Panel from '../components/Panel';
import { showDialog } from '../actions/Dialog';

const mapStateToProps = (state) => {
  return{
    open: state.Dialog.open,
    type: state.Dialog.type
  };
};

const mapDispatchToProps = ( dispatch )=>{
  return {
    showDialog: (type)=>{
      dispatch(showDialog(type));
    }
  };
};

const ConnectPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default ConnectPanel;
