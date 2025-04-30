import { createStore, applyMiddleware, compose } from 'redux';
import  {thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const configureStore = preloadedState => {
  let myCompose;
  if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    myCompose = compose(
      applyMiddleware(thunk, createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    myCompose = compose(applyMiddleware(thunk, createLogger()));
  }
  const store = createStore(rootReducer, preloadedState, myCompose);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
