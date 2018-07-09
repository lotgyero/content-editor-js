import { combineReducers } from 'redux';

import Blocks from './Blocks';
import Dialog from './Dialog';

const rootReducer = combineReducers({
  Dialog,
  Blocks
});

export default rootReducer;
