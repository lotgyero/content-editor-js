import { connect } from 'react-redux';

import Panel from '../components/Panel';
import { dialogShow } from '../actions/Dialog';

const mapStateToProps = (state) => {
  return{
    open: state.Dialog.open,
    type: state.Dialog.type
  };
};

const mapDispatchToProps = ( dispatch )=>{
  return {
    showDialog: (type)=>{
      dispatch(dialogShow(type));
    }
  };
};

const ConnectPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default ConnectPanel;
