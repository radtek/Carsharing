import { createStore , applyMiddleware} from 'redux';
import rootReducer from '../reducers/reducers';
import  middleware from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(middleware));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers', () => {
            const nextReducer = require('../reducers/reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
