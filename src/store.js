import {loadState, saveState} from './localStorage';
import {createStore} from 'redux';
import reducers from './reducers';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState
);
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  });
});

export default store;