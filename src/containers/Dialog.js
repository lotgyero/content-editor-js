import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from '../components/Dialog';
import { hideDialog } from '../actions/Dialog';

const mapStateToProps = (state) => {
  return{
    open: state.Dialog.open,
    type: state.Dialog.type
  };
};

const mapDispatchToProps = ( dispatch )=>{
  return {
    hideDialog: () =>{
      dispatch(hideDialog);
    }
  };
};

const ConnectDialog = connect(
  mapStateToProps
)(Dialog);

export default ConnectDialog;
